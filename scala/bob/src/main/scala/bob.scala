class Bob {
  def hey(line: String): String = {
    val letters = line.filter(_.isLetter)
    if (line.filter(!_.isWhitespace).length == 0) {
      "Fine. Be that way!"
    } else if (letters.length > 0 && letters.forall(_.isUpper)) {
      "Woah, chill out!" 
    } else if (line.last.equals('?') ) {
      "Sure." 
    } else {
      "Whatever."
    }
  }
}

