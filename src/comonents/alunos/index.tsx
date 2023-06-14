import { Nome } from "../nome"
import { UserContext } from "../../contexts/user"
import { useContext } from "react"

export function Alunos(){
    const {qtdAlunos, mudaNome} = useContext(UserContext);
    return(
        <div>
            <h3>Quantidade de Alunos: {qtdAlunos}</h3>
            <button onClick={()=>mudaNome("Aluno Teste")}>
                Mudar nome para Aluno teste
            </button>
            <br /><br />
            <Nome/>
        </div>
    )
}