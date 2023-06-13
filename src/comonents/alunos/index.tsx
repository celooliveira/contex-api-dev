import { Nome } from "../nome"

interface AlunoProps{
    alunoNome:string;
    changeNome:(nome:string) =>void;
}

export function Alunos({alunoNome, changeNome}:AlunoProps){
    return(
        <div>
            <h3>Quantidade de Alunos: 23</h3>
            <Nome nome={alunoNome} changeNome={changeNome}/>
        </div>
    )
}