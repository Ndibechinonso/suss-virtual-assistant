import React from "react";
import "./Services.css";
import Card from "../Card";

const Services = () => {

  return (
    <div className="services">
      <h2>SERVICES</h2>
      <div>
        Are you a small business owner or entrepreneur trying to find more time
        in your day. Let me focus on the small tasks so you can focus on the big
        ones. I benefit companies looking for a reliable and knowledgable
        resource for their business needs.
      </div>
      <div className="serviceCards">
    
       <Card
        header="VIRTUAL ASSISTANT"
        text="I take the time consuming tasks off of your plate so you can focus on what’s important in your business. We've got sofwares that will help us achieve this."
      />
      <Card
        header="HUMAN RESOURCES MANAGEMENT"
        text="I help manage people effectively in an organization and also help to design policies to maximize employee performance in service of an employer's strategic objectives ."
      />
      </div>

    </div>
  );
};

export default Services;
