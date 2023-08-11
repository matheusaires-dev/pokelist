import pokedex from '../../Images/pokedex.svg';
import pokedexLogo from '../../Images/pokedex_logo.svg';

import './header.module.scss';

const Header = () => {
    return (
        <header>
            <img src={pokedexLogo} alt="" />
            <img src={pokedex} alt="" />
        </header>
    );
}

export default Header;