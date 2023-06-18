// Static component after clicking on any movie card -> static page
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { add_Movie, del_Movie } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const g = "<";
function Static() {
  const notify = () => {
    toast.success("Successfully Added to Favourite!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const dispatch = useDispatch();
  let { state } = useLocation();
  var count = 0;
  const p = useSelector((state) => state.addMovie);
  for (let i = 0; i < p.length; i++) {
    if (state.id == p[i].id) {
      count = 1;
      break;
    }
  }

  var a = "";
  if (count === 1) {
    a = "Remove from Favourite";
  } else {
    a = "Add to favourite";
  }
  const [text, setText] = useState(a);
  const [display, setDisplay] = useState("none");

  function clickHandler() {
    if (count === 0) {
      setText("Remove from Favourite");
      dispatch(add_Movie(state));
      notify();
    } else {
      setText("Add to favourite");
      dispatch(del_Movie(state));
    }
  }

  function mouseoverHandler() {
    setDisplay("inline");
  }
  function mouseoutHandler() {
    setDisplay("none");
  }

  console.log(count);
  var Url = state.backgroundImg;
  return (
    <div className="static">
      <div className="landing_header">
        <img src="./images/logo.svg" alt="logo" />
        <p>Login</p>
      </div>
      <img src={Url} alt="h" className="s_img" />

      <a href="home">
        <p className="static_go_home">{g} Go Home</p>
      </a>
      <p className="text" style={{ display: display }}>
        {text}
      </p>

      <div className="static_content">
        <p className="title_">{state.title}</p>
        <div style={{ display: "flex" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              width: "7rem",
              height: "2.5rem",
              marginRight: "10px",
              borderRadius: "5Px",
              border: "none",
            }}
          >
            <img
              src="./images/black.png"
              alt="button"
              style={{ height: "25px", width: "25px", marginRight: "7px" }}
            />
            <p>Play</p>
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              width: "7rem",
              height: "2.5rem",
              color: "white",
            }}
            className="sb"
          >
            <img
              src="./images/white.png"
              alt="button"
              style={{ height: "25px", width: "25px" }}
            />
            <p>Trailer</p>
          </button>
          <div
            className="add"
            onClick={clickHandler}
            onMouseEnter={mouseoverHandler}
            onMouseLeave={mouseoutHandler}
          >
            <img src="./images/watchlist-icon.svg" alt="watch" />
          </div>
        </div>

        <p className="title">{state.subTitle}</p>
        <p className="description">{state.description}</p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
export default Static;
