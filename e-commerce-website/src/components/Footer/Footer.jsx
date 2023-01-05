import React from 'react'
import { BsFacebook, BsSpotify, BsYoutube } from "react-icons/bs";
const Footer = () => {
    return (
      <div className=" bg-gradient header p-5">
        <h1 className=" display-4 text-white">The Generics</h1>
        <div
          className=" d-flex gap-5 justify-content-center mt-3 text-white"
          style={{ fontSize: "35px" }}
        >
          <BsYoutube />
          <BsSpotify />
          <BsFacebook />
        </div>
      </div>
    );
}

export default Footer