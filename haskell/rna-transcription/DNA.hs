{-

Copyright Bas Bossink (bas.bossink@gmail.com)
This file is part of  DNA.

DNA is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

DNA is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with DNA. If not, see <http://www.gnu.org/licenses/>.

-}

module DNA where

toRNA = map toRNAChar
    where toRNAChar 'C' = 'G' 
          toRNAChar 'G' = 'C' 
          toRNAChar 'A' = 'U' 
          toRNAChar 'T' = 'A' 
          toRNAChar _ = undefined

