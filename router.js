import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Home'
import Post from './Posts'
import Error from './Error'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path='/posts/:id' component={Post}/>
                <Route path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    )
}