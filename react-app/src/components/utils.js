export const FetchCats = () =>
  fetch("http://localhost:3000/cats").then(resp => resp.json());
export const FetchDogs = () =>
  fetch("http://localhost:3000/dogs").then(resp => resp.json());
export const FetchCat = id =>
  fetch(`http://localhost:3000/cats/${id}`).then(resp => resp.json());
export const FetchDog = id =>
  fetch(`http://localhost:3000/dogs/${id}`).then(resp => resp.json());
