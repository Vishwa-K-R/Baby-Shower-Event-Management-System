
import React, { useState } from 'react';
import '../assets/css/rsvp.css';
import NavBar from './Navbar';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guestCount, setGuestCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your RSVP submission logic here
    console.log('RSVP Submitted:', { name, email, guestCount });
  };

  return (
    <>
    <NavBar/>
    <div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
        <center><h1>RSVP Form</h1></center>
    <form >
      <div class="flex flex-wrap formbold--mx-3">
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5">
            <label for="fName" class="formbold-form-label"> First Name </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              class="formbold-form-input"
              required
            />
          </div>
        </div>
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5">
            <label for="lName" class="formbold-form-label"> Last Name </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              class="formbold-form-input"
              required
            />
          </div>
        </div>
      </div>

      <div class="formbold-mb-5">
        <label for="guest" class="formbold-form-label">
          How many guest are you bringing?
        </label>
        <input
          type="number"
          name="guest"
          id="guest"
          placeholder="Enter number of guest"
          class="formbold-form-input"
          required
        />
      </div>

      <div class="flex flex-wrap formbold--mx-3">
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5 w-full">
            <label for="date" class="formbold-form-label"> Date </label>
            <input
              type="date"
              name="date"
              id="date"
              class="formbold-form-input"
              required
            />
          </div>
        </div>
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5">
            <label for="time" class="formbold-form-label"> Time </label>
            <input
              type="time"
              name="time"
              id="time"
              class="formbold-form-input"
            />
          </div>
        </div>
      </div>
        <h6>Are you coming</h6>
      <div class="flex formbold-mb-5">
        <div class="flex">
          <input
            type="radio"
            name="radio1"
            id="radioButton1"
            class="formbold-radio"
          />
          <label for="radioButton1" class="formbold-radio-label"> Yes </label>
        </div>

        <div class="flex">
          <input
            type="radio"
            name="radio1"
            id="radioButton2"
            class="formbold-radio"
          />
          <label for="radioButton2" class="formbold-radio-label"> No </label>
        </div>
      </div>

      <div>
        <button class="formbold-btn">Submit</button>
      </div>
    </form>
  </div>
</div>
</>

  );
};

export default RSVPForm;
