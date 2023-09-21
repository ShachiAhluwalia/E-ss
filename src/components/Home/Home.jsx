import React from 'react';
import {Footer, Blog, Posibility,WasE,Header} from '../../containers';
import {CTA, Brand} from '..';
import './Home.css';
const Home = () => {
  return (
    <div className='Home'>
        <div className='gradient_bg'>
            <Header />
        </div>
        <Brand />
        <WasE />
        <Posibility/>
        <CTA/>
        <Blog />
        <Footer/>

    </div>
  )
}

export default Home;