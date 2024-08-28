import React from 'react';
import "/src/scss/style.scss";
import HeroSection from './HeroSection-1';
// import NavBar from './NavBar';
import ProductionSection from './ProductionSection';
import WhyChooseUs from './WhyChooseUs';
import HelpSection from './HelpSection';
import PopularProducts from './popularProducts';
import TestimonialSlider from './Testimonial';
import Footer from './Footer';
import ProductList from '../Shop/productList';
import ProductDetail from '../Shop/productDetails';
import TeamComponent from '../Team/TEamMember';

function HomePage() {
  // Create an array of IDs from 1 to 10
  const productIds = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div>
      {/* <NavBar /> */}
      <HeroSection />
      {/* <ProductionSection /> */}
      {/* <ProductList/> */}
      
    <p className='text-center font-bold text-3xl  underline'>Our Products</p>
      {productIds.map(id => (
        <ProductDetail key={id} propsId={id.toString()} />
      ))}

      <WhyChooseUs />
      <HelpSection />
      <PopularProducts />
      <TestimonialSlider />
      <TeamComponent/>
      <Footer />
    </div>
  );
}

export default HomePage;
