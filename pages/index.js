export default function Home(){
    return (
        <div style={{textAlign:'center'}}>
            {/* receita 01 */ }
            <h2>Viva Santana!</h2>
            <a href="/carnaval">Página Carnaval</a><br/>
            <small>Receita 01</small><br/><br/>
            <a href="/novaPagina">Nova Página - Receita 02</a><br/>
            <small>Receita 02</small>
        </div>
    )
}

export function Carnaval(){
    return (
        <div style={{textAlign:'center'}}>
            {/* receita 01 */}
            <h2>2021 sem carnaval!</h2>
            <h2>2022 igual a 2021!</h2>
            <a href="/">Página Inicial</a><br/>
            <small>Receita 01</small>
        </div>
    )
}
