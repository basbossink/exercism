import scala.collection.mutable

class Phrase(text: String) {
  def wordCount():mutable.Map[String,Int] = {
    val normalizedWords =
      text.replaceAll("[^\\w\\s']", " ").
        toLowerCase.
        split(' ').
        filter(c => !c.forall(_.isSpaceChar))

    (mutable.Map[String, Int]() /: normalizedWords) {
      (accumulator, word) => {
        val oldCount = accumulator.getOrElse(word, 0)
        accumulator += (word -> (oldCount + 1))
      }
    }
  }
}
