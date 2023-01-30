import axios from 'axios';
import React, {useState, useEffect} from 'react';

const AllBlogs = () => {

    const [noticias, setNoticias] = useState([]);
    const baseURL ='http://localhost:8080';


    const mostrarNoticias = async () => {
        await axios.get(`${baseURL}/api/blogs/`)
        .then ((res) => {
            setNoticias(res.data.data)
        })
        .catch ((err) => {
            console.log(err)
        })
    }
    
    useEffect(() => {
        mostrarNoticias();
    }, [])

    return (
        <div className="container">
            <h2>Todas las Noticias</h2>
            <div className="row">
                {noticias.map((noticia) => {
                    return(
                        <div key={noticia._id} className="col">
                            <div className="container-noticia" style={{width: "200px"}}>
                                <h4>{noticia.title}</h4>
                                <p>{noticia.body}</p>
                                <p>{noticia.createdAt}</p>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default AllBlogs