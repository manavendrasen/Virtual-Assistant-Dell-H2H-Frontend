import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import "@fontsource/roboto/400.css";
import axios from "axios";
import Navbar from "../Admin/Components/AdminNavbar/Navbar";

const OrderDetails = () => {
  const { orderId } = useParams();
  const URL = `https://nameless-gorge-89729.herokuapp.com${window.location.pathname}`;
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(URL);
        setData(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <>
      <Navbar />
      <div className="px-24 py-4">
        <Typography variant="h5">Order Details</Typography>

        <p className="mt-6 font-semibold">Order Id: #{Data.orderId}</p>
        {Data.issueId ? (
          <p className="p-4 bg-red-200 text-red-500 my-4">
            Order Status: <b>On Hold</b> <br />
            Issue Id: {Data.issueId} - {Data.errorName} is Invalid
          </p>
        ) : (
          <p className="p-4 bg-green-100 text-green-500 my-4">
            Order Status: <b>{Data.orderStatus}</b>
          </p>
        )}

        <div className="flex gap-8 items-start justify-center">
          <div className="flex gap-8 p-6 items-start">
            <div>
              <img className="h-64" src={Data.imageUrl} alt=" Product" />
            </div>
            <div className="">
              <p className="text-xl mb-4">{Data.productname}</p>
              <Typography>Product Description: {Data.productDesc}</Typography>
              <Typography>Quantity: {Data.quantity}</Typography>
              <Typography>Total Price: {Data.quantity * Data.price}</Typography>
              <Typography>Ordered On: {Data.orderDate}</Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
