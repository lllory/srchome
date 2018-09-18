import React,{Component} from 'react'
import {NavLink } from 'react-router-dom'
class Classifymovie extends Component{
    constructor(props){
        super(props)
        this.state={
            classify:['经典','冷门佳片','豆瓣高分','动作','喜剧','爱情','悬疑','恐怖','科幻','治愈','文艺','成长','动画','华语','欧美','韩国','日本']
        }
    }
    render(){
        let {classify} = this.state
        return <div>
             <header><h2>分类浏览</h2></header>
             <div className='section-content'>
            <ul>
                {
                    classify.map((item,index)=>{
                        return <li key={index}><NavLink to='/detail'>{item}<span></span></NavLink></li>
                    })
                }
            </ul>
            </div>
        </div>
    }
}
export default Classifymovie