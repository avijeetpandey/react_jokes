export const getJoke = async (url) => {
  const reponse = await fetch("https://api.chucknorris.io/jokes/random");
  return reponse.json();
};
