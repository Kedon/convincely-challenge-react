import './index.scss';
import closeIcon from '../assets/close.svg';
import { MovieData, getQuote, getCharacter, QuoteData, CharacterData} from '../api';

interface Props {
  data: MovieData,
  onClose: () => void
}

const MovieModal = (props: Props) => {
  const { data, onClose } = props;

  return (
    <div className="movieModal">
      <div className='movieModal__backdrop'/>
      <div className='movieModal__content'>
        <button className='movieModal__close'>
          <img src={closeIcon} className='movieModal__close__icon'/>
        </button>
        <h2 className='movieModal__content__title'>Top quote for {data.name}</h2>
        <p className='movieModal__content__quote'>"The quote"</p>
        <p className='movieModal__content__character'>- Character Name</p>
      </div>
    </div>
  );
}

export default MovieModal