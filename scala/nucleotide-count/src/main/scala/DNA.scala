import scala.collection.mutable

class DNA(nucleotides: String) {
  private val dnaNucleotides = List('A', 'G', 'C', 'T')
  private def validDnaNucleotide(word: String) =
    word forall (dnaNucleotides.contains(_))

  require(validDnaNucleotide(nucleotides))

  val nucleotideCounts = mutable.Map[Char, Int]().withDefaultValue(0) ++
    (dnaNucleotides map (c => (c -> (nucleotides count (_ == c)))))

  def count(nucleotide: Char) = {
    require(validDnaNucleotide(nucleotide.toString) || nucleotide == 'U')
    nucleotideCounts(nucleotide)
  }
}
