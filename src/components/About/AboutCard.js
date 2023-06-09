import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view ">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-header">Pratik Bhoite</span> from Pune, Maharastra, India. I am a computer science Student Pursuing in third year of Engineering  and a passionate programmer.
            <br />
            <br />
            In addition to coding, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Developing Websites
            </li>
            <li className="about-activity">
<<<<<<< HEAD
              <AiOutlineArrowRight /> Developing java Projects
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Problem Solving
            </li>
            <li className="about-activity">
=======
>>>>>>> be00c3f0c4a5e589acffe45786e47e9e6275171d
              <AiOutlineArrowRight /> Reading Books
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing Games
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Traveling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
