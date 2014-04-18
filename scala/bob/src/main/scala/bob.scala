class Bob {
  def hey(poke: String): String = {
    val letters = poke.filter(_.isLetter)
    if (poke.filter(!_.isWhitespace).isEmpty) {
      "Fine. Be that way!"
    } else if (!letters.isEmpty && letters.forall(_.isUpper)) {
      "Woah, chill out!" 
    } else if (poke.last.equals('?') ) {
      "Sure." 
    } else {
      "Whatever."
    }
  }
}

