import axios from "axios";

const apiToken = 'SlauvktIL11a0f5QoDXy';

const api = axios.create({
  baseURL: 'https://the-one-api.dev',
  headers: {
    Authorization: `Bearer ${apiToken}`
  },
});

export interface MovieData {
  academyAwardNominations: number,
  academyAwardWins: number,
  boxOfficeRevenueInMillions: number,
  budgetInMillions: number,
  name: string,
  rottenTomatoesScore: number,
  runtimeInMinutes: number,
  _id: string
}

// @ts-ignore
export const getMovies = async (): Promise<MovieData[]> => api.get('/v2/movie', {
  params: {
    limit: 5
  }
}).then((res) => {
  return res.data.docs;
});

export interface QuoteData {
  dialog: string,
  movie: string,
  character: string,
  _id: string
}

// @ts-ignore
export const getQuote = async (id: string): Promise<QuoteData[]> => api.get(`/movie/${id}/quote`, {
  params: {
    limit: 1
  }
}).then((res) => {
  console.log("response", res.data);
});

export interface CharacterData {
  _id: string,
  height: string,
  race: string,
  gender: string,
  birth: string,
  spouse: string,
  death: string,
  realm: string,
  hair: string,
  name: string,
  wikiUrl: string
}

// @ts-ignore
export const getCharacter = async (id: string): Promise<CharacterData[]> => api.get(`/character/${id}`, {
  params: {
    limit: 1
  }
}).then((res) => {
  console.log("response", res.data);
});