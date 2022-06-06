import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai2.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">DeFi Degens Community </h1>
      <p>A pulsating community of web3 builders in Bangalore , and spreading across other cities in India. We are on a mission to galvanise the DeFi space, to make India a Global DeFi Hub, and a destination for talent exchange.  </p>
      <p>We host regular weekly Meetups and community activities in and around Bangalore, and will be hosting DeFi workshops all over India to educate the masses. We are a web3 native, with unique create-to-earn opportunities for all our members. Members will get to learn every web3 primitive, and work with other degens leading the space. We also aim to kickstart a defidegen DAO for building on web3. We welcome degens from every field, in every skill level.</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
