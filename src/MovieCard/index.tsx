import './index.scss';
import filmIcon from '../assets/film.svg';
import awardIcon from '../assets/award.svg';
import type { MovieData } from '../api';
import { useState } from 'react';

interface Props {
  data: MovieData
}

const MovieCard = (props: Props) => {
  const { data } = props;
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="card">
      <div className='card__banner'>
        <img src={filmIcon} className='card__banner__icon' />
      </div>
      <div className="card__description">
      <span className='card__title'>{data.name}</span>
      <div className='card__runtime'>{data.runtimeInMinutes}</div>

      <div className='card__awards'>
        <img src={awardIcon} className='card__awards__icon' />
        <span>{data.academyAwardWins} Wins & {data.academyAwardNominations} Nominations</span>
      </div>

      <div className='card_metrics'>
        <div className="card_metrics__item">
          <span>Budget</span>
          <span>${data.budgetInMillions}</span>
        </div>
        <div className="card_metrics__item">
          <span>Revenue</span>
          <span>${data.boxOfficeRevenueInMillions}</span>
        </div>
      </div>
      </div>

    </div>
  );
}

export default MovieCard