import React,{Component} from 'react'
import '../style/Movie.scss'
import {NavLink} from 'react-router-dom'
import '../style/Movie.scss'
import axios from 'axios'
import Interestsbook from '../smallcom/Interestsbook'
import Classifybook from '../smallcom/Classifybook'
import Footer from '../smallcom/Footer'
class Book extends Component{
    constructor(props){
        super(props)
        this.state={
            list_1:[],
            list_2:[],
            list_3:[],
            list1:[1,2,3,4,5],
            titleName:['最受关注图书｜虚构类','最受关注图书｜非虚构类','豆瓣书店'],
            header:[],
            list:["movie_showing","movie_free_stream","movie_latest"],
            imgs:['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==']
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        axios.get('/md/rexxar/api/v2/subject_collection/book_fiction/items',
        {params:{
            count:8,

        }}).then(res=>{
            this.setState({
                list_1:res.data.subject_collection_items
            })
        })
        axios.get('/md/rexxar/api/v2/subject_collection/book_nonfiction/items',
        {params:{
            count:8,

        }}).then(res=>{
            this.setState({
                list_2:res.data.subject_collection_items
            })
        })
        axios.get('/md/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items',
        {params:{
            count:8,

        }}).then(res=>{
            this.setState({
                list_3:res.data.subject_collection_items,
                header:res.data.header


            })
        })
    }


    getImages( _url ){
        if( _url !== undefined ){
          let _u = _url.substring( 7 );
          return 'https://images.weserv.nl/?url=' + _u;
        }
      }
    render(){
        let {list_1,list_2,list_3,list1,list,titleName,header} = this.state
        // console.log(this.getImages(header.cover.url))
        return <div>
            <div className='page'>
        <div className='card1'>
        {list.map((num,idd)=>{
            // console.log(num)
            return <section id={num} key={idd}>
                <header>
                    <h2>{titleName[idd]}</h2>
                    <NavLink to='/movie/now-playing' className='more'>更多</NavLink>
                </header>
               {num==="movie_latest"?
                        <NavLink to='/detail' className='proBook'>
                                <img src='https://img3.doubanio.com/view/freyr_page_photo/raw/public/3094.jpg'/>
                                <div className='content'>
                                    <div className='title'>
                                        <span className='price'>￥{header.price}</span>
                                        <p className='name'>{header.title}</p>
                                    </div>
                                    <p className='infoDetail'>{header.info}</p>
                                </div>
                            </NavLink>:""}

                <div className='section_content'>
                    <ul className='row items'>
                    {eval(`list_${idd+1}`).map((item,index)=>{
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
                                <span>{item.rating===null?"￥"+item.price:item.rating.value}</span>
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
                    <Interestsbook />
            </section>
            <section id='types'>
                    <Classifybook />
            </section>
        </div>
        <Footer />
    </div>
        </div>
    }
}
export default Book