import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Welcome from "../component/Welcome.jsx";
import { getMe } from "../features/authSlice.js";
import LayoutJo from "./LayoutJo.jsx";

const Home = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isError } = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(getMe());
//   }, [dispatch]);

//   useEffect(() => {
//     if (isError) {
//       navigate("/");
//     }
//   }, [isError, navigate]);
  return (
    <LayoutJo>
      <Welcome />
    </LayoutJo>
  );
};

export default Home;
