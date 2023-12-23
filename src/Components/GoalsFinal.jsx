import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./styles/goalsFinal.css";

const PostsData = [
  {
    "category": "News",
    "title": "Educating Residents on Proper Waste Management:",
    "text": "nforming and educating residents about the importance of proper waste management, including segregation, recycling, and responsible disposal practices.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Encouraging Recycling Practices:",
    "text": "Incentivizing recycling through awareness campaigns, rewards programs, or recognition for individuals or neighborhoods that actively engage in recycling.",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  
  {
    "category": "News",
    "title": "Reducing Environmental Impact of Waste:",
    "text": "Encouraging the reuse of materials and advocating for the reduction of single-use items to minimize environmental degradation and resource depletion.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Organizing Awareness Campaigns:",
    "text": "Using various communication channels, including social media, local newspapers, flyers, and community events, to reach a wide audience and promote the importance of recycling.",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Travel",
    "title": "Measuring and Monitoring Impact:",
    "text": "Utilizing feedback mechanisms to continuously improve and adapt the initiative based on community input and changing needs.",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  
];

const GoalsFinal = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(PostsData);
  }, []);

  return (
    <div className='goalsSection'>
      <header className="app-header"></header>
      <Title />
      <div className="app-card-list" id="app-card-list">
        {posts.map((post, index) => (
          <Card key={index} details={post} />
        ))}
      </div>
    </div>
  );
};

const Title = () => {
  return (
    <section className="app-title">
      <div className="app-title-content">
        <h1>Our Goals</h1>
        <p>for the better future</p>
        
      </div>
    </section>
  );
};

const Button = () => {
  return (
    <button className="button button-primary">
      <i className="fa fa-chevron-right"></i> Find out more
    </button>
  );
};

const CardHeader = ({ image, category }) => {
  const style = {
    backgroundImage: `url(${image})`
  };
  return (
    <header style={style} className="card-header">
      <h4 className="card-header--title">{category}</h4>
    </header>
  );
};

const CardBody = ({ title, text }) => {
  return (
    <div className="card-body">
      <p className="date">March 20 2015</p>
      <h2>{title}</h2>
      <p className="body-content">{text}</p>
      <Button />
    </div>
  );
};

const Card = ({ details }) => {
  return (
    <article className="card">
      <CardHeader category={details.category} image={details.image} />
      <CardBody title={details.title} text={details.text} />
    </article>
  );
};

CardHeader.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Card.propTypes = {
  details: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default GoalsFinal;
