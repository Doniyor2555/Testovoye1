
import { useState } from 'react';
import heart from '../../img/heart.svg'
import heartActive from '../../img/heartActive.svg'

import './heroesListItem.scss';

const HeroesListItem = ({item}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite((current) => !current);
  }

  return (
    <div className='heroesList'>
      <div className='heroesList__wrapper'>

        <div className='heroesList__image'>

          <img src={item.avatar} alt="img" />
          
        </div>
        <div className='heroesList__title'>{item.first_name} {item.last_name}</div>
        <div className='heroesList__favorite' onClick={toggleFavorite}>
          <img src={isFavorite ? heartActive : heart} alt="Heart" />
        </div>
      </div>

    </div>
  )
}

export default HeroesListItem;