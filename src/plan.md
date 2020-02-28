<!-- # Plan

- PokeSuggest {searchTerm, result}
    - SearchBar (input: string, handleInputChange: func, handleButtonClick: func)
      - SearchField (input: string, onInputUpdate: func)
      - SearchButton
    - AutoComplete {options}
      - OptionsList
      - Option
    - PokemonDisplay
      - PokemonImage
      - PokemonInfo

What do we want to track?
    - what is typed into the search field (searchTerm)
    - the list of options (options)
    - the pokemon we want to show (result)
How do each of these things interact with our components?
    - searchTerm
      - needs to be seen by search bar > search field, autocomplete > options list
      - needs to be edited by options > option, search bar > search field
        - options needs to be able to set the searchTerm when clicking an option
        - search field needs to be able to set the searchTerm when typing in to the input
      - lives in PokeSuggest
    - options
      - needs to be seen by autocomplete > options list
      - is dependent on searchTerm
      - lives in AutoComplete
    - result
      - needs to be seen by pokemon display
      - needs to be edited by search bar > search button
        - when you click the button, need to be able to set result to be searchTerm
      - lives in PokeSuggest
Pokemon <- API
Pokemon -> options, result
searchTerm dictates
fetch -> when the searchTerm changes > autocomplete = options
Autocomple prop includes searchTerm
useEffect(
    () => ...
, [searchTerm])
fetch -> click the button = result  -->
