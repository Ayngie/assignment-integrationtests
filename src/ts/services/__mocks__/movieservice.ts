import { IMovie } from "../../models/Movie";

/* I denna fil har vi vårt låtsas axios-anrop */

export const mockData: IMovie[] = [
  {
    Title: "Gone with the Wind",
    imdbID: "tt0031381",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Year: "1939",
  },
  {
    Title: "Guardians of the Galaxy",
    imdbID: "tt2015381",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTkwZjU3MTctMGExMi00YjU5LTgwMDMtOWNkZDRlZjQ4NmZhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    Year: "2014",
  },
]; //global variabel, kan användas i alla test denna testfil.

// export const getData = async () => {
//   //en funktion som vi exporterar i denna modul.
//   return new Promise((resolve) => {
//     resolve(mockData);
//   });
// };
