/*
Pokemon cards that displays 3 characteristics of a chosen pokemon
Characteristics :
 - Name -> https://pokeapi.co/api/v2/pokemon/name

 - Type
 - Abilities
    - Name
    - Short effect description

CREATE A FUNCTION GET_POKEMON_NAME()
    FETCH NAME OF SEARCHED POCKEMON
    RETURN NAME OF POKEMON
    DISPLAY NAME OF POKEMON
CREATE A FUNCTION GET_POKEMON_TYPE()
    FETCH TYPE OF SEARCHED POCKEMON
    RETURN TYPE OF POKEMON
    DISPLAY TYPE OF POKEMON
CREATE A FUNCTION GET_POKEMON_ABILITY_NAME()
    FETCH ABILITY_NAME OF SEARCHED POCKEMON
    RETURN ABILITY_NAME OF POKEMON
    DISPLAY ABILITY_NAME OF POKEMON
    CREATE A FUNCTION GET_POKEMON_ABILITY_EFFECT()
    FETCH GET_POKEMON_ABILITY_EFFECT OF SEARCHED POCKEMON
    RETURN GET_POKEMON_ABILITY_EFFECT OF POKEMON
    DISPLAY GET_POKEMON_ABILITY_EFFECT OF POKEMON
*/


async function getPokemonName() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    console.log(data);

}
getPokemonName();


