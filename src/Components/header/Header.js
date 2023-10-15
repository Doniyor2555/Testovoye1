import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <button className='header__signOutButton'>Выход</button>
      <div className='header__wrapper'>
        <div className='header__title'>
          Наша команда
        </div>
        <div className='header__descr'>
          <p>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>

        </div>
      </div>
    </header>
  )
};

export default Header;