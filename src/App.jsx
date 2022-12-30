import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Email_Regex_Validation,
  Password_Regex_Validation,
  Phone_Regex_Validation,
} from "./lib";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({firstName:"", lastName:"", phone:"", email: "", password:"", message:""})

    const handleChange = (event) => {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [event.target.name]: event.target.Value,
        };
      });
    };
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form className="form-item" onSubmit={handleSubmit(onSubmit)}>
        <h1> Form Validation with React Hook Form</h1>
        <section className="form-flex">
          <div className="form-flex-1">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="txt-field"
              id="first_name"
              onChange={handleChange}
              defaultValue={formData.firstName}
              {...register("firstName", { required: true, minLength: 3 })}
            />
            {errors.firstName && (
              <p className="error">Minimum of 3 characters</p>
            )}
          </div>

          <div className="form-flex-1">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              className="txt-field"
              id="last_name"
              onChange={handleChange}
              defaultValue={formData.lastName}
              {...register("lastName", { required: true, minLength: 3 })}
            />
            {errors.lastName && (
              <p className="error">Minimum of 3 characters</p>
            )}
          </div>
        </section>

        <section className="form-flex-1">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="+234"
            className="txt-field"
            id="phone"
            onChange={handleChange}
            defaultValue={formData.phone}
            {...register("phone", {
              required: true,
              pattern: Phone_Regex_Validation,
            })}
          />
          {errors.phone && <p className="error">Not a valid Phone Number</p>}
        </section>

        <section className="form-flex-1">
          <label className="form-label">Email Address</label>
          <input
            type="text"
            name="email"
            placeholder="yourname@gmail.com"
            className="email-field"
            id="email"
            onChange={handleChange}
            defaultValue={formData.email}
            {...register("email", {
              required: true,
              pattern: Email_Regex_Validation,
            })}
          />
          {errors.email && <p className="error">Not a valid email format</p>}
        </section>

        <section className="form-flex-1">
          <label className="form-label">Password</label>
          <input
            type="text"
            name="password"
            placeholder="********"
            className="email-field"
            id="phone"
            onChange={handleChange}
            defaultValue={formData.password}
            {...register("password", {
              required: true,
              pattern: Password_Regex_Validation,
            })}
          />
          {errors.password && (
            <p className="error">
              Password must contain at least a digit, special symbol, Uppercase,
              Lowercase and 8-10 characters long.
            </p>
          )}
        </section>

        <section className="form-flex-1">
          <label className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            className="message-field"
            placeholder="Send me a message and I will reply you as soon as possible..."
            onChange={handleChange}
            defaultValue={formData.message}
            {...register("message", { required: true, minLength: 10 })}
          ></textarea>
          {errors.message && <p className="error">Characters too short</p>}
        </section>

        <section className="form-flex-1">
          <div className="check-box-input">
            <input
              type="checkbox"
              className="check-box"
              name="checkbox"
              id="checkbox"
              {...register("checkbox", { required: true })}
            />
            <label className="form-label check-box-label">
              You agree to providing your data to Divine Edwin, who may contact
              you.
            </label>
          </div>
          {errors.checkbox && <p className="error">Please Tick</p>}
        </section>

        <section>
          <button
            type="submit"
            className={
              Object.keys(errors).length === 0 ? "form-btn-1" : "form-btn"
            }
            id="submit_btn"
          >
            Send message
          </button>
        </section>
      </form>
    </>
  );
};

export default App;
