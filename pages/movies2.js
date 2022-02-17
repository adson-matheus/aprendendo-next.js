import useSWR from 'swr'

export default function Movies2(){
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=b2c265dc&s=spider`, fetcher)
    if (error) return <div><p>Falha na requisição.</p></div>
    if (!data) return <div><p>Carregando...</p></div>

    return (
        <div style={{textAlign:'center'}}>
            <div>
                { data.Search.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div> ) }
            </div><br/>
            <a href="/">Página Inicial</a><br/>
        </div>
    )
}

async function fetcher(url){
    const res = await fetch(url);
    const json = await res.json();
    return json;
}