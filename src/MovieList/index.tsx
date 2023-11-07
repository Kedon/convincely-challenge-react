import { ChangeEvent, useEffect,useState } from "react";
import { getMovies, MovieData } from '../api';
import MovieCard from "../MovieCard";
import './index.scss';

const MovieList = () => {

  const [movies, setMovies] = useState<MovieData[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [sort, setSort] = useState<string>('');

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter(value);
  };

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSort(value);
  }

  useEffect(() => {
    getMovies().then((movies: MovieData[]) => {
      setMovies(movies);
    });
  }, []);

  const filteredMovies = movies.filter((movie: MovieData) => {
    return !filter || movie.name.toLowerCase().includes(filter.toLowerCase());
  });

  const sortedMovies = sort
    ? filteredMovies.slice().sort((a: MovieData, b: MovieData) => {
        return b.boxOfficeRevenueInMillions - a.boxOfficeRevenueInMillions;
      })
    : filteredMovies;


  return (
    <div className="movieList">
      <header className="movieList__header">
        <div className="filterAarea">
          <div className="movieList__header__metrics">
            <h1>Lord of the Rings Movies</h1>
            <div>Avg. movie runtime: xxx min</div>
            <div>Avg. movie budget: $xx M</div>
          </div>
          <div className="movieList__header__metrics">
              <input className="movieList__header__filter" onChange={onInput} placeholder="Filter movies by name" />
              <select 
                onChange={onSelect}
                className="movieList__header__sort" 
                placeholder="Filter movies by name">
                  <option value="">None</option>
                  <option value="boxOfficeRevenueInMillions">By Revenue</option>
              </select>
            </div>
        </div>
      </header>
      <main className="movieList__items">
        {sortedMovies.map((movie: MovieData, index: number) => {
          return (
            <MovieCard key={`item_${index}`} data={movie} />
          )
        })}
      </main>
    </div>
  );
}

export default MovieList