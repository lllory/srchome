import React,{Component} from 'react'
import '../style/Movie.scss'
import '../style/Vedio.scss'
import {NavLink} from 'react-router-dom'
import Footer from '../smallcom/Footer'
class Vedio extends Component{
    render(){
        return <div>
            <div className='page'>
                <section className='promo_top_banner'>
                    <div className='bg_banner'>
                        <img src='https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg' />
                    </div>
                    <div className='banner_wrapper'>
                        <div className='banner_inner'>
                            <div className='promo_title'>
                            <NavLink to='/#'>打开APP 回复广播</NavLink></div>
                            <div className='button_wrapper'>
                            <NavLink to='/#' className='down'>极速下载</NavLink>
                            <NavLink to='/#' className='open'>打开</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    }
}
export default Vedio