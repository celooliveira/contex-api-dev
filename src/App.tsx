import { Alunos } from "./comonents/alunos"
import { Footer } from "./comonents/footer";
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
        <Footer/>
      </div>
    </UserProvider>
  )
}

export default App
