import React, { useContext} from 'react';
import { Link} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Context } from '../../Context/AuthContext';

export default function Logon(){
   
   const { login, setLogin, senha, setSenha, handleLogin } = useContext(Context);

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
               

                    
                </form>



            </section>
        </div>

    );

}