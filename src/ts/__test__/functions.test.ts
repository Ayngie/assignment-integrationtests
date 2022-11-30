/**
 * @jest-environment jsdom
 */

import { movieSort } from "../functions";
import { mockData } from "../services/__mocks__/movieservice";

describe(movieSort, () => {
  test("should sort movies in alphabetical order (descending)", () => {
    //test av if-sats
    // Arrange
    // Behövs inte, pga finns klart o importeras (mockData).

    // Act
    movieSort(mockData, true);

    // Assert
    expect(mockData[0].Title).toBe("Gone with the Wind");
  });

  test("should sort movies in alphabetical order (ascending)", () => {
    //test av else-sats
    // Arrange
    // Behövs inte, pga finns klart o importeras (mockData).

    // Act
    movieSort(mockData, false);

    // Assert
    expect(mockData[0].Title).toBe("Guardians of the Galaxy");
  });
});
