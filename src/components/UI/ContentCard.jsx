import React from "react";
import { Col } from "reactstrap";
import "../../styles/contentCard.css";
import { Link } from "react-router-dom";
const ContentCard = ({ item }) => {
  return (
    <Col lg="4">
      <div className="card__wrapper">
        <div className="card__item">
          <img src={item.imgUrl} alt="" />
          <div className="card__content">
            <h3>{item.recipeName}</h3>
            <p>
              {item.shortDesc}
            </p>
            <button><Link to={`/recipes/${item.id}`}>Tarife bak</Link></button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ContentCard;
