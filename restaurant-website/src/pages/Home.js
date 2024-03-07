import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from "react-router-dom";
import Banner from "../../src/images/Home4.jpeg"
import '../../src/styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
          <div className='home'  style={{ background: `url(${Banner})` }}>
            <div className='header-container'>
            <h1>Food Bazaar</h1>
            <p>Best Food in India</p>
          
            <Link to="/menu">
            <button>
              Order Now
            </button>
            </Link>
            </div>
          </div>
    </Layout>

  )
}

export default Home