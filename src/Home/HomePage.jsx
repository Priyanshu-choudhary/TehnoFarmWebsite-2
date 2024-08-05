import React from 'react'
import "/src/scss/style.scss"
import HeroSection from './HeroSection-1'
// import NavBar from './NavBar'
import ProductionSection from './ProductionSection'
import WhyChooseUs from './WhyChooseUs'
import HelpSection from './HelpSection'
import PopularProducts from './popularProducts'
import TestimonialSlider from './Testimonial'
import Footer from './Footer'
function HomePage() {
    return (

        <div>
            {/* <NavBar /> */}
            <HeroSection />
            <ProductionSection />
            <WhyChooseUs />
            <HelpSection  />
            <PopularProducts />
            <TestimonialSlider />
            <Footer />
        </div>


    )
}

export default HomePage
