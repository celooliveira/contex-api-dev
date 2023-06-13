
interface NomeProps{
    nome:string
    changeNome: (nome:string)=>void;
}
export function Nome({nome, changeNome}:NomeProps){
    return(
        <div>
            <strong>Aluno: {nome}</strong>
            <br />
            <button onClick={()=>changeNome("Marcelo Martins de Oliveira")}>
                Trocar nome
            </button>
        </div>
    )
}