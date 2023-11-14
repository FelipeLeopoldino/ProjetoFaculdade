import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/cadastro");

      console.log(setFormData)
      if (response.status === 200) {
        // Login bem-sucedido, redirecione ou faça outras ações necessárias
        console.log("Login bem-sucedido");
      } else {
        // Exibe uma mensagem de erro para o usuário
        console.error("Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro ao processar a requisição:", error);
    }
  };
  return (
    <div className="container">
      <h1 className="text-light bg-dark rounded-4 fs-2 p-3">Editora Unifeso</h1>
      <form
        className="bg-dark text-light d-flex flex-column p-3 rounded-4 align-center align-items-center justify-center "
        onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="m-2">Usuario</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="m-2">Senha</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <Button variant="primary" type="submit" className="px-4 fs-4">
          Entrar
        </Button>

        <p className="mt-2 text-light fs-5">
          Não tem cadastro?{" "}
          <Link className="text-primary " to="/cadastro">
            Clique aqui!
          </Link>
        </p>
      </form>
    </div>
  );
}
