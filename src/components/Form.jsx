import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setEmail,
  setMessage,
  setPhoneNumber,
  setAddress,
  setuniversity,
  submitForm,
} from "../features/formSlice";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email, message, phoneNumber, address, university } = useSelector(
    (state) => state.form
  );

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") dispatch(setName(value));
    if (id === "phoneNumber") dispatch(setPhoneNumber(value));
    if (id === "email") dispatch(setEmail(value));
    if (id === "message") dispatch(setMessage(value));
    if (id === "address") dispatch(setAddress(value)); 
    if (id === "university") dispatch(setuniversity(value));

    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name (should contain only alphabets)
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name should contain only alphabets.";
    }

    // Validate phone number
    if (!/^\d+$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must contain only numeric characters.";
    }

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is not valid.";
    }

    // Validate message (cannot be empty)
    if (message.trim() === "") {
      newErrors.message = "Message cannot be empty.";
    }

    // Validate address (cannot be empty)
    if (address.trim() === "") {
      newErrors.address = "Address cannot be empty.";
    }

    // Validate university (cannot be empty)
    if (university.trim() === "") {
      newErrors.university = "university cannot be empty.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(submitForm());
      navigate("/submitted");
    }
  };

  return (
    <div className="container">
      <form className="responsive-form" onSubmit={handleSubmit}>
        <h1>Form</h1>
        <FormField
          id="name"
          label="Name"
          value={name}
          onChange={handleInputChange}
          error={errors.name}
        />
        <FormField
          id="phoneNumber"
          label="Phone Number"
          type="text"
          value={phoneNumber}
          onChange={handleInputChange}
          error={errors.phoneNumber}
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={handleInputChange}
          error={errors.email}
        />
        <FormField
          id="address"
          label="Address"
          type="text"
          value={address}
          onChange={handleInputChange}
          error={errors.address}
        />
        <FormField
          id="university"
          label="University"
          type="text"
          value={university}
          onChange={handleInputChange}
          error={errors.university}
        />
        <FormField
          id="message"
          label="Message"
          type="textarea"
          value={message}
          onChange={handleInputChange}
          rows="4"
          error={errors.message}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
