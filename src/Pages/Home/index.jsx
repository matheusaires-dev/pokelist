import Header from "../../components/Header";
import InputText from "../../components/InputText";
import HomeStyle from './home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import PokeList from "../../components/PokemonList";
import Container from "../../components/Container";
import { useEffect, useState } from "react";


const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        console.log(searchTerm);
    }, [signin])

    return (
        <div className={HomeStyle.home}>
            <Header />
            <InputText
                id="search"
                name="search"
                placeholder="search"
                icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
            />
            <Container>
                <PokeList
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
            </Container>
        </div>
    );
}

export default Home;