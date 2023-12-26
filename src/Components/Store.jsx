import React from "react";
import "./styles/store.css";
import Button from "react-bootstrap/Button";

import PropTypes from "prop-types";

function Card({ imageUrl, title, text }) {
  return (
    <div className="ccard">
      <img src={imageUrl} alt="Card" />
      <div className="ccard-body">
        <h2 className="ccard-title">{title}</h2>
        <p className="ccard-text">{text}</p>

        <Button variant="primary">Buy Now</Button>
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
        imageUrl="https://www.shaktiplasticinds.com/wp-content/uploads/2020/10/Pallet-600x600.jpg"
        title="Heavy Duty Plastic Pallet"
        text="Manufactured from reprocessed plastic with some of the salient features of these pallets are their durability, sturdiness, waterproofing ability, and being maintenance-free."
      />
      <Card
        imageUrl="https://www.shaktiplasticinds.com/wp-content/uploads/2020/10/Dustbin-600x600.jpg"
        title="Carbon Negative Dustbin- 50 Ltrs"
        text="Super Shakti Dustbin is made of 100% sustained and recycled plastic. These Dustbins can be used in commercial, industrial and residential areas."
      />
      <Card
        imageUrl="https://www.shaktiplasticinds.com/wp-content/uploads/2020/10/FlowerPot-600x600.jpg"
        title="Recycled Flower Pot"
        text="Manufactured out of plastic waste, maintaining the highest quality standards . These pots are designed to be durable, lightWweight, easily stackable, with large drain holes and are cost-effective."
      />
      <Card
        imageUrl="https://www.shaktiplasticinds.com/wp-content/uploads/2020/10/12-600x600.jpeg"
        title="Recycled Garbage Bags "
        text="These garbage bags have high trash-carrying capacity and are made by recycling plastic waste."
      />
      <Card
        imageUrl="https://www.shaktiplasticinds.com/wp-content/uploads/2020/10/Bench-600x600.jpg"
        title="Recycled Plastic Benches"
        text="Recycled Plastic Benches – 100% MLP Recycled, Reduce Carbon Footprint durability, sturdiness. "
      />
      <Card
        imageUrl="https://www.shaktiplasticinds.com/wp-content/uploads/2023/07/Tiles-01-768x768.jpg"
        title="Recycled Plastic Tiles"
        text="Designed out of Post-Consumer plastic waste, these tiles are super sturdy and easy to install."
      />
    </div>
  );
}

export default Store;
