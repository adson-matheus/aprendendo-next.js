function Movies({data}){
    return (
        <div>
            <div>
                { data.Search.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>) }
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`http://www.omdbapi.com/?apikey=b2c265dc&s=bagdad`)
    const data = await res.json()
    return { props: { data } }
}

export default Movies