import {useParams,useHistory,Link} from 'react-router-dom'
import {useEffect,useState} from 'react'
import './posts.css'
import api from '../services/api'

export default function Post(){


    const {id} = useParams()
    const [post,setPost] = useState([])
    const [loading,setLoading] = useState(true)
    const history = useHistory()
    

    useEffect(()=>{
    

        async function loadPost(){
            try{
                const getPostById = await api.get(`/posts/${id}`)
            
                setPost(getPostById.data)
                setLoading(false)
            }catch(error){
                //em caso de erro da requisição , retorna usuário para Home
                history.replace('/')
            }
        }
        loadPost()

        return()=>{
            console.log('componente desmontado')
        }
    

    },[history,id])



    if(loading){
        return(
            //Se post não estiver carregado, informativo
            <div className='post-info'>
                <h1>Carregando post ...</h1>
            </div>
        )
    }

    return(
       <div className='post-info'>
           <header>
               <h2>{post.title}</h2>
           </header>
           <article>
               <p>{post.body}</p>
           </article>
           <br></br>
           <Link to='/'>Voltar</Link>
           <br></br>
       </div>
    )
}