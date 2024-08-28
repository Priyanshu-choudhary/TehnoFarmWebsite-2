import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './TeamComponent.css'; // Ensure to include your CSS styles here

const teamMembers = [
  {
    id: 1,
    image: './harendraSingh.jpg',
    name: 'Harendra Singh',
    position: 'Co-founder',
  },
  {
    id: 2,
    image: './rakesh.jpg',
    name: 'Rakesh Deman',
    position: 'Co-founder',
  },

];

const TeamComponent = () => {
  return (
    <div className="responsive-container-block outer-container">
      <div className="responsive-container-block inner-container">
        <div className="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-tab-12 wk-mobile-12">
          <p className="text-blk heading-text">Meet our team</p>
          <p className='text-xl mt-10 ml-2'> Management Team</p>
          <p className="text-blk sub-heading-text">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo enim risus sit nullam aliquam. Mattis. */}
           
            Our management team is composed of visionary leaders who bring a blend of strategic thinking and hands-on experience. They guide our company's direction and inspire us to achieve new heights every day. With a shared commitment to integrity, growth, and customer satisfaction, they are dedicated to leading our company towards a bright future.
          </p>
          <p className='text-xl mt-10 my-2'>
          Engineering Team
          </p>
          <p className="text-blk sub-heading-text">
          
          Behind every great product is a team of talented engineers. Our engineering team is the backbone of our innovation, transforming ideas into reality with precision and expertise. From crafting cutting-edge solutions to overcoming complex challenges, they ensure that our products are not just functional, but also outstanding.
          </p>
        </div>
        <div className="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12">
          <p className="text-blk team-name">Management Team</p>
          <div className="">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-nexts',
                prevEl: '.swiper-button-prevs',
              }}
              loop={true}
              breakpoints={{
                100: { slidesPerView: 1.2, spaceBetween: 40 },
                340: { slidesPerView: 1.5, spaceBetween: 40 },
                500: { slidesPerView: 1.5, spaceBetween: 20 },
                630: { slidesPerView: 2, spaceBetween: 30 },
                769: { slidesPerView: 1.5, spaceBetween: 30 },
                890: { slidesPerView: 2, spaceBetween: 40 },
                1090: { slidesPerView: 2.5, spaceBetween: 40 },
              }}
              className=""
            >
              {teamMembers.map((member) => (
                 <SwiperSlide key={member.id}>
                 <div className>
                   <img style={{borderRadius:"50%"}} src={member.image} alt={member.name}/>
                   <p className="ml-16 text-blk name font-bold">{member.name}</p>
                   <p className="ml-16 position">{member.position}</p>
                 </div>
               </SwiperSlide>
              ))}
            </Swiper>
            <div className="btn">
              <div className="swiper-button-nexts">
                <img className="arrow-right-1" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg" alt="Next" />
              </div>
              <div className="swiper-button-prevs">
                <img className="arrow-left-1" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg" alt="Previous" />
              </div>
            </div>
          </div>
          <p className="text-blk team-name">Engineering Team</p>
          <div className="">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-nexts2',
                prevEl: '.swiper-button-prevs2',
              }}
              loop={true}
              breakpoints={{
                300: { slidesPerView: 1.5, spaceBetween: 40 },
                500: { slidesPerView: 1.5, spaceBetween: 20 },
                630: { slidesPerView: 2, spaceBetween: 30 },
                769: { slidesPerView: 1.5, spaceBetween: 30 },
                890: { slidesPerView: 2, spaceBetween: 40 },
                1090: { slidesPerView: 2.5, spaceBetween: 40 },
              }}
              className="team-2-swiper"
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="responsive-cell-block ">
                    <img style={{borderRadius:"50%"}} className="team-member-image" src={member.image} alt={member.name} />
                    <p className="ml-16 text-blk name font-bold">{member.name}</p>
                    <p className="ml-16 text-blk position">{member.position}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="btn">
              <div className="swiper-button-nexts2">
                <img className="arrow-right-2" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg" alt="Next" />
              </div>
              <div className="swiper-button-prevs2">
                <img className="arrow-left-2" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg" alt="Previous" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
