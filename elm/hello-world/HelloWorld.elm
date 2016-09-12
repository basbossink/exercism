module HelloWorld exposing (..)


helloWorld : Maybe String -> String
helloWorld name =
  let
    name' =
      case name of
        Nothing ->
          "World"

        Just name'' ->
          name''
  in
    "Hello, " ++ name' ++ "!"
