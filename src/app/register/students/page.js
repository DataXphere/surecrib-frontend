"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const StudentRegister = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    agreeTerms: Yup.boolean().oneOf(
      [true],
      "You have to agree to terms and conditions"
    ),
  });

  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "Student",
    gender: "Male",
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("https://surecrib.onrender.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Signup successful");
      } else {
        console.error("Signup failed");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }

    setLoading(false);
  };

  return (
    <>
      <section className="bg-fill flex items-center">
        <div className="w-[50%] m-auto bg-white p-12 border my-12 flex flex-col items-center">
          <h2 className="text-[#212121] text-[2rem] font-bold">
            Register on SureCrib
          </h2>
          <p className="text-[#757575]">
            Quick and easy way to find and rent accomodation
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form className="flex flex-col w-full px-4 text-[#757575]">
              <div className="flex flex-col border p-4 my-4 gap-y-2">
                <label htmlFor="password">First name:</label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  className="p-2 focus:outline-none"
                />
              </div>
              <ErrorMessage
                name="firstName"
                component="div"
                style={{ color: "red", fontSize: "10px" }}
              />
              <div className="flex flex-col border p-4 my-4 gap-y-2">
                <label htmlFor="password">Last name:</label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  className="p-2 focus:outline-none"
                />
              </div>
              <ErrorMessage
                name="lastName"
                component="div"
                style={{ color: "red", fontSize: "10px" }}
              />
              <div className="flex flex-col border p-4 my-4 gap-y-2">
                <label htmlFor="email">Email Address:</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  className="p-2 focus:outline-none"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", fontSize: "10px" }}
              />
              <div className="flex flex-col border p-4 my-4 gap-y-2">
                <label htmlFor="password">Password:</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="**********"
                  className="p-2 focus:outline-none"
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red", fontSize: "10px" }}
              />

              <div className="flex justify-between my-4">
                <label>
                  <Field
                    type="checkbox"
                    name="agreeTerms"
                    style={{ marginRight: "8px" }}
                    checked = {true}
                  />
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>
              <ErrorMessage
                name="agreeTerms"
                component="div"
                style={{ color: "red", fontSize: "10px" }}
              />
              <button
                type="submit"
                className={`${loading ? "cursor-not-allowed bg-gray-500" : ""} py-4 px-8 w-full self-center bg-[#1A6177] text-white font-bold my-6 uppercase`}>
                {loading ? "Processing..." : "Create an Account"}
              </button>
            </Form>
          </Formik>

          <p className="text-[#757575] uppercase">Or use</p>
          <div className="flex items-center gap-x-8 mt-6 mb-4">
            <button className="bg-gray-100 p-2 rounded-xl">
              <FcGoogle size={35} />
            </button>
            <button className="bg-gray-100 p-2 rounded-xl">
              <BsTwitter size={35} />
            </button>
            <button className="bg-gray-100 p-2 rounded-xl">
              <FaFacebook size={35} />
            </button>
          </div>

          <p>Already have an account?</p>
          <Link
            href="/login/students"
            className="text-[#1A6177] font-bold mt-2">
            Log in
          </Link>
        </div>
      </section>
    </>
  );
};

export default StudentRegister;
