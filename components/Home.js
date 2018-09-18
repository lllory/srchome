import React,{Component} from 'react'
import axios from 'axios'
import {NavLink,Route} from 'react-router-dom'
import '../style/Home.scss'

class Home extends Component{
constructor(props){
super(props)
this.state={
list:[],
dateList:[]
}
}
componentDidMount(){
this.getData()
}
getData(){
axios.get("/md/rexxar/api/v2/recommend_feed").then(res=>{
    // console.log(res.data.date)
this.setState({
list:res.data.recommend_feeds,
dateList:res.data
})
// console.log(res.data.recommend_feeds)
})
}
getImages(_url){
    if(_url !== undefined){
        let _u = _url.substring(7);
        return "https://images.weserv.nl?url="+_u
    }
}
render(){
let {list,dateList} = this.state
// console.log(list.length)
// console.log(dateList)

return <div>
<div className='page'>
<div className='card'>
    <ul>
        <li><NavLink to='/movie/noe-playing'>影院热映</NavLink></li>
        <li><NavLink to='/music'>华语新碟榜</NavLink></li>
        <li><NavLink to='/time'>豆瓣时间</NavLink></li>
        <li><NavLink to='/use'>使用豆瓣APP</NavLink></li>
    </ul>
    <section className='recommend-feed'>
        <div className='data'>
            <div className='feed'>
                { 
                list.map((item,index)=>{
                    // console.log(item)
                    return (item.target.more_pic_urls.length<=0?<NavLink to='/detail' key={index} className='feed-item'>
                    <div className='feed-content'>
                        <div className='cover' >
                            <img src={this.getImages(item.target.cover_url)
                            }/>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.target.desc}</p>
                    </div>
                    <div className='author'>by&nbsp;&nbsp;<span>{item.target.author.name}</span></div>
                </NavLink>:
                <NavLink to='/detail' key={index} className='feed-item'>
                <div className='feed-content'>
                    <div className='photos' >
                    <div className="main" style={{position: 'relative',background:` url(${this.getImages(item.target.cover_url)}) center center / cover no-repeat rgb(250, 250, 250)`}}><div></div></div>
                        
                        <div className='aside'>
                            <div className='aside-pic'>
                            <div style={{position: 'relative', background:` url(${item.target.more_pic_urls[0]}) center center / cover no-repeat rgb(250, 250, 250)`}}>
                            <div style={{paddingTop: '100%'}}></div>
                            </div>
                            </div>
                            <div className='aside-pic'>
                                <div style={{position: 'relative', background: `url(${item.target.more_pic_urls[1]}) center center / cover no-repeat rgb(250, 250, 250)`}}>
                                    <div style={{paddingTop: '100%'}}></div>
                                </div>
                                <div className="more-pic">
                                <span className="count">{item.target.photos_count}+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>{item.title}</h3>
                    
                </div>
                <div className='author'>by&nbsp;&nbsp;<span>{item.target.author.name}</span></div>
            </NavLink>)})
                }
            </div>
        </div>

    </section>
</div>
</div>
</div>
}
}
export default Home