import React,{Component} from 'react'
import {NavLink } from 'react-router-dom'
class Classifybook extends Component{
    constructor(props){
        super(props)
        this.state={
            classify:['小说','爱情','历史','外国文学','青春','励志','随笔','传记','推理','旅行','奇幻','经管']
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
export default Classifybook