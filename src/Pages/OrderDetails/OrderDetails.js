import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import "@fontsource/roboto/400.css";
import axios from "axios";

const OrderDetails = () => {
  const { orderId } = useParams();
  const URL = `https://nameless-gorge-89729.herokuapp.com${window.location.pathname}`;
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(URL);
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <Container>
      <img src={Data.imageUrl} alt=" Product" />
      <Typography>Order Id: {Data.orderId}</Typography>
      <Typography>Product Name: {Data.productname}</Typography>
      <Typography>Product Description: {Data.productDesc}</Typography>
      <Typography>Quantity: {Data.quantity}</Typography>
      <Typography>Total Price: {Data.quantity * Data.price}</Typography>
      <Typography>Issue Id: {Data.issueId}</Typography>
      <Typography>Issue Details: {Data.errorName}</Typography>
      <Typography>Issue Details: {Data.orderStatus}</Typography>
    </Container>
  );
};

export default OrderDetails;
