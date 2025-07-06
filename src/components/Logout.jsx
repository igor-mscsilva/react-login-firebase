import { auth } from '../../firebaseConfig'; // Importe a configuração do Firebase
import { signOut } from 'firebase/auth';

function Logout({ user}) {
    return (
        <>
            <h2>Olá, {user?.displayName || 'Teste'}</h2> {/* Exibe o nome do usuário ou 'Teste' se não houver nome */}
            <h3>Email:{" "}{user.email}</h3>
            <button onClick={() => signOut(auth)}>Sair</button>
        </>
    );
}

export default Logout;