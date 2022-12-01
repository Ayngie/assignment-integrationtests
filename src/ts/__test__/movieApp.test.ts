/**
 * @jest-environment jsdom
 */

import { IMovie } from "../models/Movie";
import * as movieAppFunctions from "../movieApp";
import { mockData } from "../services/__mocks__/movieservice";

describe("init", () => {
  test("should upon click/submitevent call function handleSubmit", () => {
    //Arrange
    let spy = jest.spyOn(movieAppFunctions, "handleSubmit").mockReturnValue(
      new Promise<void>((resolve) => {
        // måste skriva mockreturn new Promise för det är en async function. Då får jag ett promise tillbaka som jag vill specificera resolve() = (ingenting).
        resolve();
      })
    ); //lyssnar efter anrop på funktion handleSubmit, som ska anropas vid submit av userInput.
    document.body.innerHTML = `
    <form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
    </form>
    `; //skapar innerHTML - så att vi kan lyssna på submit på formuläret, som triggas av klick på knappen.
    movieAppFunctions.init(); //anropar init för att där finns vår addEventListener.

    //Act
    (document.getElementById("searchForm") as HTMLFormElement)?.submit(); //simulerar klickknapp/submit på vår button som triggar submit på formuläret vi lyssnar på (klicket "vandrar uppåt" till vår addEventListener på formuläret).
    //Assert
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe("displayNoResult", () => {
  test("should display noResult message in HTML", () => {
    //Arrange
    document.body.innerHTML = `
    <div id="container">
    </div>
    `;
    let container = document.getElementById("container") as HTMLDivElement;

    //Act
    movieAppFunctions.displayNoResult(container);

    //Assert
    console.log(container.innerHTML);
    expect(container.innerHTML).toContain("Inga sökresultat att visa");
    expect(document.querySelector("p")?.innerHTML).toBe(
      "Inga sökresultat att visa"
    );
  });
});

describe("createHtml", () => {
  test("should display movie[] in HTML", () => {
    //Arrange
    let movies: IMovie[] = mockData;

    document.body.innerHTML = `
      <div id="container">
      </div>
      `;
    let container = document.getElementById("container") as HTMLDivElement;

    //Act
    movieAppFunctions.createHtml(movies, container);

    //Assert
    console.log(container.innerHTML);
    console.log(movies[0].Title);
    console.log(movies[1].Title);
    console.log(document.querySelectorAll("div"));
    console.log(document.querySelectorAll(".movie"));
    console.log(mockData.length);

    expect(movies[0].Title).toContain("Gone with the Wind");
    expect(movies[1].Title).toContain("Guardians of the Galaxy");
    expect(container.innerHTML).toContain("Guardians of the Galaxy");
    expect(document.querySelectorAll("div").length)?.toBe(3);
    expect(document.querySelectorAll(".movie").length)?.toBe(2); //.movie är klassen som tilldelas varje div i loopen som skapar upp html för filmerna.
    expect(document.querySelectorAll(".movie").length)?.toBe(mockData.length);
  });
});
