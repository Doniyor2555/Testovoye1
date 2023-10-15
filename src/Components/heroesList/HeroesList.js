import { useHttp } from '../../hooks/http.hook';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import heart from '../../img/heart.svg'
import heartActive from '../../img/heartActive.svg'
import { getHeroes } from '../../actions';

import Spinner from '../spinner/Spinner';
import HeroesListItem from '../heroesListItem/heroesListItems'
import './heroesList.scss';


const HeroesList = () => {
  const { heroes } = useSelector(state => state);
  const dispatch = useDispatch();
  const { request } = useHttp();
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite((current) => !current);
  }
  // console.log(heroes);
  useEffect(() => {
    request('https://reqres.in/api/users')
      .then((data) => {

        dispatch(getHeroes(data.data))
        // console.log(heroes)
      }).catch((error) => {
        console.log(error)
      })

  }, []);

  return (

    <div>
      {heroes.map((item) =>(

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

     ))}

    </div>
  )
};

export default HeroesList;