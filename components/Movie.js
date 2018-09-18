import React,{Component} from 'react'
import '../style/Movie.scss'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import Interestsmovie from '../smallcom/Interestsmovie'
import Classifymovie from '../smallcom/Classifymovie'
import Footer from '../smallcom/Footer';
class Movie extends Component{
constructor(props){
super(props)
this.state={
    list_0:[],
    list_1:[],
    list_2:[],
    titleName:['影院热映','免费在线观看','新片速递'],
    group:["movie_showing","movie_free_stream","movie_latest"],
    list1:[1,2,3,4,5],
    imgs:['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==']
}
}
componentDidMount(){
this.getData1()
this.getData2()
this.getData3()
}
getData1(){
axios.get('/md/rexxar/api/v2/subject_collection/movie_showing/items',{params:{
    count:8
}}).then(res=>{
    this.setState({
        list_0:res.data.subject_collection_items
    })
})
}
getData2(){
    axios.get('/md/rexxar/api/v2/subject_collection/movie_free_stream/items',{
        params:{
            count:8
        }
    }).then(res=>{
        this.setState({
            list_1:res.data.subject_collection_items
        })
    })
}
getData3(){
    axios.get('/md/rexxar/api/v2/subject_collection/movie_latest/items',{
        params:{
            count:8
        }
    }).then(res=>{
        this.setState({
            list_2:res.data.subject_collection_items
        })
    })
}
getImages(_url){
    if(_url !== undefined){
        let _u = _url.substring(7);
        return "https://images.weserv.nl?url="+_u
    }
}
render(){
let {list_0,list1,imgs,list_2,list_1,group,titleName} = this.state;
// console.log(list)
return <div>
   
    <div className='page' > 
    
        <div className='card1'>
           {group.map((num,idd)=>{
               
               return <section key={idd} id={num}>
                <header>
                    <h2>{titleName[idd]}</h2>
                    <NavLink to='/movie/now-playing' className='more'>更多</NavLink>
                </header>
                
                <div className='section_content'>
                    <ul className='row items'>
                    {eval(`list_${idd}`).map((item,index)=>{
                        // console.log(eval(`list_${idd}`),item.title)
                        return <li className='item item_movie' key={index}>
                            <NavLink to='/movie/detail'>
                            <div className="item-poster" >
                                <img src={this.getImages(item.cover.url)} />
                            </div>
                            <span className='item_title'>{item.title}</span>
                                <div className="item-rating">
                                    <div className="rank">
                                <span className="rating-stars" data-rating="4.2">
                                {list1.map((val,ind)=>{
                                        return <span className="rating-star " key={ind}>
                                        {item.rating===null? "":( Math.round(item.rating.value/2)>=val?<img src={this.state.imgs[1]}/>:<img src={this.state.imgs[0]}/>)}
                                        </span>
                                })}
                                    </span> 
                                <span>{item.rating===null?"无":item.rating.value}</span>
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                    })}
                    </ul>
                </div>
            </section>
             })}

            
            <section id='interests'>
                    <Interestsmovie />
            </section>
            <section id='types'>
                    <Classifymovie />
            </section>
        </div>
        <Footer />

    </div>
    
</div>
}
}
export default Movie