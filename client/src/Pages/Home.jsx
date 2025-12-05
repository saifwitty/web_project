import React from 'react'
import "../styles/Home.css"
import {Container,Row, Col} from 'reactstrap'
import SearchBar from '../Shared/SearchBar'
import ServiceList from '../Services/ServiceList'
import FeaturedToursList from '../Components/FeaturedTours/FeaturedToursList'
import MasonryImagesGallery from '../Components/Image-gallery/MasonryImagesGallery'
import Footer from '../Components/Footer/Footer'

import Contact from './Contact'
import FeaturedBlogsList from '../Components/FeaturedBlogs.jsx/FeaturedBlogsList'
import lalb from "../assets/lal.jpg"
import saintm from "../assets/saint.jpg"
import sreem from "../assets/sreemangal.jpg"
import sundar from "../assets/sundarban.jpg"
const Home = () => {
  return (
    <>
   <section className="dynamic-boxes-section">
  <Container>
    <Row>
      <p className='Top'>Top Destinations</p>
      <Col lg="3" md="6" sm="12">
        <div className="box saintmartin">
          <div className="box-image">
            <img src={saintm} alt="Saint Martin" />
          </div>
          <h3>Saint Martin</h3>
          <p>Explore the beautiful coral island with crystal clear water and serene beaches.</p>
        </div>
      </Col>
      <Col lg="3" md="6" sm="12">
        <div className="box sreemangal">
          <div className="box-image">
            <img src={sreem} alt="Sreemangal" />
          </div>
          <h3>Sreemangal</h3>
          <p>Visit the tea capital of Bangladesh with lush green tea gardens and tranquil nature.</p>
        </div>
      </Col>
      <Col lg="3" md="6" sm="12">
        <div className="box sundarban">
          <div className="box-image">
            <img src={sundar} alt="Sundarban" />
          </div>
          <h3>Sundarban</h3>
          <p>Discover the largest mangrove forest, home of the Royal Bengal Tiger.</p>
        </div>
      </Col>
      <Col lg="3" md="6" sm="12">
        <div className="box lalbagkella">
          <div className="box-image">
            <img src={lalb} alt="Lalbag Kella" />
          </div>
          <h3>Lalbag Kella</h3>
          <p>Explore the historic 17th-century Mughal fort located in Dhaka city.</p>
        </div>
      </Col>
    </Row>
  </Container>
</section>

    

    <section>
      <Container>
        <Row>
          <Col lg="12">
           
            <h2 className="gallery__title">
              Visit Our Customers Tour Gallery
            </h2>
          </Col>
          <Col lg="12">
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <div className="title">
        
        </div>
        <Row>
      <FeaturedBlogsList lg={4} md={6} sm={6}/>
        </Row>
      </Container>
    </section>
   
    <Contact/>
  
    </>
  )
}

export default Home