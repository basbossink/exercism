package anagram

import (
	"strings"
)

type histogram map[rune]int
type runeHistogramRepresentation struct {
	word  string
	runes *histogram
}

func newRuneHistogramRepresentation(word string) *runeHistogramRepresentation {
	result := runeHistogramRepresentation{
		strings.ToLower(word),
		&histogram{},
	}
	for _, r := range result.word {
		(*result.runes)[r]++
	}
	return &result
}

func (lhs *histogram) Equals(rhs *histogram) bool {
	for r, count := range *lhs {
		rhsCount, found := (*rhs)[r]
		if !found || rhsCount != count {
			return false
		}
	}
	return true
}

func (lhs *runeHistogramRepresentation) isAnagramOf(rhs *runeHistogramRepresentation) bool {
	return (*lhs).word != (*rhs).word &&
		len((*lhs).word) == len((*rhs).word) &&
		(*lhs).runes.Equals((*rhs).runes)
}

func Detect(subject string, candidates []string) []string {
	var returnValue []string
	lowered := newRuneHistogramRepresentation(subject)
	for _, candidate := range candidates {
		cand := newRuneHistogramRepresentation(candidate)
		if lowered.isAnagramOf(cand) {
			returnValue = append(returnValue, cand.word)
		}
	}
	return returnValue
}
