import { useParams } from 'react-router-dom';
import Header from '../components/header/header';

function User() {
    let {user} = useParams();
    return (
    <>
        <Header />
        <h1>Usuario no Sistema: {user}</h1>
    </>
    )
}

export default User