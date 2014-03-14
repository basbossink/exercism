{-
Copyright 2014 Bas Bossink (bas.bossink@gmail.com).
-}
module WordCount (wordCount) where

import Data.Char (toLower, isSpace, isPunctuation, isSymbol)
import Data.Map (Map, empty, adjust, insert, member)

split :: String -> [String]
split phrase = 
  case dropWhile toBeIgnored phrase of
    "" -> []
    letters -> letter : split splitted
      where 
      (letter, splitted) = break toBeIgnored letters
  where
  toBeIgnored = \char -> or [isSpace char, isPunctuation char, isSymbol char]

tallyWords :: [String] -> Map String Integer
tallyWords words' = tallyWords' words' empty
  where 
  tallyWords' (word:restOfWords) m = case member loweredWord m of
    True -> tallyWords' restOfWords $ adjust (1 +) loweredWord m 
    False -> tallyWords' restOfWords $ insert loweredWord 1 m 
    where
      loweredWord = map toLower word
  tallyWords' [] m = m
    
wordCount :: String -> Map String Integer
wordCount = tallyWords . split

