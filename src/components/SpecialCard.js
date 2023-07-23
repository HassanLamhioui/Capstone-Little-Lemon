import React from "react";
import "../styles/SpecialCard.css";
import Meal1 from "../assets/CobbSalad.jpg";
import Meal2 from "../assets/Gyros.jpg";
import Meal3 from "../assets/LemonCurd.jpg";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const SpecialsCard = () => {
  const specialMenus = [
    {
      image: Meal1,
      title: "Cobb salad",
      price: "$9.99",
      description:
        "Our Cobb Salad: Fresh lettuce, grilled chicken, tomatoes, avocado, eggs, blue cheese, and crispy bacon, topped with homemade vinaigrette. Satisfying and delicious!",
      order: "Order a delivery",
    },
    {
      image: Meal2,
      title: "Gyros",
      price: "$5.99",
      description:
        "Enjoy our Gyros, a Greek classic featuring seasoned, tender meat cooked on a vertical rotisserie. Served in warm pita with fresh toppings like juicy tomatoes, crisp onions, and creamy tzatziki sauce. A burst of flavors in every bite!",
      order: "Order a delivery",
    },
    {
      image: Meal3,
      title: "Lemon Curd",
      price: "$5.00",
      description:
        "Savor our velvety Lemon Curd, a perfect blend of tangy and sweet. Elevate your treats with this sunny delight!",
      order: "Order a delivery",
    },
  ];

  const specialMenusItems = specialMenus.map((menu) => {
    const image = menu.image;
    const title = menu.title;
    const price = menu.price;
    const description = menu.description;
    const order = menu.order;

    return (
      <div>
        <div className="special-card-container">
          <div className="image-container">
            <img src={image} alt="Special dessert" />
          </div>
          <div className="special-card-text">
            <div className="special-card-title">
              <h3>{title}</h3>
              <h3 className="price-tag">{price}</h3>
            </div>
            <p>{description}</p>
            <Link to="#">
              <h4>
                {order}
                {
                  <MdDeliveryDining
                    size={30}
                    style={{ color: "#333333", marginLeft: "10px" }}
                  />
                }
              </h4>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="special-card">{specialMenusItems}</div>
    </div>
  );
};

export default SpecialsCard;
