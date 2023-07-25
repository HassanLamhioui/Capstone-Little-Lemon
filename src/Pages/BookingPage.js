import React from 'react';
import BookingForm from '../components/BookingForm.js';
import { useReducer } from "react";
import { fetchAPI } from "../BookingAPI.js";

const Booking = () => {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);
  return (
    <div>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
    </div>
  )
}

export default Booking