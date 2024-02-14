// BookEventForm.jsx
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import '../assets/css/event.css';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import axios from 'axios';

const BookEventForm = () => {
  const [formData, setFormData] = useState({

    eventName: '',
    applicantName: '',
    applicantAddress: '',
    applicantMobile: '',
    applicantEmail: '',
    eventDate: '',
    eventTime: '',
    eventMenuId: '',
    foodType: '',
    vegQuantity: '',
    nonVegQuantity: '',
    addOns: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const notifySuccess = () => toast.success('Booking Successful');
  const notifyError = () => toast.error('Error Booking Event');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextPage = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevPage = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to your backend API
    axios.post('http://localhost:8080/bookevent', formData)
      .then(response => {
        console.log('Booking successful:', response.data);
        notifySuccess();
        // Optionally, you can redirect to a confirmation page or perform other actions
      })
      .catch(error => {
        console.error('Error booking event:', error);
        notifyError();
      });
  };
  return (
    <>
    <NavBar/>
    <br></br>
    <div className="book-event-form">
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="form-page">
            <h2>BOOK EVENT</h2>
            <label>
              Event Name:
              <input className='event-name'
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                placeholder='Enter Event Name'
                required
              />
            </label>
            <label>
              Applicant Name:
              <input className='user-name'
                type="text"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleChange}
                placeholder='Enter Applicant Name'
                required
              />
            </label>
            <label>
              Address:
              <input
                type="email"
                name="applicantAddress"
                value={formData.applicantAddress}
                onChange={handleChange}
                placeholder='Enter Applicant Address'
                required
              />
            </label>
            <label>
              Phone No:
              <input
                type="number"
                name="applicantMobile"
                value={formData.applicantMobile}
                onChange={handleChange}
                placeholder='Enter Phone No'
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="applicantEmail"
                value={formData.applicantEmail}
                onChange={handleChange}
                placeholder='Enter Email'
                required
              />
            </label>
            {/* <label>
              Event Address:
              <input
                type="text"
                name="eventAddress"
                value={formData.eventAddress}
                onChange={handleChange}
                placeholder='Enter Event Address'
                required
              />
            </label> */}
            <label>
              Event Date:
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Event Time:
              <input
                type="time"
                name="eventTime"
                value={formData.eventTime}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Menu Id:
              <input
                type="number"
                name="totalCount"
                value={formData.totalCount}
                onChange={handleChange}
                placeholder='Enter Menu Id'
                required
              />
            </label>
            <button type="button" onClick={nextPage}>
              Next
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="form-page">
            <h2>Food Details</h2>
            <Link to={"/menu"}><button>View Menu</button></Link>
            <label>
               Food Type:
                <select
                   name="foodType"
                   value={formData.foodType}
                   onChange={handleChange}
                   required
                >
                    <option value="">Select Food Type</option>
                    <option value="Veg">VEG</option>
                    <option value="Non-Veg">NON-VEG</option>
                    <option value="Both">Both</option>
                </select>
            </label>
            <label>
              Quantity of Veg items:
              <input
                type="number"
                name="vegQuantity"
                value={formData.vegQuantity}
                onChange={handleChange}
                placeholder='Enter Quantity of Veg items'
                required
              />
            </label>
            <label>
              Quantity of Non-Veg items:
              <input
                type="number"
                name="nonVegQuantity"
                value={formData.nonVegQuantity}
                onChange={handleChange}
                placeholder='Enter Quantity of Non Veg items'
                required
              />
            </label>
            <label>
               ADD-ON:
                <select
                   name="addOns"
                   value={formData.addOns}
                   onChange={handleChange}
                   
                >
                    <option value="">Select Add-Ons</option>
                    <option value="Magic Show">Magic Show</option>
                    <option value="DJ Party">DJ Party</option>
                    <option value="Mehandi">Mehandi</option>
                    <option value="Game Show">Game Show</option>
                </select>
            </label>
            <button type="button" onClick={prevPage}>
              Previous
            </button>
            <button type="button" onClick={nextPage}>
              Next
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="form-page">
            <h2>Confirmation</h2>
            <p>Review your information before submitting:</p>
            <div>
              <strong>Event Name:</strong> {formData.eventName}
            </div>
            <div>
              <strong>Applicant Name:</strong> {formData.applicantName}
            </div>
            <div>
              <strong>Applicant Address:</strong> {formData.applicantAddress}
            </div>
            <div>
              <strong>Mobile No:</strong> {formData.applicantMobile}
            </div>
            <div>
              <strong>Email:</strong> {formData.applicantEmail}
            </div>
            {/* <div>
              <strong>Event Address:</strong> {formData.eventAddress}
            </div> */}
            <div>
              <strong>Event Date:</strong> {formData.eventDate}
            </div>
            <div>
              <strong>Event Time</strong> {formData.eventTime}
            </div>
            <div>
              <strong>Menu Id:</strong> {formData.eventMenuId}
            </div>
            <div>
              <strong>Food Type:</strong> {formData.foodType}
            </div>
            <div>
              <strong>Quantity of Veg Items:</strong> {formData.vegQuantity}
            </div>
            <div>
              <strong>Quantity of Non-Veg Items:</strong> {formData.nonVegQuantity}
            </div>
            <div>
              <strong>Add Ons:</strong> {formData.addOns}
            </div>
            <button type="button" onClick={prevPage}>
              Previous
            </button>
            <button type="submit" onClick={handleSubmit}>Book the Event</button>
            <ToastContainer  position="top-center"
  reverseOrder={false}
/>
          </div>
        )}
      </form>
    </div>
    <br></br>
    <footer>
        <p>&copy; 2024 TinyToes. All rights reserved.</p>
      </footer>
    </>
  );
};

export default BookEventForm;
