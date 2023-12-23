import React from 'react';
import "./styles/store.css";

import PropTypes from 'prop-types';

function Card({ imageUrl, title, text }) {
  return (
    <div className="ccard">
      <img src={imageUrl} alt="Card" />
      <div className="ccard-body">
        <h2 className="ccard-title">{title}</h2>
        <p className="ccard-text">{text}</p>
        <a href="#" className="btn">
          Explore
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function Store() {
  return (
    <div className="ccontainer">
      <Card
        imageUrl="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title="Title One"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minus voluptas magnam veritatis error quis dolorum ab placeat quasi doloremque."
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title="Title Two"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minus voluptas magnam veritatis error quis dolorum ab placeat quasi doloremque."
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
        title="Title Three"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minus voluptas magnam veritatis error quis dolorum ab placeat quasi doloremque."
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title="Title One"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minus voluptas magnam veritatis error quis dolorum ab placeat quasi doloremque."
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title="Title Two"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minus voluptas magnam veritatis error quis dolorum ab placeat quasi doloremque."
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
        title="Title Three"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minus voluptas magnam veritatis error quis dolorum ab placeat quasi doloremque."
      />
    </div>
  );
}

export default Store;
