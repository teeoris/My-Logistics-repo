import React from 'react';
import "./home.css";
import Img_02 from "../../asset/Img_02.jpg"
import Img_03 from "../../asset/Img_03.jpg"
import Img_04 from "../../asset/Img_04.jpg"
import Img_05 from "../../asset/Img_05.jpg"
import { NavbarA, NavbarB, Footer, Services, ServiceOpt, Signup, Pricing, Review } from "../../components/index";

const Home = () => {
  return (
    <div className='myLog__home'>
      <div className="myLog__home-content">
        <div className="myLog__home-content_navbar">
          <NavbarA />
          <NavbarB />
        </div>
        <div className="myLog__home-content_intro" id='Home'>
          <div className="myLog__home-content_intro-details">
            <p className='myLog__home-content_intro-details_title'>Delviz logistics</p>
            <p className='myLog__home-content_intro-details_desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque soluta veniam.</p>
          </div>
        </div>
        <div className="myLog__home-content_services" id='Service'>
          <Services 
            title="package shipment" 
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt veniam doloremque. Quibusdam amet molestias, dignissimos distinctio incidunt eum odio repellendus corrupti sit doloremque fugiat."
          />
          <Services 
            title="storage" 
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt veniam doloremque. Quibusdam amet molestias, dignissimos distinctio incidunt eum odio repellendus corrupti sit doloremque fugiat."
          />
          <Services 
            title="line haulage" 
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt veniam doloremque. Quibusdam amet molestias, dignissimos distinctio incidunt eum odio repellendus corrupti sit doloremque fugiat."
          />
        </div>
        <div className="myLog__home-content_serviceOptions" id='ServiceOptions'>
          <div className="myLog__home-content_serviceOptions_wrapper">
            <div className="myLog__home-content_serviceOptions_wrapper-left">
                <ServiceOpt />
                <ServiceOpt />
                <ServiceOpt />
                <ServiceOpt />
            </div>
            <div className="myLog__home-content_serviceOptions_wrapper-right">
              <img src={Img_02} alt="img02" />
            </div>
          </div>
        </div>
        <div className="myLog__home-content_review">
          <Review 
            logImg={Img_03}
          />
          <Review 
            logImg={Img_04}
          />
          <Review 
            logImg={Img_05}
          />
        </div>
        <div className="myLog__home-content_pricing" id='Pricing'>
          <p className="myLog__home-content_pricing-title">service rate & service level</p>
          <div className="myLog__home-content_pricing-Wrap">
            <Pricing 
              title="Tier 1" 
              location="(Abuja)" 
              smallPrice="N500" 
              smallTitle="Small 0-2kg" 
              mediumPrice="Medium 2.1-7kg"
              mediumTitle="N1,000"
              largeTitle="Large 7.1-10kg"
              largePrice="N1,500"
              extraLargeTitle="More than 10kg"
              extraLargePrice="N1,500 + N50/kg"
              />
            <Pricing 
              title="Tier 2" 
              location="(Lagos)" 
              smallPrice="N500" 
              smallTitle="Small 0-2kg" 
              mediumPrice="Medium 2.1-7kg"
              mediumTitle="N1,000"
              largeTitle="Large 7.1-10kg"
              largePrice="N1,500"
              extraLargeTitle="More than 10kg"
              extraLargePrice="N1,500 + N50/kg"
              />
            <Pricing 
              title="Tier 3" 
              location="(Port-Harcourt)" 
              smallPrice="N500" 
              smallTitle="Small 0-2kg" 
              mediumPrice="Medium 2.1-7kg"
              mediumTitle="N1,000"
              largeTitle="Large 7.1-10kg"
              largePrice="N1,500"
              extraLargeTitle="More than 10kg"
              extraLargePrice="N1,500 + N50/kg"
              />
            <Pricing 
              title="Tier 4" 
              location="(Osun)" 
              smallPrice="N500" 
              smallTitle="Small 0-2kg" 
              mediumPrice="Medium 2.1-7kg"
              mediumTitle="N1,000"
              largeTitle="Large 7.1-10kg"
              largePrice="N1,500"
              extraLargeTitle="More than 10kg"
              extraLargePrice="N1,500 + N50/kg"
              />
          </div>
        </div>
        <div className="myLog__home-content_signUp" id='SignUp'>
          <Signup />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home