import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import api from '../services/api'
import './home.css'

export default function Home(){
    const [posts,setPosts] = useState([])
    useEffect(()=>{

    

        try{
            async function loadPosts(){
                const getPosts = await api.get('/posts')
                setPosts(getPosts.data)
            }
                loadPosts()
        }catch(error){
            console.log(error)
        }
        
    },[])

    return(
        <div>
            {posts.map(post=>{
                return(
                    <div className='container'>
                        <div className='container-posts' key={post.id}>
                                <h1>{post.title}</h1>
                                <Link className='link-home' to={`/posts/${post.id}`}>Acessar</Link>
                        </div>
                        <div>


                        </div>
                    </div>
                )
            })}
        </div>
    )
}