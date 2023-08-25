"use client";

import React from "react";
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
    name: Yup.string().required("Name is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
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
              <div className="flex flex-col border p-4 my-4">
                <label htmlFor="password">Full name:</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                />
              </div>
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red", fontSize: "10px" }}
              />
              <div className="flex flex-col border p-4 my-4">
                <label htmlFor="email">Email Address:</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@example.com"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", fontSize: "10px" }}
              />
              <div className="flex flex-col border p-4 my-4">
                <label htmlFor="password">Password:</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="**********"
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
                    name="rememberMe"
                    style={{ marginRight: "8px" }}
                  />
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>
              <button
                type="submit"
                className="py-4 px-8 w-full self-center bg-[#1A6177] text-white font-bold my-6 uppercase">
                Create an account
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
