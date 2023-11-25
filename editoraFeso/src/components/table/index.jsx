import Table from 'react-bootstrap/Table'
import ModalVisualizar from '../modalVisualizar'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Tables() {
   const [articles, setArticles] = useState([])

   useEffect(() => {
      const fetchArticles = async () => {
         try {
            const response = await axios.get('http://localhost:3000/article')
            const data = await response.data
            setArticles(data)
         } catch (error) {
            console.error('Erro ao buscar artigos:', error)
         }
      }

      fetchArticles()
   }, [articles])
   return (
      <Table striped bordered hover variant="dark">
         <thead>
            <tr>
               <th>Autor</th>
               <th>Nome do artigo</th>
               <th></th>
            </tr>
         </thead>
         <tbody>
            {articles.map(article => (
               <tr key={article.id}>
                  <td>{article.author}</td>
                  <td>{article.title}</td>
                  <td>
                     <ModalVisualizar articleId={article.id} />
                  </td>
               </tr>
            ))}
         </tbody>
      </Table>
   )
}
