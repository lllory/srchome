import React,{Component} from 'react'
import {withRouter,Route,Switch,Redirect} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Movie from './components/Movie'
import Book from './components/Book'
import Vedio from './components/Vedio'
class Root extends Component{
    render(){
        // console.log(this.props)
        return <div>
            <Header />
            {/* <Home /> */}
            <Switch>
                 <Route path='/home' component={Home}/> 
                 <Route path='/movie' component={Movie} />
                 <Route path='/book' component={Book} />
                 <Route path='/vedio' component={Vedio} />
                  <Redirect from='/' to='/home' component={Home} exact/>
            </Switch>
           
        </div>
    }
}
export default withRouter(Root)