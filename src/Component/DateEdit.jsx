import React, { useState } from "react";

const DateEdit = ({ formattedDate, setFormattedDate }) => {
  

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateObj = new Date(dateString);
    
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const handleChange = (event) => {
    setFormattedDate(formatDate(event.target.value));
  };

  return (
    <div>
      <input 
        type="date"
        className="w-full" 
        onChange={handleChange} />
    </div>
  );
};

export default DateEdit;
