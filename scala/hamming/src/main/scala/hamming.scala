object Hamming {
  def compute(first: String, second: String) = { 
    (first zip second).filter(p => p._1 != p._2).length
  }
}
 
   
