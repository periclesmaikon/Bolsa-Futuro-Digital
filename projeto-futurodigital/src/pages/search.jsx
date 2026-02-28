import { useSearchParams } from 'react-router-dom';
import Header from '../components/header/header';

function Search() {
    const [search] = useSearchParams();
    return (
    <>
        <Header />
        <h1>Você pesquisou por: {search}</h1>
    </>
    )
}

export default Search