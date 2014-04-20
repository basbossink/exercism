import scala.collection.mutable.Map

class Anagram(word: String) {
  def characterHistogram(word: String) = {
    word.foldLeft(Map[Char,Int]())( 
      (accumulator, char) => {
        val loweredChar = char.toLower
        val oldValue = 
          if (accumulator.contains(loweredChar)) 
            accumulator(loweredChar) 
          else 
            0
        accumulator += (loweredChar -> (oldValue + 1))
      })
  }
  val histogram = characterHistogram(word)
  def matches(candidates: Seq[String]): Seq[String] = {
    candidates.filter(
      candidate => candidate.toLowerCase != word.toLowerCase && 
        candidate.length == word.length &&
        histogram == characterHistogram(candidate))
  }
}
