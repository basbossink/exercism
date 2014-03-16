{-
Copyright 2014 Bas Bossink (bas.bossink@gmail.com).
-}
module WordCount (wordCount) where

import Data.Char (isAlphaNum, toLower)
import Data.Foldable (foldl')
import Data.List.Split (wordsBy)
import Data.Map (Map, empty, insertWith)

tallyWords :: [String] -> Map String Integer
tallyWords words' = foldl' tallyWord empty words' 
  where 
  tallyWord m word = insertWith (+) (loweredWord word) 1 m
    where
      loweredWord = map toLower
    
wordCount :: String -> Map String Integer
wordCount = tallyWords . (wordsBy $ not . isAlphaNum)

