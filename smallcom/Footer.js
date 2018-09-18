import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
 class Footer extends Component{
     render(){
        return <div>
            <div className='download-app'>
                <div className='info'>
                    <img src='https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png'/>
                    <strong>豆瓣</strong>
                </div>
                <div className='download'><NavLink to='/detail'>免费下载Android 客服端</NavLink>
                </div>
            </div>
        </div>
     }
 }
 export default Footer