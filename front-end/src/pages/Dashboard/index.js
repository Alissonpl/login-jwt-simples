import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';



export default function Dashboard(){
    
    const history = useHistory();
   const [logout, setLougout] = useState([]);
    const [usuario, setUsuario] = useState([]);
const [token, setToken] = useState(localStorage.getItem('x-acess-token'));


async function handleLogout (e){
    e.preventDefault();

    api.post('logout/').then((response) =>{
        setToken(localStorage.removeItem('x-acess-token'));
        console.log(token);
    })
        api.defaults.headers.token = undefined;
        history.push('/login');

}

useEffect(()=>{
    api.get('usuario/', {headers: {token: token}}
    ).then((response) =>{
        setUsuario(response.data);
    })
}, [usuario]);

console.log(token);

    return (
        <div className="logon-container">
            <section className="form">

                <p1>Dashboard</p1>



                <table striped bordered hover>
<thead>
  <tr>
    <th>ID</th>
    <th>login</th>
    <th>senha</th>
    
  </tr>
</thead>
                {usuario.map(pro => (
<tbody>

  <tr>
<td>{pro.id}</td>
<td>{pro.login}</td>
<td>{pro.senha}</td>

  </tr>
 
   
  


</tbody>
))}
</table>
<form onSubmit={handleLogout}>
<button  className="button" type="submit">sair</button>
</form>
            </section>
        </div>

    );

}