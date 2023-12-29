import React from 'react';
import "./styles/RecycleRR.css"
import PropTypes from 'prop-types';

const RecycleRR = () => {
  const cardsData = [
    {
      accentColor: '#000',
      // iconClass: 'fa-brands fa-css3',
      imageUrl:'/assets/reduce.png',
      title: 'Reduce',
      description: [
        'Use reusable grocery bags, and not just for groceries',
'	Purchase wisely and recycle',
'	Avoid single-use food and drink containers and utensils',
'	Buy secondhand items and donate used goods',
	'Buy loose fruit and vegetables and avoid items that are heavily packaged'
        ],
      // description:
      //   '1	Use a reusable bottle/cup for beverages on-the-go. Use reusable grocery bags, and not just for groceries. Purchase wisely and recycle. Avoid single-use food and drink containers and utensils. Buy secondhand items and donate used goods. Buy loose fruit and vegetables and avoid items that are heavily packaged',
    },
    {
      accentColor: '#000',
      // iconClass: 'fa-brands fa-html5',
      imageUrl:'/assets/reuse.png',
      title: 'Reuse',
      description: [
        'Donate items that are still in a good, usable condition to charities or charity shops',
'	Repurpose glass, plastic and cardboard containers to give them another life',
'	Carry a re-usable shopping bag',
'	Re-use wrapping paper or gift bags',
'	Convert old clothing, towels or sheets into cleaning rags/cloths'
        ],
      // description:
      //   'Donate items that are still in a good, usable condition to charities or charity shops . Repurpose glass, plastic and cardboard containers to give them another life. Carry a re-usable shopping bag. Re-use wrapping paper or gift bags. Convert old clothing, towels or sheets into cleaning rags/cloths',
    },
    {
      accentColor: '#000',
      // iconClass: 'fa-brands fa-codepen',
      imageUrl:'/assets/recycle.png',
      title: 'Recycle',
      description: [
      'Recycle plastic bags separately',
	'Check the symbol printed on plastics to see if they’re recyclable',
      'Glass can be recycled over and over again, so don’t trash it!',
	'So long as it’s clean, you can recycle basically any metal',
  'Most batteries are recyclable, but they typically must be separated'
      ],
      // description:
      //   'Recycle plastic bags separately . Check the symbol printed on plastics to see if they’re recyclable . Glass can be recycled over and over again, so don’t trash it! .So long as it’s clean, you can recycle basically any metal. Most batteries are recyclable, but they typically must be separated.',
    }
    
  ];

  return (
    <div className='recycleSection mb-5'>
    <h1 className="text-center mt-4 lh-1">3Rs</h1>
    <br/>
    <br/>
    <br/>
    
      <ol className="ol-cards">
        {cardsData.map((card, index) => (
          <CardItem key={index} {...card} />
        ))}
      </ol>
    </div>
  );
};

const CardItem = ({ accentColor, imageUrl, title, description }) => {
  const cardStyle = {
    '--accent-color': accentColor,
  };

  return (
    <>
    
    
    <li style={cardStyle}>
      <div className="icon" style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        {/* <i className={`fa-brands ${iconClass}`}></i> */}
        <img src={imageUrl} style={{width:'70px',height:'60px'}}></img>
      </div>
      <div className="title">{title}</div>
      <ul className="descr">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
    </>
  );
};

CardItem.propTypes = {
  accentColor: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired, // Add a new prop for the image URL
  // iconClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RecycleRR;
