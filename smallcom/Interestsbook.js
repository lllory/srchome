import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

class Interestsbook extends Component{
    render(){
        return <div>
            <header><h2>发现好电影</h2></header>
            <div className='section_content'>
                <ul>
                    <li className='first'><NavLink to='/doulist'>小波看书</NavLink></li>
                    <li className='three'><NavLink to='/doulist'>村上春树周边</NavLink></li>
                    <li className='second'><NavLink to='/doulist'>我凭名字认定了你</NavLink></li>
                    <li className='first'><NavLink to='/doulist'>不可饶恕的女人们</NavLink></li>
                    <li className='line'></li>
                    <li className='second'><NavLink to='/doulist'>
                    爱欲书
                </NavLink></li>
                    <li className='four'><NavLink to='/doulist'>他们还写侦探小说</NavLink></li>
                    <li className='four'><NavLink to='/doulist'>人生识字忧患</NavLink></li>
                    <li className='second'><NavLink to='/doulist'>诗歌书店</NavLink></li>
                  
                </ul>
            </div>
        </div>
    }
}
export default Interestsbook