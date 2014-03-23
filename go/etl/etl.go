package etl

import "strings"

type legacy map[int][]string
type newSystem map[string]int

func Transform(oldValue legacy) newSystem {
  returnValue := make(newSystem)
  for key, characters := range oldValue {
    for _,char := range characters {
      returnValue[strings.ToLower(char)] = key
    }
  }
  return returnValue
}
