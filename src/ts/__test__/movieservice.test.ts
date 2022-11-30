/**
 * @jest-environment jsdom
 */

import { IOmdbResponse } from "../models/IOmdbResponse"; //import av interface.
import { movieservice } from "../services/movieservice"; //import av den fil vi kör mock på.
import { IMovie } from "../models/Movie";
import { mockData } from "../services/__mocks__/movieservice";

/* import av vår modul: */
jest.mock("../services/movieservice.ts"); //detta är all kod vi behöver för att kunna använda vår mock service.ts fil (modul). //import av vår mock-modul: mockfilen service.ts, som liggert i mappen _ _ mocks _ _, som ligger på samma nivå som ursprungs (riktiga) service.ts-filen...

jest.mock("axios", ()=>({
	get: async () => {//här i vår fake axios ska vi skapa det som ska skickas tillbaka - vi vill ha använda en funktion som heter get - och async
		return new Promise((resolve)=>{
			resolve({data: {Search:mockData}}); //Vi vill ha data.Search inne i data (data.data.Search) och då skriver vi så här. Total results kan man jobba med på exakt samma sätt, då lägger vi istället i det häri, istället för Search. 
	})
}));

/*  test:  */
test("should get mockData", async () => {
//Arrange
//Vår data tar inte emot ngra argument, därför blir arrange TOM!
//Det finns inga variable el dyl som den kräver för att kunna fungera. Den tar inte emot någonting.
//På ett sätt kan vi säga att koden i roten här i filen är som vår arrange, för där arrangerar vi ju på ett sätt vår testData.
//
//Act
//Här däremot, så ska vi anropa getData.
let result:IMovie [] = await mockData (); //anropar vår funktion.
//
//Assert
//om allt funkar kan vi nu anta att:
expect(result.length).toBe(mockData.length);
//Om vi vill vara extra säkra på att det stämmer, så kan vi gå in o titta på det första objektet o se så datan överensstämmer m vår testdata:
//expect(result[0].bus).toBe(117);
//lägg till så mga expect ni behöver för att vara trygga med vad ni får för info tillbaka.
});
