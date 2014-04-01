package anagram

import (
	"strings"
)

func Detect(subject string, candidates []string) []string {
	var returnValue []string
	lowered := strings.ToLower(subject)
	for _, candidate := range candidates {
		addCandidateIfAnagram(lowered, candidate, &returnValue)
	}
	return returnValue
}

func addCandidateIfAnagram(lowered, candidate string, accumulator *[]string) {
	loweredCandidate := strings.ToLower(candidate)
	if isPotentialAnagram(lowered, loweredCandidate) {
		for _, permutation := range permutations(loweredCandidate) {
			if lowered == permutation {
				*accumulator = append(*accumulator, loweredCandidate)
				break
			}
		}
	}
}

func isPotentialAnagram(lowered, loweredCandidate string) bool {
	return len(loweredCandidate) == len(lowered) &&
		loweredCandidate != lowered &&
		haveSameCharacters(lowered, loweredCandidate)
}

func haveSameCharacters(first, second string) bool {
	firstSet := createSetOfCharecters(first)
	secondSet := createSetOfCharecters(second)
	return includes(firstSet, secondSet) && includes(secondSet, firstSet)
}

func createSetOfCharecters(subject string) map[rune]bool {
	result := make(map[rune]bool)
	for _, char := range subject {
		result[char] = true
	}
	return result
}

func includes(first, second map[rune]bool) bool {
	for key, _ := range first {
		if !second[key] {
			return false
		}
	}
	return true
}

func permutations(subject string) []string {
	if len(subject) <= 1 {
		return []string{subject}
	}
	perms := permutations(subject[1:])
	char := subject[0]
	result := []string{}
	for _, perm := range perms {
		result = append(result, intersperseCharacterAtEachIndex(perm, char)...)
	}
	return result
}

func intersperseCharacterAtEachIndex(perm string, char uint8) []string {
	result := []string{}
	for i := 0; i < (len(perm) + 1); i++ {
		result = append(result, perm[:i]+string(char)+perm[i:])
	}
	return result
}
