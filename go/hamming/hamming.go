package hamming

func min(lhs, rhs int) int {
	if lhs <= rhs {
		return lhs
	}
	return rhs
}

func Distance(first, second string) int {
  returnValue := 0
  if(len(first) != len(second)) {
    return -1
  }
  minLength := min(len(first),len(second))
  for i := 0; i < minLength; i++ {
    if first[i] != second[i] {
      returnValue++
    }
  }
  return returnValue
}
