import React, { useState } from "react";
import "../styles/BookingForm.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object({
  firstName: yup.string().required("First name is a required field!"),
  lastName: yup.string().required("Last name is a required field!"),
  email: yup
    .string()
    .required("Email is a required field!")
    .email("Email is not valid!"),
  telephone: yup
    .string()
    .required("Telephone is a required field!")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(12, "too long"),
  guests: yup
    .number()
    .min(1, "There must be at least 1 guest!")
    .required("Please specify the number of guests per table!"),
  date: yup.string().required("Please select date and time!"),
});

function Form() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const formSubmit = (data) => {
    console.table(data);
    toggleModal(); // Show the modal on successful form submission
    reset(); // Reset the form after submission
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(formSubmit)} className="booking-form">
        <fieldset>
          <div className="field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              {...register("firstName")}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            <span className="error-message" role="alert">
              {errors.firstName?.message}
            </span>
          </div>
          <div className="field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              {...register("lastName")}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            <span className="error-message" role="alert">
              {errors.lastName?.message}
            </span>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="text@example.com"
              name="email"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
            <span className="error-message" role="alert">
              {errors.email?.message}
            </span>
          </div>
          <div className="field">
            <label htmlFor="telephone">Telephone (XXX-XXX-XXXX)</label>
            <input
              type="tel"
              placeholder="Phone number"
              name="telephone"
              {...register("telephone")}
              aria-invalid={errors.telephone ? "true" : "false"}
            />
            <span className="error-message" role="alert">
              {errors.telephone?.message}
            </span>
          </div>
          <div className="field-occasion">
            <label htmlFor="occasion">Occasion (optional)</label>
            <input type="text" name="occasion" list="occasionList" placeholder="Select occasion"/>
            <datalist id="occasionList">
              <option value="Birthday"/>
              <option value="Engagement"/>
              <option value="Anniversary"/>
            </datalist>
          </div>
          <div className="field guest">
            <label htmlFor="guests">Guests</label>
            <input
              type="number"
              placeholder="2"
              name="guests"
              {...register("guests")}
              aria-invalid={errors.guests ? "true" : "false"}
            />
            <span className="error-message" role="alert">
              {errors.guests?.message}
            </span>
          </div>
          <div className="field">
            <label htmlFor="date">Date & Time</label>
            <input
              type="datetime-local"
              name="date"
              {...register("date")}
              aria-invalid={errors.date ? "true" : "false"}
            />
            <span className="error-message" role="alert">
              {errors.date?.message}
            </span>
          </div>
          <div className="reserve-btn">
            <input type="submit" value="Reserve"/>
          </div>
        </fieldset>
      </form>

      {/* Modal for confirmation */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Booking Confirmation</h2>
            <h3>
              Your booking has been confirmed! Check your email for details.
            </h3>
            <h4>
              Welcome aboard! If there's anything you need, just give us a
              shout.
            </h4>
            <button className="close-btn" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
