import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";
import my_picture from "./my_picture.jpg";
import "./home.css";

function HomeScreen() {
  const navigate = useNavigate();
  /*const getData = async () => {
    const res = await axios.get("http://localhost:3000/profile");
    setMessage(res.data.message);
  };
  useEffect(() => {
    getData();
  }, []);*/
  return (
    <>
      <ButtonGroup
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button className="button-23">Home</Button>
        <Button className="button-23">Resume</Button>
        <Button className="button-23">My Favorite Things</Button>
        <Button className="button-23">Blog</Button>
        <Button className="button-23">Contact Me</Button>
      </ButtonGroup>
      <br/>
      <br/>
      <div id="center">
      <img className="img" src={my_picture}/>
      </div>
    </>
  );
}

export default HomeScreen;
