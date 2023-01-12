import React, { useEffect, useState } from "react";
import { useNavigate, BrowserRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function HomeScreen() {
  const [message, setMessage] = useState("");
  //const navigate = useNavigate();
  const getData = async () => {
    const res = await axios.get("http://localhost:3000/profile");
    setMessage(res.data.message);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <div>yo</div>
    </>
  );
}

export default HomeScreen;
