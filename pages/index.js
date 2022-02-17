export default function Home(){
    return (
        <div style={{textAlign:'center'}}>
            {/* receita 01 */ }
            <h2>Viva Santana!</h2>
            <a href="/carnaval">Página Carnaval</a><br/>
            <small>Receita 01</small><br/><br/>

            {/* receita 02 */ }
            <a href="/novaPagina">Nova Página - Receita 02</a><br/>
            <small>Receita 02</small><br/><br/>

            {/* receita 03 */ }
            <a href="/movies">Movies Bagdad</a><br/>
            <small>Receita 03</small><br/><br/>

            {/* receita 04 */ }
            <a href="/movies2">Movies 2 Spider - useSWR</a><br/>
            <small>Receita 04</small><br/><br/>

            {/* receita 05 */ }
            <a href="/movies3">Movies 3 Spider - useSWR e useState</a><br/>
            <small>Receita 05</small>
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
