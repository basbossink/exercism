import scala.collection.mutable

class DNA(string: String) {
  val dnaNucleotides = List('A', 'G', 'C', 'T')

  def validDnaNucleotide(string: String) = string forall (dnaNucleotides.contains(_))

  require(validDnaNucleotide(string))

  def characterHistogram(word: String) = (word foldLeft mutable.Map[Char, Int]())(
    (accumulator, char) => {
      val oldValue = withDefaultZero(accumulator, char)
      accumulator += (char -> (oldValue + 1))
    })

  def withDefaultZero(hist: mutable.Map[Char, Int], key: Char) = hist.get(key) match {
    case Some(v) => v
    case None => 0
  }

  val histogram = characterHistogram(string)

  def count(nucleotide: Char) = {
    require(validDnaNucleotide(nucleotide.toString) || nucleotide == 'U')
    withDefaultZero(histogram, nucleotide)
  }

  def nucleotideCounts() =
    mutable.Map('A' -> withDefaultZero(histogram, 'A'),
      'C' -> withDefaultZero(histogram, 'C'),
      'G' -> withDefaultZero(histogram, 'G'),
      'T' -> withDefaultZero(histogram, 'T'))
}
