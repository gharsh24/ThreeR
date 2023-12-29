import React from 'react';
import "./styles/RecycleRR.css"
import PropTypes from 'prop-types';

const RecycleRR = () => {
  const cardsData = [
    {
      accentColor: '#000',
      iconClass: 'fa-brands fa-codepen',
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
    },
    {
      accentColor: '#000',
      iconClass: 'fa-brands fa-html5',
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
      iconClass: 'fa-brands fa-css3',
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
  ];

  return (
    <div className='recycleSection'>
    <h1 className="text-center mt-4 fw-bold">The Three R's</h1>
      <ol className="ol-cards">
        {cardsData.map((card, index) => (
          <CardItem key={index} {...card} />
        ))}
      </ol>
    </div>
  );
};

const CardItem = ({ accentColor, iconClass, title, description }) => {
  const cardStyle = {
    '--accent-color': accentColor,
  };

  return (
    <>
    
    
    <li style={cardStyle}>
      <div className="icon">
        <i className={`fa-brands ${iconClass}`}></i>
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
  iconClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RecycleRR;
