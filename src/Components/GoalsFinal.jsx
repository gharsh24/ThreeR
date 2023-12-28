import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles/goalsFinal.css";
import Button from 'react-bootstrap/Button';

const PostsData = [
  {
    category: "Goals",
    title: "Educating Residents on Proper Waste Management:",
    text: "Informing and educating residents about the importance of proper waste management, including segregation, recycling, and responsible disposal practices.",
    image:
      "https://images.pexels.com/photos/128421/pexels-photo-128421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Goals",
    title: "Encouraging Recycling Practices:",
    text: "Incentivizing recycling through awareness campaigns, rewards programs, or recognition for individuals or neighborhoods that actively engage in recycling.Motivating residents to actively participate in recycling efforts by providing accessible and convenient recycling facilities.",
    image:
      "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    category: "Goals",
    title: "Reducing Environmental Impact of Waste:",
    text: "Reducing the amount of waste sent to landfills by promoting recycling and proper waste disposal techniques.Advocating for the reduction of single-use items to minimize degradation and depletion.",
    image:
      "https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Goals",
    title: "Organizing Awareness Campaigns:",
    text: "Conducting regular awareness campaigns, events, and workshops to engage the community, spread information about waste management best practices, and encourage participation in recycling initiatives.",
    image:
      "https://images.pexels.com/photos/3302183/pexels-photo-3302183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Goals",
    title: "Measuring and Monitoring Impact:",
    text: "Implementing mechanisms to track and measure the effectiveness of the recycling initiative, such as quantifying the amount of waste diverted from landfills and evaluating environmental impact assessments",
    image:
      "https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const GoalsFinal = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(PostsData);
  }, []);

  return (
    <div className="goalsSection mt-0">
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

const Buttoon = () => {
  return (
    // <button className="button button-primary">
    //   <i className="fa fa-chevron-right"></i> Find out more
    // </button>
    <Button variant="outline-secondary"><i className="fa fa-chevron-right"></i> Find out more</Button>
  );
};

const CardHeader = ({ image, category }) => {
  const style = {
    backgroundImage: `url(${image})`,
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
      <p className="date">March 20 2023</p>
      <h2>{title}</h2>
      <p className="body-content">{text}</p>
      <Buttoon />
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
