import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ModalVisualizar from "../modalVisualizar";

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
            <ModalVisualizar />
          </td>
        </tr>
        <tr>
          <td>Ricardo</td>
          <td>10-05-23</td>
          <td>Projeto IHC</td>
          <td>
            <ModalVisualizar />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
