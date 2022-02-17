function Movies({data}){
    return (
        <div style={{textAlign:'center'}}>
            <div>
                { data.Search.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>) }
            </div><br/>
            <a href="/">Página Inicial</a><br/>
        </div>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`https://www.omdbapi.com/?apikey=b2c265dc&s=bagdad`)
    const data = await res.json()
    return { props: { data } }
}

export default Movies