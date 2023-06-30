import axios from "axios";

const BASE_URL ="https://api.themoviedb.org/3";

const TMDB_TOKEN =  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWU5NDhkMWY1ZjQwMmUyZjhkMWY0ZWYxOTY4MzJkNyIsInN1YiI6IjY0N2YyNDc2YWVkZTU5MDBhOTdiMWY2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O9qNOcrCqS0FrvyLAD3oX3Ddxx2qvqOON8jrlAuZqho";

const headers ={
    Authorization: "bearer " + TMDB_TOKEN,
};
export const fetchDataFromApi = async(url, params)=>{
  try{
   const {data} = await axios.get(BASE_URL + url,{
    headers,
    params,
   })
   return data;
  }catch(err){
    console.log(err);
    return err;
  }
}