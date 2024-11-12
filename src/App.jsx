import { Container, Button } from './appStyles';
import { LiaSchoolSolid } from "react-icons/lia";
import InputRadio from './Input';
import { useState } from 'react';

const perguntas = [
  {
    pergunta: 'O aluno sabe ler com fluência?',
    options: [
      'Sim',
      'Não',
    ],
    id: 'p1',
  },
  {
    pergunta: 'O aluno tem dificuldades para escrever corretamente?',
    options: [
      'Sim',
      'Não',
    ],
    id: 'p2',
  },
  {
    pergunta: 'O aluno tem dificuldade em realizar cálculos matemáticos simples?',
    options: [
      'Sim',
      'Não',
    ],
    id: 'p3',
  },
  {
    pergunta: 'O aluno costuma apresentar baixo desempenho em provas e avaliações?',
    options: [
      'Sim',
      'Não',
    ],
    id: 'p4',
  },
  {
    pergunta: 'O aluno tem dificuldades em trabalhar em grupo?',
    options: [
      'Sim',
      'Não',
    ],
    id: 'p5',
  },
  {
    pergunta: 'O aluno apresenta dificuldades de expressão oral (falar em público, comunicar ideias)?',
    options: [
      'Sim',
      'Não',
    ],
    id: 'p6',
  }

];


function App() {

 const [respostas, setRespostas] = useState({
  p1: "",
  p2: "",
  p3: "",
  p4: "",
  p5: "",
  p6: ""
 })

 const [nome, setNome] = useState("")
 const [success, setSuccess] = useState(true)

 function handleChange( {target} ){
  setRespostas({...respostas, [target.id]: target.value})

 }

 function handleClick(){
  setSuccess(false)
 }

  return (
   <Container>
     <h1>Explicadora Tia Thais <LiaSchoolSolid /></h1>
    {success ? (
          <form onSubmit={handleClick}>
          <label style={ {fontWeight: 'bold', color: '#801BEC', padding: 30} }>
            Nome do aluno:
            <input required onChange={(event) => setNome(event.target.value)} style={{ marginBottom: 20, padding: 2, width: '50%' , borderRadius: 5, border: '1px solid rgba(128, 27, 236, 0.22)' }} type="text"/>
          </label>
          {perguntas.map((pergunta) => (
            <InputRadio key={pergunta.id} value={respostas[pergunta.id]} onChange={handleChange} {...pergunta}/>
          ))}
    
          <Button>Enviar</Button>
        </form>
    ) : <h2 style={{ textAlign: 'center' }}>Dados enviados com sucesso</h2>
  
  
  }
   </Container>
  )
}

export default App
