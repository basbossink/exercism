package anagram

import (
	"strings"
    "sort"
)

func Detect(subject string, candidates []string) []string {
	var returnValue []string
	for _, candidate := range candidates {
		if isAnagramOf(subject, candidate) {
			returnValue = append(returnValue, strings.ToLower(candidate))
		}
	}
	return returnValue
}

func isAnagramOf(lhs string, rhs string) bool {
    loweredLhs := strings.ToLower(lhs)
    loweredRhs := strings.ToLower(rhs)
    return loweredLhs != loweredRhs && 
        sortString(loweredLhs) == sortString(loweredRhs)
}

func sortString(anyString string) string {
    s := strings.Split(anyString, "")
    sort.Strings(s)
    return strings.Join(s, "")
}
