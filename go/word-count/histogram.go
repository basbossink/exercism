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
		result[word]++
	}
	return result
}

func normalize(text string) string {
	nonAlphaNumeric := regexp.MustCompile(`[^a-zA-Z0-9]`)
	return strings.ToLower(nonAlphaNumeric.ReplaceAllString(text, " "))
}

func split(text string) []string {
	result := []string{}
	words := strings.Fields(text)
	for _, word := range words {
		result = append(result, word)
	}
	return result
}
