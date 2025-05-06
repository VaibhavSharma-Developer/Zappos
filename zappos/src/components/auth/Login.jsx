import React from "react";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    console.log(e, "event");
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("data submitted")
  };
  return (
    <>
      <div className="parent flex flex-col justify-center border-2 p-1 w-96 mx-auto py-2 mt-10">
        <form onSubmit={handleSubmit} className=" mx-auto">
          <h2 className="text-2xl font-semibold mt-3">Create account</h2>
          <div className="mt-5">
            <label className="text-md " htmlFor="Name">
              Your Name
            </label>
          </div>
          <div>
            <input
              name="name"
              type="text"
              placeholder="First and Last Name"
              value={formData.name}
              onChange={handleChange}
              className="border-2 w-80 py-2 text-sm p-2 rounded-sm mb-3"
            />
          </div>
          <div>
            <label className="text-md " htmlFor="Email">
              Email
            </label>
          </div>
          <div>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="abc12@gmail.com"
              value={formData.email}
              className="border-2 w-80 py-2 text-sm p-2 rounded-sm mb-3"
            />
          </div>
          <div>
            <label className="text-md " htmlFor="Password">
              Password
            </label>
          </div>
          <div>
            <input
              type="text"
              name="pass"
              onChange={handleChange}
              placeholder="Atleast 6 character"
              value={formData.pass}
              className="border-2 w-80 py-2 text-sm p-2 rounded-sm mb-3"
            />
          </div>
          <div className="flex items-center mb-3">
            <p className="text-xs">
              <i className="fa-regular fa-info mr-2"></i>Passwords must be at
              least 6 characters.
            </p>
          </div>
          {/* <div>
            <label className="text-md " htmlFor="Password">
              Re-enter Password
            </label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Atleast 6 character"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="border-2 w-80 py-2 text-sm p-2 rounded-sm mb-3"
            />
          </div> */}
          {/* <button className="text-sm text-center bg-blue-950 text-white w-80 py-2 rounded-sm mb-3  hover:bg-blue-900">
            Create your Zappos account
          </button>
          <p className="text-xs w-80">
            Need additional help? Don't worry! You can reach us via phone, text,
            or live chat. See here for contact detail
          </p>
          <hr className=" my-3" />
          <p className="text-xs mb-3">
            Already have an account?{" "}
            <span className="underline cursor-pointer hover:text-blue-800 mb-3">
              Sign in
            </span>
          </p> */}
          <button type="submit" >Submit</button>
        </form>
      </div>
    </>
  );
}
