class Anagram(word: String) {
  val loweredWord = word.toLowerCase

  def matches(candidates: Seq[String]): Seq[String] =
    candidates.filter(
      candidate => {
        val loweredCandidate = candidate.toLowerCase
        loweredWord != loweredCandidate &&
          loweredWord.sorted == loweredCandidate.sorted
      })
}