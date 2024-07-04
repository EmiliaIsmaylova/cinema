import { mainApi } from "./api.js";



export async function getPopularMovies() {
  return await fetch(mainApi+'&query=hard')
  .then(resp => resp.json())
  .then(data =>{
    console.log(data.results);
    return data.results
  })
}


export async function getComedyMovies(){
  return await fetch (mainApi+'&query=war')
  .then(resp => resp.json())
  .then(data =>{
    console.log(data.results)
    return data.results
  })
}

export async function getActionMovies(){
  return await fetch (mainApi+'&query=action')
  .then(resp => resp.json())
  .then(data =>{
    console.log(data.results)
    return data.results
  })
}


export async function getsliderContainer(){
  return await fetch (mainApi+'&query=fantastic')
  .then(resp => resp.json())
  .then(data =>{
    console.log(data.results)
    return data.results
  })
}

