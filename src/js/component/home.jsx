import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

import image1 from "../../img/01.jpg";
import image2 from "../../img/02.jpg";
import image3 from "../../img/03.jpg";
import image4 from "../../img/04.jpg";

const cardSet = [
  {
    imageUrl: image1,
    cardTitle: "Title 1",
    cardDescription: "This is a description",
    buttonUrl: "https://4geeksacademy.com/",
    buttonLabel: "4Geeks",
  },
  {
    imageUrl: image2,
    cardTitle: "Title 2",
    cardDescription: "This is a description",
    buttonUrl: "https://4geeksacademy.com/",
    buttonLabel: "4Geeks",
  },
  {
    imageUrl: image3,
    cardTitle: "Title 3",
    cardDescription: "This is a description",
    buttonUrl: "https://4geeksacademy.com/",
    buttonLabel: "4Geeks",
  },
  {
    imageUrl: image4,
    cardTitle: "Title 4",
    cardDescription: "This is a description",
    buttonUrl: "https://4geeksacademy.com/",
    buttonLabel: "4Geeks",
  },
];

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

//H Home component
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
        <div className="container-fluxi d-flex gx-0 row">{jsxCardElement}</div>
      </div>
    </div>
  );
};

export default Home;
