import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import { Context } from "../../Context/AuthContext";

export default function Dashboard() {
  const [usuario, setUsuario] = useState([]);
  //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dhciI6W3siaWQiOjEwfSx7ImlkIjoyMH1dLCJpYXQiOjE1OTYxNTg0NTEsImV4cCI6MTU5OTE1ODQ1MX0.2HYPwYRsfu01ApZw_a0G2RfVCnvTvoe8BVQX5zVd2iI'

  //localStorage.getItem("x-acess-token");

  const { handleLogout } = useContext(Context);

  useEffect(() => {
    api
      .get("usuario/", {
        headers: {
          "x-acess-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dhciI6W3siaWQiOjEwfSx7ImlkIjoyMH1dLCJpYXQiOjE1OTYzMDY0MzcsImV4cCI6MTU5OTMwNjQzN30.l79Tu9J3tfbL8ZUkNo_i55lS5IrjQaxAilrbZX-LMvw",
        },
      })
      .then((response) => {
        setUsuario(response.data);
      });
  }, []);

  /*
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
*/

  return (
    <div className="logon-container">
      <Link className="back-link" to="/cadastro">
        <FiLogIn size={16} color="#E02041" />
        Cadastrar usuario
      </Link>
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
          {usuario.map((pro) => (
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
          <button className="button" type="submit">
            sair
          </button>
        </form>
      </section>
    </div>
  );
}
