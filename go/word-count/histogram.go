package wc

import (
	"strings"
)

type Histogram map[string]int

func WordCount(text string) Histogram {
	normalized := normalize(text)
	result := Histogram{}
	for _, word := range strings.Fields(normalized) {
		result[word]++
	}
	return result
}

func normalize(text string) string {
	return strings.Map(func(r rune) rune {
		if r >= 'a' && r <= 'z' || r >= '0' && r <= '9' {
			return r
		}
		return ' '
	}, strings.ToLower(text))
}
