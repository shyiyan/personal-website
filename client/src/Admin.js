import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import my_picture from "./my_picture.jpg";
import MyNavBar from "./MyNavBar"
import "./home.css";

function Admin() {
  //const navigate = useNavigate();

  /*const getData = async () => {
    const res = await axios.get("http://localhost:3000/profile");
    setMessage(res.data.message);
  };
  useEffect(() => {
    getData();
  }, []);*/
  return (
    <>
    <MyNavBar/>
      <br/>
      <br/>
    </>
  );
}

export default Admin;
