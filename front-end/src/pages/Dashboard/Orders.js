import React, { useState, useEffect } from "react";



import api from "../../services/api";




import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




export default function Orders() {
    const [usuario, setUsuario] = useState([]);
  
  
    
  
    useEffect(() => {
      api.get('usuario/',  {
        
          headers: {
            
            token: localStorage.getItem("x-acess-token")

          }, 
          
        },
        )
        .then((response) => {
          setUsuario(response.data);
        });
    }, []);




  return (
    <React.Fragment>
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Login</TableCell>
            <TableCell>Senha</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {usuario.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.login}</TableCell>
              <TableCell>{row.senha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}