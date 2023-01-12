import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import my_picture from "./my_picture.jpg";
import MyNavBar from "./MyNavBar"
import "./home.css";
import { FaLinkedin, FaGoodreadsG, FaTv } from "react-icons/fa";
import { SiLetterboxd } from "react-icons/si";

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
    <MyNavBar/>
      <br/>
      <br/>
      <div id="center">
      <img className="img" src={my_picture}/>
      </div>
      <br />
      <h1>Emily Tian</h1>
      <div>Hi I'm Emily. I'm currently a master's student at the University of Sydney majoring in software engineering.👩🏻‍💻</div>
      <div>Like most people, I enjoy watching TV shows and movies in my spare time. I like reading as well.</div>
      <div>To see what I've been watching or reading lately, you can add me on Letterboxd or Goodreads!</div>
      <div>Feel free to reach out to me for work opportunities on Linkedin 😃</div>
      <br />
      <a href="https://www.linkedin.com/in/shyi-yan-tian-7479b1207/">
      <FaLinkedin />
      </a>
      <a href="https://www.goodreads.com/user/show/26531134-emily">
      <FaGoodreadsG />
      </a>
      <a href="https://letterboxd.com/shyiyan/">
      <SiLetterboxd />
      </a>
    </>
  );
}

export default HomeScreen;
