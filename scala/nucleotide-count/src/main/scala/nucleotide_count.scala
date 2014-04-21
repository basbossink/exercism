import scala.collection.mutable.Map

class DNA(string: String) {
  val dnaNucleotides = List('A', 'G', 'C', 'T')
  def validDnaNucleotide(string: String) = string.forall(dnaNucleotides.contains(_))
  require(validDnaNucleotide(string))
  
  def characterHistogram(word: String) = {
    word.foldLeft(Map[Char,Int]())( 
      (accumulator, char) => {
        val oldValue = withDefaultZero(accumulator, char)
        accumulator += (char -> (oldValue + 1))
      })
  }

  def withDefaultZero(hist: Map[Char,Int],key: Char):Int =
    if(hist.contains(key)) hist(key) else 0

  val histogram = characterHistogram(string)

  def count(nucleotide: Char):Int = {
    require(validDnaNucleotide(nucleotide.toString) ||
      nucleotide == 'U')
    withDefaultZero(histogram, nucleotide)
  }

  def nucleotideCounts():Map[Char,Int] = 
    Map('A' -> withDefaultZero(histogram, 'A'), 
      'C' -> withDefaultZero(histogram, 'C'),
      'G' -> withDefaultZero(histogram, 'G'),
      'T' -> withDefaultZero(histogram, 'T'))
}
