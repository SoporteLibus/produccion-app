const SearchBar = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()
    const handleSearchChange = (e) => {
        
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(
            post => post.numero_de_operacion.includes(e.target.value) 
                    || 
                    post.numero_de_inyectora.includes(e.target.value)
                    ||
                    post.codigo_de_producto.includes(e.target.value)
                    ||
                    post.numero_de_molde.includes(e.target.value)
                    ||
                    post.tiempo_de_ciclo.includes(e.target.value)
                    ||
                    post.materia_prima.includes(e.target.value))

        setSearchResults(resultsArray) 
    }

    return (
        <header>
            <br/>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                <button className="search__button">
                    buscar
                </button>
            </form>
            <br/>
        </header>
    )
}
export default SearchBar