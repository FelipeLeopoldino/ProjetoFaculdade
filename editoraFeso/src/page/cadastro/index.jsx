import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <div className="container ">
      <h1 className="text-light bg-dark rounded-4 fs-2 p-3">Editora Unifeso</h1>

      <Form className="container bg-secondary rounded-5 p-4">
        <Form.Group className="mb-3 " controlId="formBasicNome">
          <Form.Label className="text-light fs-2 d-flex align-items-start">Nome</Form.Label>
          <Form.Control type="email" placeholder="Digite seu Nome" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label className="text-light fs-2 d-flex align-items-start">Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu Email" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicLogin">
          <Form.Label className="text-light fs-2 d-flex align-items-start">Usuário</Form.Label>
          <Form.Control type="email" placeholder="Digite seu usuário" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-light fs-2 d-flex align-items-start">Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" />
        </Form.Group>

        <Link to="/">
          <Button variant="warning" type="submit" className="px-4 fs-4 m-2">
            Voltar
          </Button>
        </Link>

        <Button variant="primary" type="submit" className="px-4 fs-4">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
}
