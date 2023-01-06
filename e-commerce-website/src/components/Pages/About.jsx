import React from 'react'

const About = () => {
  return (
    <div>
      <img
        className=" w-100 position-relative"
        src="https://wallpapercave.com/wp/wp7566472.jpg"
      />
      <h1
        className=" display-1 position-absolute border-bottom border-3 border-dark"
        style={{ left: "30%", top: "10%" }}
      >
        ABOUT
      </h1>
      <div
        className=" w-25 position-absolute"
        style={{ top: "20%", right: "10%" }}
      >
        <p>
          eCommerce is an integral part of our global, modern economy. Over the
          past couple of decades, it’s transformed the way we shop, and the way
          we do business. In fact, merchants selling on the Wix eCommerce
          platform saw sales revenues grow 114% year-over-year in 2020, reaching
          $5.4 billion in online transactions.
        </p>
      
      </div>
    </div>
  );
}

export default About