import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/firstimg.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/sixthimg.jpeg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/fifthimg.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "sevenimg.jpg",
      title: "Marriage planning",
    },
    {
      id: 5,
      url: "/thirdimg.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "/fourthimg.jpeg",
      title: "Wedding Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;