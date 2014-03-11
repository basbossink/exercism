{-

Copyright Bas Bossink (bas.bossink@gmail.com)
This file is part of  bob.

bob is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

bob is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with bob. If not, see <http://www.gnu.org/licenses/>.

-}

module Bob where

import Data.Char

responseFor a 
    | or [all isSpace a, a == ""] = "Fine. Be that way!" 
    | and [ last a == '?', all (\x -> or [isSpace x, isUpper x]) $ tail $ reverse a ] =  "Woah, chill out!"
    | last a == '?' = "Sure."
    | and [ map toUpper a == a, any isLetter a] = "Woah, chill out!"
    | otherwise = "Whatever."
