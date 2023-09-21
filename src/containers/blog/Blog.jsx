import React from 'react';
import Article from '../../components/article/Article';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';
import './Blog.css';
const Blog = () => {
  return (
    <div className="E-waste__blog section__padding" id="blog">
    <div className="E-waste__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="E-waste__blog-container">
      <div className="E-waste__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 30, 2021" text="E-Waste: The Hidden Hazard in Our Digital Age – Unveiling the Impact!" />
      </div>
      <div className="E-waste__blog-container_groupB">
        <Article imgUrl={blog02} date="Dec 29, 2022" text="Green Tech Revolution: How E-Waste Can Lead to Positive Change" />
        <Article imgUrl={blog03} date="Oct 26, 2021" text="Sustainable Electronics: A Brighter Future Beyond E-Waste" />
        <Article imgUrl={blog04} date="Sep 16, 2018" text="The Power of E-Waste Awareness: A Cleaner, Greener World" />
        <Article imgUrl={blog05} date="Sep 06, 2023" text="E-Waste Recycling: Turning Trash into Treasure" />
      </div>
    </div>
  </div>
  );
}

export default Blog;