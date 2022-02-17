import useSWR from 'swr'
import {useState} from 'react'

export default function Movies3(){
    const [url, setUrl] = useState('')
    const {data, error} = useSWR(url, theFetcher)

    const onClickHandler = (e) => {
        e.preventDefault()
        if (url === '') setUrl('https://www.omdbapi.com/?apikey=b2c265dc&s=spider')
        else setUrl('')
    }

    return (
        <div style={{textAlign:'center'}}>
            <TheLink url={url} handler={onClickHandler}/>
            <TheMovies data={ error
                                ? {error: 'Erro na pesquisa'}
                                : data ? data: {Search:''} }
                                show={url !== ''}/>
            <br/><br/><a href="/">Página Inicial</a><br/>
        </div>
    )
}

async function theFetcher(url) {
    if (url === null || url === '') return {Search:''}
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export function TheMovies({data,show}){
    if (!show) return (<div></div>)
    if (data.error) return (<div>Falha na requisição.</div>)
    if (data.Search === '') return (<div>Carregando...</div>)

    return (
        <div>
            { data.Search.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div> ) }
        </div>
    )
}

export function TheLink({url, handler}){
    return(
        <div>
            <a href="/movies3" onClick={handler}>{ url === '' ? 'Mostrar' : 'Ocultar' }</a>
        </div>
    )
}