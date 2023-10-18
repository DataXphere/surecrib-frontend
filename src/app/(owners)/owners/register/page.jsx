"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
// import { BsTwitter } from "react-icons/bs";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const SUCCESS_MESSAGE = `A confirmation link was sent to your email address. Kindly click on
it to continue.`;

const OwnerRegister = () => {
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    confirmEmail: Yup.string().oneOf(
      [Yup.ref("email"), null],
      "Emails must match"
    ),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    priPhone: Yup.string().required("Primary Phone number is required"),
    secPhone: Yup.string().required("Secondary Phone number is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    agreeTerms: Yup.boolean().oneOf(
      [true],
      "You have to agree to terms and conditions"
    ),
  });

  const initialValues = {
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    priPhone: "",
    secPhone: "",
    address: "",
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values) => {
    setLoading(true);

    const payload = {
      username: values.username,
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      priPhone: values.priPhone,
      secPhone: values.secPhone,
      address: values.address,
    };
    try {
      const response = await fetch(
        "https://surecrib.onrender.com/api/agents/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (response.ok) {
        onOpen();
      } else {
        setMessage(data.message);
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
      <Modal isOpen={isOpen} size="2xl">
        <ModalOverlay />
        <ModalContent className="p-20 overflow-hidden rounded-2xl">
          <ModalBody className="flex flex-col items-center mb-10 lg:mb-16">
            <p>{SUCCESS_MESSAGE}</p>
          </ModalBody>
          <div className="grid mx-auto md:w-[80%]">
            <button variant="primary" className="w-full" onClick={onClose}>
              Ok
            </button>
          </div>
        </ModalContent>
      </Modal>

      <section className="bg-fill flex items-center">
        <div className="w-[50%] m-auto bg-white p-12 border my-12 flex flex-col items-center rounded-lg shadow-xl">
          <h2 className="text-[#212121] text-[2rem] font-bold capitalize">
            Create an account to continue
          </h2>
          <p className="text-[#757575] mb-8 font-semibold">
            Property Owners Registration
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form className="flex flex-col text-[#757575]">
              <div className="grid lg:grid-cols-2 gap-x-8">
                <div className="flex flex-col p-2 my-2 gap-y-2">
                  <label htmlFor="username">Username:</label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="john123"
                    className="p-2 focus:outline-none border rounded-lg"
                  />
                </div>
                <ErrorMessage
                  name="username"
                  component="div"
                  style={{ color: "red", fontSize: "10px" }}
                />
                <div className="flex flex-col p-2 my-2 gap-y-2">
                  <label htmlFor="firstName">First name:</label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className="p-2 focus:outline-none border rounded-lg"
                  />
                </div>
                <ErrorMessage
                  name="firstName"
                  component="div"
                  style={{ color: "red", fontSize: "10px" }}
                />
                <div className="flex flex-col p-2 my-2 gap-y-2">
                  <label htmlFor="lastName">Last Name:</label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className="p-2 focus:outline-none border rounded-lg"
                  />
                </div>
                <ErrorMessage
                  name="lastName"
                  component="div"
                  style={{ color: "red", fontSize: "10px" }}
                />
                <div className="flex flex-col p-2 my-2 gap-y-2">
                  <label htmlFor="lastName">Adress:</label>
                  <Field
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Ikeja, Lagos"
                    className="p-2 focus:outline-none border rounded-lg"
                  />
                </div>
                <ErrorMessage
                  name="address"
                  component="div"
                  style={{ color: "red", fontSize: "10px" }}
                />
                <div className="flex flex-col p-2 my-2 gap-y-2">
                  <label htmlFor="phone">Primary Phone Number:</label>
                  <Field
                    type="text"
                    id="priPhone"
                    name="priPhone"
                    placeholder="(123) 456-7890"
                    className="p-2 focus:outline-none border rounded-lg"
                  />
                </div>
                <ErrorMessage
                  name="priPhone"
                  component="div"
                  style={{ color: "red", fontSize: "10px" }}
                />
                <div className="flex flex-col p-2 my-2 gap-y-2">
                  <label htmlFor="phone">Secondary Phone Number:</label>
                  <Field
                    type="text"
                    id="secPhone"
                    name="secPhone"
                    placeholder="(123) 456-7890"
                    className="p-2 focus:outline-none border rounded-lg"
                  />
                </div>
                <ErrorMessage
                  name="secPhone"
                  component="div"
                  style={{ color: "red", fontSize: "10px" }}
                />
                <div className="flex flex-col p-2 my-2 gap-y-2">
                  <label htmlFor="email">Email Address:</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    className="p-2 focus:outline-none border rounded-lg"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red", fontSize: "10px" }}
                />
                <div className="flex flex-col p-2 my-2 gap-y-2">
                  <label htmlFor="confirmEmail">Confirm Email Address:</label>
                  <Field
                    type="email"
                    id="confirmEmail"
                    name="confirmEmail"
                    placeholder="johndoe@example.com"
                    className="p-2 focus:outline-none border rounded-lg"
                  />
                </div>
                <ErrorMessage
                  name="confirmEmail"
                  component="div"
                  style={{ color: "red", fontSize: "10px" }}
                />
                <div className="flex flex-col p-2 my-2 gap-y-2">
                  <label htmlFor="password">Password:</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="**********"
                    className="p-2 focus:outline-none border rounded-lg"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: "red", fontSize: "10px" }}
                />

                <div className="flex flex-col p-2 my-2 gap-y-2">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="**********"
                    className="p-2 focus:outline-none border rounded-lg"
                  />
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  style={{ color: "red", fontSize: "10px" }}
                />
              </div>
              <div className="flex justify-between my-4">
                <label>
                  <Field
                    type="checkbox"
                    name="agreeTerms"
                    style={{ marginRight: "8px" }}
                    checked={true}
                  />
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>
              <ErrorMessage
                name="agreeTerms"
                component="div"
                style={{ color: "red", fontSize: "10px" }}
              />

              {message && (
                <div className=" text-red-700 px-4 py-3 rounded relative font-bold">
                  {message}
                </div>
              )}
              <button
                type="submit"
                className={`${
                  loading ? "cursor-not-allowed bg-gray-500" : ""
                } py-4 px-8 w-full self-center bg-[#1A6177] text-white font-bold my-6 uppercase`}>
                {loading ? "Processing..." : "Register"}
              </button>
            </Form>
          </Formik>

          {/* <p className="text-[#757575] uppercase">Or use</p>
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
          </div> */}

          <p>Already have an account?</p>
          <Link
            href="/owners/login"
            className="text-[#1A6177] font-bold mt-2">
            Log in
          </Link>
        </div>
      </section>
    </>
  );
};

export default OwnerRegister;
