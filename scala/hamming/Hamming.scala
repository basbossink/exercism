object Hamming {
  def compute(first: String, second: String): Int = {
    (first zip second) count (p => p._1 != p._2)
  }
}
 
   