import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'

export default function ModalVisualizar({ articleId }) {
   const [show, setShow] = useState(false)
   const [article, setArticle] = useState({
      title: '',
      content: ''
   })

   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)

   useEffect(() => {
      const fetchArticle = async () => {
         try {
            const response = await axios.get(
               `http://localhost:3000/article/${articleId}`
            )
            const data = response.data

            if (data) {
               setArticle({
                  title: data.title,
                  content: data.article,
                  author: data.author
               })
              
            }
         } catch (error) {
            console.error('Erro ao buscar artigo:', error)
         }
      }

      if (show && articleId) {
         fetchArticle()
      }
   }, [show, articleId])

   return (
      <>
         <Button variant="primary" onClick={handleShow}>
            Visualizar
         </Button>

         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Visualizar artigo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlInput1"
                  >
                     <Form.Label>Título do artigo</Form.Label>
                     <Form.Control type="text" value={article.title} disabled />
                  </Form.Group>
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlTextarea1"
                  >
                     <Form.Label>Artigo</Form.Label>
                     <Form.Control
                        as="textarea"
                        rows={3}
                        value={article.content}
                        disabled
                     />
                  </Form.Group>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Voltar
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   )
}

ModalVisualizar.propTypes = {
   articleId: PropTypes.any.isRequired
}
