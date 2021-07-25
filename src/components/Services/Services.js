import React, {useEffect} from "react";
import "./Services.css";
import Card from "../Card";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

  useEffect(() => {
    AOS.init({
        duration: 1000
    })
})

  return (
    <div className="services" data-aos="fade-up">
      <h2>SERVICES</h2>
      <div>
        Are you a small business owner or entrepreneur trying to find more time
        in your day. Let me focus on the small tasks so that you can focus on the big
        ones. I benefit companies looking for a reliable and knowledgable
        resource for their business needs.
      </div>
      <div className="serviceCards" data-aos="fade-left">
    
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
