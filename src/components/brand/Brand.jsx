import React from 'react';
import './Brand.css';
import {home,search,maps,user} from './import';

const Brand = () => (
  <div className="E-waste__brand section__padding">
    <div>
    <img src={home} alt="home" id="myImage" onclick="window.location.href='your_link_here';" style="cursor: pointer;" />
    </div>
    <div>
      <img src={search} alt="search"/>
    </div>
    <div>
      <img src={maps} alt="maps"/>
    </div>
    <div>
      <img src={user} alt="user"/>
    </div>
  </div>
);

export default Brand