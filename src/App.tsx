import { Alunos } from "./comonents/alunos"
import { useState } from "react"


function App() {
  const [nome, setNome] = useState("Marcelo");
  return (
    <div>
      <h1>Escola Dev</h1>
      <br />
      <hr />
      <Alunos alunoNome={nome} changeNome={(nome:string)=>setNome(nome)}/>
    </div>
  )
}

export default App
