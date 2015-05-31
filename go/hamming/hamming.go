package hamming

func min(lhs, rhs int) int {
	if lhs <= rhs {
		return lhs
	}
	return rhs
}

func Distance(first, second string) int {
	returnValue := 0
	minimumLength := min(len(first), len(second))
	for i := 0; i < minimumLength; i++ {
		if first[i] != second[i] {
			returnValue++
		}
	}
	return returnValue
}
