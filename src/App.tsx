import { Alunos } from "./comonents/alunos"
import { useState } from "react"

import UserProvider from "./contexts/user";


function App() {
  return (
    <UserProvider>
      <div>
        <h1>Escola Dev</h1>
        <br />
        <hr />
        <Alunos/>
      </div>
    </UserProvider>
  )
}

export default App
