import scala.collection.mutable

class Phrase(text: String) {
  def wordCount():mutable.Map[String,Int] = {
    val normalizedWords =
      text.replaceAll("[^\\w\\s']", " ").
        toLowerCase.
        split(' ').
        filter(c => !c.forall(_.isSpaceChar))

    (mutable.Map[String, Int]().withDefaultValue(0) /: normalizedWords) {
      (accumulator, word) => {
        accumulator += (word -> (accumulator(word) + 1))
      }
    }
  }
}