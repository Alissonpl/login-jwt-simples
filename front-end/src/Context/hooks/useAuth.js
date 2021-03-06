import { useState } from "react";

import api from "../../services/api";
import history from "../../history";

export default function useAuth() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("login/", { login, senha });

      localStorage.setItem("x-acess-token", response.data.token);
      if (localStorage.getItem("x-acess-token")) {
        localStorage.setItem("auth", true);
      }

      history.push("/dashboard");
    } catch (err) {
      alert("Falha no login, tente novamente.");
    }
  }

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await api.post(
        "createe/",
        { login, senha },
        {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("x-acess-token"),
          },
        }
      );

      alert(response.data.status);
      setLogin("");
      setSenha("");
    } catch (err) {
      alert("Falha no cadastro, tente novamente.");
    }
  }

  async function handleLogout(e) {
    e.preventDefault();

    const response = await api.post("logout/");
    alert("Saindo");
    localStorage.removeItem("auth");
    localStorage.setItem("token", response.data.token);
    api.defaults.headers.token = undefined;
    history.push("/login");
  }

  return {
    handleLogout,
    login,
    setLogin,
    senha,
    setSenha,
    handleLogin,
    handleRegister,
  };
}
