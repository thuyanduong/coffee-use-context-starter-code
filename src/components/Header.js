import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
  return (
    <div className="container light">
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"'>
        <Logo />
        <Menu />
      </header>
    </div>
  );
};

export default Header