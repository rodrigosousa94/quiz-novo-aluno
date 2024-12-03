import { Container, Button } from './appStyles';
import { LiaSchoolSolid } from "react-icons/lia";
import InputRadio from './Input';
import { useState } from 'react';

import { db, addDoc, collection } from "./assets/firebase/firebase.js"

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
 const [success, setSuccess] = useState(false)
 const [inputCount, setInputCount] = useState(1)
 const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
 const [isNameEntered, setIsNameEntered] = useState(false)

 function handleChange( {target} ){
  setRespostas({...respostas, [target.id]: target.value})

 }

 function handleNext(){
  if(isNameEntered){
    if(currentQuestionIndex < perguntas.length - 1){
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }else{
    if(nome.trim() !== ""){
      setIsNameEntered(true)
      setCurrentQuestionIndex(0)
    }else{
      alert("Por favor, insira o nome do aluno!")
    }
  }
 }

 async function handleClick(event){
  
event.preventDefault()

  const data = {
    nome,
    p1: respostas.p1,
    p2: respostas.p2,
    p3: respostas.p3,
    p4: respostas.p4,
    p5: respostas.p5,
    p6: respostas.p6,
    timestamp: new Date().toISOString()
  }

  try {
    await addDoc(collection(db, "respostas"), data)
    console.log("dados enviados com sucesso")
    setSuccess(true)
  } catch(error) {
    console.log("Erro ao enviar" + error)
    alert("Algo deu errado :(")
  }


 }

  return (
   <Container>
     <h1>Explicadora Tia Thais <LiaSchoolSolid/></h1>
   
       {success ? (<h2 style={{ textAlign: 'center' }}>Dados enviados com sucesso</h2>) : (
           <form onSubmit={handleClick}>

           {!isNameEntered && (
             <label style={{color: '#2e2e2e', fontSize: 18, fontWeight: 'bold'}}>
               Nome do aluno:
               <input style={{ width: '100%', height: '20px', padding: '4px', backgroundColor: '#fff7e6', borderRadius: '5px' }} type='text' required onChange={(event) => setNome(event.target.value)} />
             </label>
           )}
  
           {isNameEntered && perguntas[currentQuestionIndex] && (
             <InputRadio key={perguntas[currentQuestionIndex].id} onChange={handleChange} value={respostas[perguntas[currentQuestionIndex].id]} {...perguntas[currentQuestionIndex]} />
           )}
  
           {currentQuestionIndex < perguntas.length - 1 ? (
             <Button type='button' onClick={handleNext}>Próximo</Button>
           ) : (
             <Button type='submit'>Enviar</Button>
           )}
           
  
  
  
         </form>
       )}
        
   
  
   </Container>
  )
}

export default App
