import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { registerArticle } from '../../api/api'

export default function ModalAdicionar() {
   const [show, setShow] = useState(false)
   const [articleData, setArticleData] = useState({
      title: '',
      article: '',
      author: ''
   })
   const [errorMessage, setErrorMessage] = useState(null)
   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)

   const handleInputChange = e => {
      const { name, value } = e.target
      setArticleData(prevData => ({
         ...prevData,
         [name]: value
      }))
   }

   const handleArticle = async e => {
      e.preventDefault()

      // Obtendo o nome do autor do localStorage ao adicionar um novo artigo
      const storedUserData = localStorage.getItem('userData')
      const userData = JSON.parse(storedUserData)

      try {
         // Adicionando o nome do autor aos dados do artigo antes de salvar
         const articleWithAuthor = {
            ...articleData,
            author: userData.name
         }

         const article = await registerArticle(articleWithAuthor)
         console.log('Article registered:', article)
         resetArticleData()
      } catch (error) {
         console.error('Error during article:', error)
         setErrorMessage('Erro ao fazer o cadastro')
      }
   }

   const resetArticleData = () => {
      setArticleData({
         title: '',
         article: '',
         author: ''
      })
   }

   return (
      <>
         <Button variant="none" className="text-light" onClick={handleShow}>
            Adicionar
         </Button>

         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Adicionar artigo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form onSubmit={handleArticle}>
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlInput1"
                  >
                     <Form.Label>Titulo do artigo</Form.Label>
                     <Form.Control
                        type="text"
                        autoFocus
                        value={articleData.title}
                        onChange={handleInputChange}
                        name="title"
                     />
                  </Form.Group>
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlTextarea1"
                  >
                     <Form.Label>Artigo</Form.Label>
                     <Form.Control
                        as="textarea"
                        rows={3}
                        value={articleData.article}
                        onChange={handleInputChange}
                        name="article"
                     />
                  </Form.Group>
                  {errorMessage && (
                     <p style={{ color: 'red' }}>{errorMessage}</p>
                  )}
                  <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                        Voltar
                     </Button>
                     <Button
                        variant="primary"
                        onClick={handleClose}
                        type="submit"
                     >
                        Salvar
                     </Button>
                  </Modal.Footer>
               </Form>
            </Modal.Body>
         </Modal>
      </>
   )
}
