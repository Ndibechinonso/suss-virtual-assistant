import React, {useEffect} from "react";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function About(props) {

  useEffect(() => {
    AOS.init({
        duration: 1000
    })
})

  return (
    <section id="about">
      <div className="aboutContainer" data-aos="fade-up">
        <h2>ABOUT </h2>
        <p>
          I am a Virtual Assitant specializing in Administrative and Human Resource Management, and I am passionate about creating seamless solutions to the business I support.        </p>

        <p>
          I believe in providing effective services and building long last relationships with my clients.
        </p>
      </div>

      <div className="cv" data-aos="fade-right">
        <div className="bigAbout">
          Do what you do BEST and DELEGATE the rest.
        </div>
        <div>
          <p>
            Administrative Specialist - Office Manager - Operations Manager -
            Logistics Coordinator - Asst. General Manager - HR Generalist
          </p>
          <p>
            Proficient in Microsoft's and Google Full suite, HR Data Systems, and
            Accounting Systems + AP-AR-Reconciliations.
          </p>
        
          <p>
            Broad knowledge of employee relations, compensation & benefits,
            staffing, training and development.
          </p>
        </div>
       
        <div className='bigAbout2'>YOU DON'T HAVE TO DO IT ALL BY YOURSELF</div>
      </div>
    </section>
  );
}
