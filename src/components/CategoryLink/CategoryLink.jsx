import React from 'react';
import { Link } from 'react-router-dom';
import Dog from "../../img/dog-face.jpeg";
import Cat from "../../img/cat-face.png";
import Fish from "../../img/fish-face.webp";
import Bird from "../../img/bird-face.jpeg";

export default function CategoryLink() {
  return (
    <>
    Category Link Page
    
    <p className="chooseTitle">Choose Your Pet Community</p>
            <div className="categories">
                <div className="categoryDiv">
                    <Link to="/dog"> <img className="categoryImg" src={Dog} alt="Dog"/> </Link>
                    <span className="caption">Dog</span>
                </div>
                <div className="categoryDiv">
                    <Link to="/cat"> <img className="categoryImg" src={Cat} alt="Cat"/> </Link>
                    <span className="caption">Cat</span>
                </div>
                <div className="categoryDiv">
                    <Link to="/fish"> <img className="categoryImg" src={Fish} alt="Fish"/> </Link>
                    <span className="caption">Fish</span>
                </div>
                <div className="categoryDiv">
                    <Link to="/bird"> <img className="categoryImg" src={Bird} alt="Bird"/> </Link>
                    <span className="caption">Bird</span>
                </div>
            </div>
    </>
  )
}
