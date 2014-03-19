{-
Copyright 2014 Bas Bossink (bas.bossink@gmail.com).
-}
module WordCount (wordCount) where

import Data.Char (isAlphaNum, toLower)
import Data.Foldable (foldl')
import Data.Map.Strict (Map, empty, insertWith)

wordCount :: String -> Map String Integer
wordCount = tallyWords . words . map normalize

tallyWords :: [String] -> Map String Integer
tallyWords = foldl' tallyWord empty 
  where 
  tallyWord accumulator word = insertWith (+) word 1 accumulator

normalize :: Char -> Char
normalize c 
  | isAlphaNum c = toLower c
  | otherwise = ' '
