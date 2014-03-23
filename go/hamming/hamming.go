package hamming

func min(a, b int) int {
  if a <= b {
    return a
  }
  return b
}

func Distance(first, second string) int {
  returnValue := 0
  for i := 0; i < min(len(first),len(second)); i++ {
    if first[i] != second[i] {
      returnValue++
    }
  }
  return returnValue
}
