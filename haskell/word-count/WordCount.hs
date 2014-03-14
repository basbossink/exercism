{-
Copyright 2014 Bas Bossink (bas.bossink@gmail.com).
-}
module WordCount (wordCount) where

import Data.Char (isAlphaNum, toLower)
import Data.Map (Map, empty, insertWith)

split :: String -> [String]
split phrase = 
  case dropWhile toBeIgnored phrase of
    "" -> []
    letters -> letter : split splitted
      where 
      (letter, splitted) = break toBeIgnored letters
  where
  toBeIgnored = not . isAlphaNum

tallyWords :: [String] -> Map String Integer
tallyWords words' = foldl tallyWord empty words' 
  where 
  tallyWord m word = insertWith (+) loweredWord 1 m
    where
      loweredWord = map toLower word
    
wordCount :: String -> Map String Integer
wordCount = tallyWords . split

