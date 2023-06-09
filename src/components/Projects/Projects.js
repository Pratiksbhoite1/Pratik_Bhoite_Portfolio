import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import ProjectCardscopy from "./ProjectCardscopy";


<<<<<<< HEAD
=======

>>>>>>> be00c3f0c4a5e589acffe45786e47e9e6275171d
// import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/pf.jpeg";
import Ecart from "../../Assets/Projects/shop.png";
import JAVA from "../../Assets/Projects/java.png";
import linkedin from "../../Assets/Projects/intershipCerti.jpeg";
import learnigjava from "../../Assets/Projects/learnignjava.jpeg";
import Python from "../../Assets/Projects/python.jpeg";

import "./project.css";

<<<<<<< HEAD
=======

>>>>>>> be00c3f0c4a5e589acffe45786e47e9e6275171d
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="E Cart"
              description="This is a fully functional eCommerce website that uses React.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database.<u>Under the Devolopment</u>"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          {/* <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Private Chat"
              description="A Personal Chat Application to share resources and hangout with friends build with react.js, css, and Firebase. Have features which allows user for realtime messaging, image sharing and search user."
              ghLink="#"
              demoLink="https://chat-app-rahuljha4171.vercel.app/"
            />
          </Col> */}

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={JAVA}
<<<<<<< HEAD
              title="Expense Tracker"
              description="An online expense tracker using React, Node, Express, and MongoDB as the database. It allows you to keep track of your expenses, investments, and savings. All past transactions are listed, and you can also delete them. "
=======
              title="Hostel Database "
              description="In this project i used sql for database , java for user input and also ui for interface "
>>>>>>> be00c3f0c4a5e589acffe45786e47e9e6275171d
              ghLink="https://github.com/Pratiksbhoite1/Hostel-Management"
              demoLink="https://github.com/Pratiksbhoite1/Hostel-Management/archive/refs/heads/main.zip"
            />
          </Col>
        </Row>



 {/* //certificates  */}


        <h1 className="project-heading">
          My Certificates <strong className="Fluorescent-Blue">  </strong>
        </h1>
        <p>Here are a few Certificates .</p>      
        
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCardscopy
              imgPath={linkedin}
              title="Internship Certificate"
              description="The certificate of successfully completed my Core Java Internship with F.U.E.L, under the expert guidance    "
              ghLink="https://www.linkedin.com/feed/update/urn:li:activity:7054083784886919169/"
              // demoLink="https://ecart.onrender.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCardscopy
              imgPath={learnigjava}
              title="Java Certificate"
              description="The Certificate of “Learning Java 11” by Kathryn Hodge ,Linkedin Certificate "
              ghLink="https://www.linkedin.com/learning/certificates/5be999df2625821ce11d8a22a6469b8757d4fcb73cf3adca9b6e3a4ac6c7b60a?u=88982986"
              // demoLink="#"
            />
          </Col>
          {/* <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Private Chat"
              description="A Personal Chat Application to share resources and hangout with friends build with react.js, css, and Firebase. Have features which allows user for realtime messaging, image sharing and search user."
              ghLink="#"
              demoLink="https://chat-app-rahuljha4171.vercel.app/"
            />
          </Col> */}

          <Col md={6} lg={4} className="project-card">
            <ProjectCardscopy
              imgPath={Python}
              title="Python Certificates"
              description="The Certificates of Learning Python by Joe Marini. Linkedin Certificate  "
              ghLink="https://www.linkedin.com/learning/certificates/5be999df2625821ce11d8a22a6469b8757d4fcb73cf3adca9b6e3a4ac6c7b60a?u=88982986"
              // demoLink="https://github.com/Pratiksbhoite1/Hostel-Management/archive/refs/heads/main.zip"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
