{-
Copyright 2014 Bas Bossink (bas.bossink@gmail.com).
-}

module DNA (toRNA) where

toRNA :: String -> String
toRNA = map toRNAChar
  where 
  toRNAChar c = case c of 
    'C' -> 'G' 
    'G' -> 'C' 
    'A' -> 'U' 
    'T' -> 'A' 
    _ -> undefined

