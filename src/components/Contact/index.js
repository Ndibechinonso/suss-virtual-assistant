import React, { useState } from 'react';
import './Contact.css'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios'


export default function Contact(props) {


    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitAlert() {
        setTimeout(() => {
            setIsSubmitted(false)
        }, 4000);
    }

    const SignupForm = () => {
        const { handleSubmit, setFieldValue, values, errors, resetForm } = useFormik({
            initialValues: {
                name: '',
                email: '',
                feedback: ''
            },
            validationSchema: Yup.object({
                name: Yup.string().required("* Please enter a name")
                , email: Yup.string().email().required("* Please enter a valid email account")
                , feedback: Yup.string().required("* Please enter your feedback")
            })
            ,
            onSubmit: values => {
                axios.post('https://nonsoportfolioserver.herokuapp.com', { name: values.name, email: values.email, feedback: values.feedback })
                    .then(response => {
                        setIsSubmitted(true)
                        resetForm({ values: '' })
                        submitAlert()
                    })
                    .catch(error => {
                        const errorMsg = error.message
                        console.log(errorMsg, "errorMsg")
                    })
            },
        });

        return (
            <div >
                <form onSubmit={handleSubmit}>
                    <div className='centerDiv'> <h2>CONTACT</h2></div>
                    <h5> Hi there. How Can I help you excel in your business?</h5>
                    <div className='inputDiv'>
                        <div data-aos="flip-left">   <div className='inputGroup'>
                            {errors.name ? <div className='error'>{errors.name}</div> : null}
                            <input
                                className='userInfo'
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                onChange={e => setFieldValue("name", e.target.value)}
                                value={values.name}
                            /><br />
                        </div>
                        </div>

                        <div data-aos="flip-right">  <div className='inputGroup'>
                            {errors.email ? <div className='error'>{errors.email}</div> : null}
                            <input
                                className='userInfo'
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                onChange={e => setFieldValue("email", e.target.value)}
                                value={values.email}
                            /><br />
                        </div>
                        </div>

                        <div data-aos="flip-left">    <div className='inputGroup'>
                            {errors.feedback ? <div className='error'>{errors.feedback}</div> : null}
                            <textarea
                                className='userInfo'
                                id="feedback"
                                name="feedback"
                                type="text"
                                placeholder="Your Message"
                                onChange={e => setFieldValue("feedback", e.target.value)}
                                value={values.feedback}
                            /> <br />
                        </div>
                        </div>
                        {isSubmitted ? <div className='confirmationDiv'><p>Your message was sent successfully. Thanks!</p></div> : null}
                        <div className='submitButtonDiv'> <button className='feedbackButton' type='submit' >SUBMIT</button></div>
                    </div>
                </form>
            </div>);
    };
    return (
        <div className='contact' id='contact'>
            <div className='formDiv'>
                {SignupForm()}
            </div>
        </div>
    )
}