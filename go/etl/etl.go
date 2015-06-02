package etl

import "strings"

type Legacy map[int][]string
type NewSystem map[string]int

func Transform(oldValue Legacy) NewSystem {
	returnValue := make(NewSystem)
	for key, characters := range oldValue {
		for _, char := range characters {
			returnValue[strings.ToLower(char)] = key
		}
	}
	return returnValue
}
