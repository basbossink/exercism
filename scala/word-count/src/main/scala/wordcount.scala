import scala.collection.mutable.Map

class Phrase(text: String) {
  def wordCount():Map[String,Int] = {
    def normalize():String = {
      text.replaceAll("[^\\w\\s']", " ").toLowerCase
    }

    normalize().split(' ').
      filter(c => !c.forall(_.isSpaceChar)).
      foldLeft(Map[String,Int]())(
        (accumulator,word) => {
          val oldCount = 
            if (accumulator.contains(word)) {
              accumulator(word)
            } else {
              0
            } 
          accumulator += (word -> (oldCount + 1))
        })
  }
}
