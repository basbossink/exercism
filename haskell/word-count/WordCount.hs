{-
Copyright 2014 Bas Bossink (bas.bossink@gmail.com).
-}
module WordCount (wordCount) where

import Data.Char (isAlphaNum, toLower)
import Data.Foldable (foldl')
import Data.List.Split (wordsBy)
import Data.Map.Strict (Map, fromListWith)

tallyWords :: [String] -> Map String Integer
tallyWords words = fromListWith (+) pairs
  where
  lowerWord = map toLower
  loweredWords = map lowerWord words
  pairs = zip loweredWords $ repeat 1

wordCount :: String -> Map String Integer
wordCount = tallyWords . wordsBy (not . isAlphaNum)
