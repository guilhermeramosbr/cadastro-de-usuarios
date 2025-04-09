import { Title, Container, ContainerInputs, Input, InputLabel, Form } from "./styles"
import { useNavigate } from "react-router-dom"

import Button from "../../components/Button"
import TopBackground  from "../../components/TopBackgroud"


import { useRef } from "react"
import api from "../../services/api"






function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })

  }

  return (
    <Container>
     <TopBackground/>
      <Form>
        <Title>Cadastro de Usuario</Title>
        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type='text' placeholder='Nome do usuario' ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type='number' placeholder='Idade do usuario' ref={inputAge} />
          </div>
        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>
            Email<span> *</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail do usuario' ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>
      <Button type="button" onClick={() => navigate('/lista-de-usuarios')} > Ver Lista de Usuário</Button>

    </Container>
  )
}

export default Home
