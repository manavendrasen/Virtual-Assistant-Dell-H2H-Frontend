import React from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { orderId } = useParams();
  return <div>hi,{orderId}</div>;
};

export default OrderDetails;
