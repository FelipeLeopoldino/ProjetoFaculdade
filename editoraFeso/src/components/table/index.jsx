import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default function Tables() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Autor</th>
          <th>Data de pubçicação</th>
          <th>Nome do artigo</th>

          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Felipe Leopoldino</td>
          <td>10-05-23</td>
          <td>Projeto MVC</td>
          <td>
            <Button variant="outline-primary">Visualizar</Button>{" "}
          </td>
        </tr>
        <tr>
          <td>Ricardo</td>
          <td>10-05-23</td>
          <td>Projeto IHC</td>
          <td>
            <Button variant="outline-primary">Visualizar</Button>{" "}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
