object Hamming {
  def compute(first: String, second: String) = { 
    first.zip(second).
      filter(pair => pair._1 != pair._2).
      length
  }
}
 
   
