import { useState } from 'react'; // Importa o hook useState do React
import { auth } from '../../firebaseConfig'; // Importe a configuração do Firebase
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'; // Importa os métodos de autenticação do Firebase
import './Login.css'; // Importe o CSS para estilização

function Login() {

  // Estado para armazenar o nome de usuário, senha e mensagem de feedback
  //********************************* */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


   // --- Função para Login com Email e Senha ---
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o recarregamento da página

    try {
      // Tenta fazer o login com email e senha no Firebase
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user; // Objeto do usuário logado

      setMessage(`Login bem-sucedido! Bem-vindo, ${user.email}`);
      console.log('Usuário logado (Email/Senha):', user);
      // *** AQUI: Coloque sua lógica de redirecionamento ou gestão de estado de login ***
      // Ex: navigate('/dashboard');
      // Ex: setUserLoggedIn(true);

    } catch (error) {
      // Lida com os erros específicos do Firebase Auth
      let errorMessage = 'Erro ao fazer login. Verifique suas credenciais.';
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'Usuário não encontrado. Verifique o email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Senha incorreta.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Formato de email inválido.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Muitas tentativas de login. Tente novamente mais tarde.';
          break;
        default:
          errorMessage = `Erro desconhecido: ${error.message}`;
      }
      setMessage(errorMessage);
      console.error('Detalhes do erro de login (Email/Senha):', error);
    }
  };


   //*************Função de Login com o Google ******************** */ 
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Usuário autenticado com sucesso:', result.user);
      setMessage('Login com Google bem-sucedido!');
      // Aqui você poderia redirecionar o usuário ou armazenar um token de autenticação
    } catch (error) {
      console.error('Erro ao autenticar com o Google:', error);
      setMessage('Erro ao autenticar com o Google. Tente novamente.');
    }
  };

  // Função para lidar com o envio do formulário de login
  // Esta função é chamada quando o usuário envia o formulário de login

  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='btn-entrar'>Entrar</button>
        <br />
        <button className='btn-google' onClick={loginGoogle}>Entrar com Google</button>
        {message && <p className="message">{message}</p>}
        
      </form>
    </div>
  );
}

export default Login;