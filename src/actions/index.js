export const getHeroes = (heroes) => {
  return {
    type: "GET_HEROES",
    payload: heroes
  }
}