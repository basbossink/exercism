package wc

import (
	"regexp"
	"strings"
)

type Histogram map[string]int

func WordCount(text string) Histogram {
	normalized := normalize(text)
	result := Histogram{}
	for _, word := range split(normalized) {
		tallyWord(word, result)
	}
	return result
}

func normalize(text string) string {
	nonAlphaNumeric := regexp.MustCompile(`[^a-zA-Z0-9]`)
	return strings.ToLower(nonAlphaNumeric.ReplaceAllString(text, " "))
}

func split(text string) []string {
	result := []string{}
	words := strings.Split(text, " ")
	for _, word := range words {
		if isProperWord(word) {
			result = append(result, word)
		}
	}
	return result
}

func isProperWord(word string) bool {
	return len(word) != 0
}

func tallyWord(word string, result Histogram) {
	currentValue, containsKey := result[word]
	if containsKey {
		result[word] = currentValue + 1
	} else {
		result[word] = 1
	}
}
