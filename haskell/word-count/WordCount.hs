{-
Copyright 2014 Bas Bossink (bas.bossink@gmail.com).
-}
module WordCount (wordCount) where

import Data.Char (isAlphaNum, toLower)
import Data.Foldable (foldl')
import Data.List.Split (wordsBy)
import Data.Map.Strict (Map, empty, insertWith)

tallyWords :: [String] -> Map String Integer
tallyWords = foldl' tallyWord empty 
  where 
  lowerWord = map toLower 
  tallyWord m word = insertWith (+) (lowerWord word) 1 m

wordCount :: String -> Map String Integer
wordCount = tallyWords . wordsBy (not . isAlphaNum)
