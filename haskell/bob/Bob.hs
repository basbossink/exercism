{-
Copyright 2014 Bas Bossink (bas.bossink@gmail.com).
-}

module Bob (responseFor) where

import Data.Char

responseFor :: String -> String
responseFor a 
  | all isSpace a = "Fine. Be that way!" 
  | and [map toUpper a == a, any isLetter a] = "Woah, chill out!"
  | last a == '?' = "Sure."
  | otherwise = "Whatever."
