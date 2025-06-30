import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== "POST") {
    response.setHeader("Allow", ["POST"]);
    return response.status(405).end(`Method ${request.method} Not Allowed`);
  }

  try {
    const { year, page, genre } = request.body;
    const date = new Date();

    const apiUrl = `https://moviesdatabase.p.rapidapi.com/titles?year=${
      year || date.getFullYear()
    }&sort=year.decr&limit=12&page=${page}${genre ? `&genre=${genre}` : ""}`;

    const resp = await fetch(apiUrl, {
      headers: {
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com", // ✅ correct casing
        "X-RapidAPI-Key": process.env.MOVIE_API_KEY!,        // ✅ from .env.local
      },
    });

    if (!resp.ok) {
      const errorText = await resp.text();
      console.error("RapidAPI response error:", resp.status, errorText);
      return response.status(500).json({ message: "Failed to fetch movies" });
    }

    const moviesResponse = await resp.json();
    const movies: MoviesProps[] = moviesResponse.results;

    return response.status(200).json({ movies });

  } catch (error) {
    console.error("Server error:", error);
    return response.status(500).json({ message: "Internal server error" });
  }
}
