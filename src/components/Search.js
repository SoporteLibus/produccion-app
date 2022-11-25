import '../styles/search.css'
import SearchBar from '../components/SearchBar'
import Post from './Post';
import { useState, useEffect } from 'react';
import getPosts from '../api/axios';

export default function Search() {
    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
    getPosts().then(json => {
        setPosts(json)
        setSearchResults(json)
        setLoading(false)
    })
    }, [])

    const results = searchResults && searchResults.map(post => <Post key={post._id} post={post} />);
    const content = results ? results : <article><p>No Matching Posts</p></article>
    if (loading) return <h1>LOADING...</h1>
    console.log("POST>>>",posts)
    console.log("SEARCH>>>",searchResults)
    return (
        <div className="main-container">
            <div className="div-fecha">
                <SearchBar posts={posts} setSearchResults={setSearchResults} />
            </div>
            <table className="table-cls">
                <thead>
                        <tr>
                            <th>Numero de operacion</th>
                            <th>Codigo del producto</th>
                            <th>Numero de Inyectora</th>
                            <th>Numero de Molde</th>
                            <th>Tiempo de ciclo</th>
                            <th>Materia Prima</th>
                        </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    )
}