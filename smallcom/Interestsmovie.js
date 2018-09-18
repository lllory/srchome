import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

class Interestsmovie extends Component{
    render(){
        return <div>
            <header><h2>发现好电影</h2></header>
            <div className='section_content'>
                <ul>
                    <li className='first'><NavLink to='/doulist'>同时入选IMDB250和豆瓣电影250的电影</NavLink></li>
                    <li className='three'><NavLink to='/doulist'>带你进入不正常的世界</NavLink></li>
                    <li className='second'><NavLink to='/doulist'>用电【影】来祭奠逝去的岁月</NavLink></li>
                    <li className='first'><NavLink to='/doulist'>女孩们的故事【电影】</NavLink></li>
                    <li className='line'></li>
                    <li className='second'><NavLink to='/doulist'>
                    使用 App 【找电影】功能
                </NavLink></li>
                    <li className='four'><NavLink to='/doulist'>科幻是未来的钥匙——科幻启示录【科幻题材】</NavLink></li>
                    <li className='four'><NavLink to='/doulist'>美国生活面面观</NavLink></li>
                    <li className='second'><NavLink to='/doulist'>2015终极期待</NavLink></li>
                    <li className='three'><NavLink to='/doulist'>经典韩国电影——收集100部</NavLink></li>
                </ul>
            </div>
        </div>
    }
}
export default Interestsmovie