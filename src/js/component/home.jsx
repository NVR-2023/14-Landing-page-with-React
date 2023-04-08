// initializes React and load components
import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx"; 

// Loads images
import image1 from "../../img/01.jpg";
import image2 from "../../img/02.jpg";
import image3 from "../../img/03.jpg";
import image4 from "../../img/04.jpg";

// Initializes card data
const cardSet = [
  {
    imageUrl: image1, 
    cardTitle: "Card Title 1",
    cardDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum consequuntur, vel quasi neque nisi illo enim dolorem quia incidunt distinctio.",
    buttonUrl: "https://4geeksacademy.com/",
    buttonLabel: "Find Out More!",
  },
  {
    imageUrl: image2,
    cardTitle: "Card Title 2",
    cardDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum consequuntur, vel quasi neque nisi illo enim dolorem quia incidunt distinctio.",
    buttonUrl: "https://4geeksacademy.com/",
    buttonLabel: "Find Out More!",
  },
  {
    imageUrl: image3,
    cardTitle: "Card Title 3",
    cardDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum consequuntur, vel quasi neque nisi illo enim dolorem quia incidunt distinctio.",
    buttonUrl: "https://4geeksacademy.com/",
    buttonLabel: "Find Out More!",
  },
  {
    imageUrl: image4,
    cardTitle: "Card Title 4",
    cardDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum consequuntur, vel quasi neque nisi illo enim dolorem quia incidunt distinctio.",
    buttonUrl: "https://4geeksacademy.com/",
    buttonLabel: "Find Out More!",
  },
];

// Mpas cardSet to JSX element
const jsxCardElement = cardSet.map((object, index) => {
  return (
    <div className="col-sm-12 col-md-3 py-2" key={index}>
      <Card
        imageUrl={object.imageUrl}
        cardTitle={object.cardTitle}
        cardDescription={object.cardDescription}
        buttonUrl={object.buttonUrl}
        buttonLabel={object.buttonLabel}
      />
    </div>
  );
});

//Home component
const Home = () => {
  return (
    <div>
      <div className="gx-0">
        <Navbar />
      </div>
      <div className="container-fluid m-3 gx-0">
        <div>
          <Jumbotron />
        </div>
        <div className="container-fluid d-flex gx-0 row">{jsxCardElement}</div>
      </div>
    </div>
  );
};

export default Home;
