#API Overview
The MoviesDatabase API provides access to a wide range of movie and TV show data, including titles, genres, ratings, cast, seasons, and more. It supports advanced filtering by year and genre, and allows for efficient pagination. The API is ideal for building movie discovery platforms, entertainment dashboards, or media-rich web apps.

##API Version
v1.0.0
(This is the current version as of the latest documentation available on RapidAPI.)

##Available Endpoints
| Endpoint                               | Description                                                                      |
| -------------------------------------- | -------------------------------------------------------------------------------- |
| `GET /titles`                          | Fetches a list of movies and TV shows with support for filtering and pagination. |
| `GET /titles/{id}`                     | Retrieves detailed information about a specific title by its ID.                 |
| `GET /titles/x/upcoming`               | Lists upcoming movie releases.                                                   |
| `GET /titles/{id}/ratings`             | Fetches the rating information for a specific movie or show.                     |
| `GET /titles/series/{seriesId}`        | Retrieves all seasons for a particular series.                                   |
| `GET /titles/seasons/{seriesId}`       | Lists all seasons associated with a series ID.                                   |
| `GET /titles/episode/{id}`             | Fetches details of a specific episode.                                           |
| `GET /titles/random`                   | Returns a random movie or show.                                                  |
| `GET /titles/search/title/{title}`     | Searches for a movie or show by its title.                                       |
| `GET /titles/search/keyword/{keyword}` | Searches for content using keywords.                                             |


##Request and Response Format
POST /api/fetch-movies

json
Copy
Edit
{
  "year": 2023,
  "page": 1,
  "genre": "Action"
}
{
  "movies": [
    {
      "id": "tt1234567",
      "titleText": {
        "text": "The Example Movie"
      },
      "releaseYear": {
        "year": 2023
      },
      "primaryImage": {
        "url": "https://image.url/path.jpg"
      }
    },
    ...
  ]
}
