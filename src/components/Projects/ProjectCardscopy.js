import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
<<<<<<< HEAD
// import { BsGithub } from "react-icons/bs";
=======
import { BsGithub } from "react-icons/bs";
>>>>>>> be00c3f0c4a5e589acffe45786e47e9e6275171d
import { BsLinkedin } from "react-icons/bs";

function ProjectCardscopy(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
<<<<<<< HEAD
          <BsLinkedin /> &nbsp;
=======
          <BsLinkedin/> &nbsp;
>>>>>>> be00c3f0c4a5e589acffe45786e47e9e6275171d
          {props.isBlog ? "Blog" : "Linkedin"}
        </Button>
       
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Download"}
          </Button>
        )}

      


      </Card.Body>
    </Card>
<<<<<<< HEAD
    
=======
  
>>>>>>> be00c3f0c4a5e589acffe45786e47e9e6275171d
  );
}


export default ProjectCardscopy;
