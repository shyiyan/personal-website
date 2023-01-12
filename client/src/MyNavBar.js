import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
//import "./home.css";
import "./navbar.css"

function MyNavBar() {
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
        <Button className="button-52">Home</Button>
        <Button className="button-52">Resume</Button>
        <Button className="button-52">My Favorite Things</Button>
        <Button className="button-52">Blog</Button>
        <Button className="button-52">Contact Me</Button>
      </ButtonGroup>
    </>
  );
}

export default MyNavBar;
