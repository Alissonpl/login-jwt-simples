import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';



export default function Logon(){
    const [login, setLogin] = useState('');
    const history = useHistory();
    const [senha, setSenha] = useState('');

async function handleLogin(e) {
    e.preventDefault();

    try{
        const response = await api.post('login/', {login, senha});

            localStorage.setItem('x-acess-token', response.data.token);

            history.push('/dashboard');
        
    } catch(err){

        alert('Falha no login, tente novamente.');
    }
    
}


    return (
        <div className="logon-container">
            <section className="form">

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                    placeholder="Login"
                    value={login}
                    onChange={e=> setLogin(e.target.value)}
                    />

                    <input 
                    placeholder="senha"
                    value={senha}
                    onChange={e=> setSenha(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
               

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                       Não tenho cadastro 
                    </Link>
                </form>



            </section>
        </div>

    );

}