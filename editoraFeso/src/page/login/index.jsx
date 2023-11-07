import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container">
      <h1 className="text-light bg-dark rounded-4 fs-2 p-3">Editora Unifeso</h1>
      <Form className="container bg-secondary rounded-5 p-4">
        <Form.Group className="mb-3 " controlId="formBasicLogin">
          <Form.Label className="text-light fs-2 d-flex align-items-start">Usuário</Form.Label>
          <Form.Control type="email" placeholder="Digite seu usuário" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-light fs-2 d-flex align-items-start">Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" />
        </Form.Group>

        <Button variant="primary" type="submit" className="px-4 fs-4">
          Entrar
        </Button>

        <p className="mt-2 text-light fs-5">
          Não tem cadastro?{" "}
          <Link className="text-primary " to="/cadastro">
            Clique aqui!
          </Link>
        </p>
      </Form>
    </div>
  );
}
