import React from "react";
import { useState, useEffect } from "react";
import "./styles/store.css";
import Button from "react-bootstrap/Button";

import Alert from "react-bootstrap/Alert"; // Import Alert from react-bootstrap

import PropTypes from "prop-types";
import { db, auth } from "../firebase-config";
import {
  query,
  collection,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

function Card({ imageUrl, title, text, cost }) {
  const [showAlert, setShowAlert] = useState(false);
  const [userPoints, setUserPoints] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "userpoints"),
        where("email", "==", auth.currentUser.email)
      );

      try {
        const querySnapshot = await getDocs(q);
        const userDoc = querySnapshot.docs[0];
        if (userDoc) {
          setUserPoints(userDoc.data().points);
        }
      } catch (error) {
        console.error("Error fetching user points:", error);
      }
    };

    fetchData();
  }, [userPoints]);

  const handleBuyNow = async () => {
    if (userPoints >= parseInt(cost)) {
      try {
        // Deduct the cost from user points
        const newPoints = userPoints - parseInt(cost);

        // Update the user points in the database
        const q = query(
          collection(db, "userpoints"),
          where("email", "==", auth.currentUser.email)
        );
        const querySnapshot = await getDocs(q);
        const userDoc = querySnapshot.docs[0];

        const userDocRef = doc(db, "userpoints", userDoc.id);
        await updateDoc(userDocRef, { points: newPoints.toString() });

        // Show success message or navigate to a success page
        console.log("Buy Now clicked! Points deducted successfully.");

        // Update local state
        setUserPoints(newPoints);
        setShowSuccessAlert(true);
      } catch (error) {
        console.error("Error updating user points:", error);
      }
    } else {
      setShowAlert(true);
    }
  };
  return (
    <div className="ccard">
      <img src={imageUrl} alt="Card" />
      <div className="ccard-body">
        <h2 className="ccard-title">{title}</h2>
        <p className="ccard-text">{text}</p>

        <Button variant="primary" onClick={handleBuyNow}>
          Buy Now
        </Button>
        {showAlert && (
          <Alert
            variant="danger"
            className="mt-3"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Not enough points!
          </Alert>
        )}
        {showSuccessAlert && (
          <Alert
            variant="success"
            className="mt-3"
            onClose={() => setShowSuccessAlert(false)}
            dismissible
          >
            Item purchased successfully!
          </Alert>
        )}
        <h3 className="mt-2 fw-bold">{cost}</h3>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
};

function Store() {
  const [userPoints, setUserPoints] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "userpoints"),
        where("email", "==", auth.currentUser.email)
      );

      try {
        const querySnapshot = await getDocs(q);
        const userDoc = querySnapshot.docs[0];
        if (userDoc) {
          setUserPoints(userDoc.data().points);
        }
      } catch (error) {
        console.error("Error fetching user points:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="storeheading">
        <h1 className="gradient-text">SHOP NOW!</h1>
      </div>
      <h3 className="user-points">
        {userPoints !== null && (
          <p className="text-center">
            Your current points: <strong>{userPoints}</strong>
          </p>
        )}
      </h3>
      <div className="ccontainer">
        <Card
          imageUrl="https://www.shaktiplasticinds.com/wp-content/uploads/2020/10/Pallet-600x600.jpg"
          title="Heavy Duty Plastic Pallet"
          text="Manufactured from reprocessed plastic with some of the salient features of these pallets are their durability, sturdiness, waterproofing ability, and being maintenance-free."
          cost="200 points"
        />
        <Card
          imageUrl="https://www.shaktiplasticinds.com/wp-content/uploads/2020/10/Dustbin-600x600.jpg"
          title="Carbon Negative Dustbin- 50 Ltrs"
          text="Super Shakti Dustbin is made of 100% sustained and recycled plastic. These Dustbins can be used in commercial, industrial and residential areas."
          cost="100 points"
        />
        <Card
          imageUrl="https://www.shaktiplasticinds.com/wp-content/uploads/2020/10/FlowerPot-600x600.jpg"
          title="Recycled Flower Pot"
          text="Manufactured out of plastic waste, maintaining the highest quality standards . These pots are designed to be durable, lightWweight, easily stackable, with large drain holes and are cost-effective."
          cost="350 points"
        />
        <Card
          imageUrl="https://www.shaktiplasticinds.com/wp-content/uploads/2020/10/12-600x600.jpeg"
          title="Recycled Garbage Bags "
          text="These garbage bags have high trash-carrying capacity and are made by recycling plastic waste."
          cost="300 points"
        />
        <Card
          imageUrl="https://www.shaktiplasticinds.com/wp-content/uploads/2020/10/Bench-600x600.jpg"
          title="Recycled Plastic Benches"
          text="Recycled Plastic Benches – 100% MLP Recycled, Reduce Carbon Footprint durability, sturdiness. "
          cost="1250 points"
        />
        <Card
          imageUrl="https://www.shaktiplasticinds.com/wp-content/uploads/2023/07/Tiles-01-768x768.jpg"
          title="Recycled Plastic Tiles"
          text="Designed out of Post-Consumer plastic waste, these tiles are super sturdy and easy to install."
          cost="300 points"
        />
      </div>
    </div>
  );
}

export default Store;
