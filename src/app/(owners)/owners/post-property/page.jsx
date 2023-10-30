"use client";

import Link from "next/link";
import { OwnerContext } from "@/context/ownerContext";
import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SideNavWrapper from "@/components/hoc/sideNav";

export const errorHandler = (fieldName) => {
  return (
    <ErrorMessage
      name={fieldName}
      component="div"
      className="text-red-600 mt-2 text-[14px] font-[600]"
    />
  );
};

const OwnerDashboard = () => {
  const { owner } = useContext(OwnerContext);
  console.log(owner);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    purpose: Yup.string().required("Purpose is required"),
    typeOfProperty: Yup.string().required("Type of Property is required"),
    bedRoom: Yup.string().required("Bed Room is required"),
    bathRoom: Yup.string().required("Bath Room is required"),
    toilets: Yup.string().required("Toilet is required"),
    higherInstitution: Yup.string().required("Higher Institution is required"),
    state: Yup.string().required("State is required"),
    locality: Yup.string().required("Locality is required"),
    location: Yup.string().required("Location is required"),
    price: Yup.string().required("Price is required"),
    description: Yup.string().required("Description is required"),
  });

  const initialValues = {
    title: "",
    purpose: "",
    typeOfProperty: "",
    bedRoom: "",
    bathRoom: "",
    toilets: "",
    higherInstitution: "",
    state: "",
    locality: "",
    location: "",
    price: "",
    image: "",
    description: "",
  };
  const handleSubmit = async (values) => {
    console.log(values);
  };
  return (
    <SideNavWrapper>
      <div className="bg-[#D9D9D9] px-5 py-2 text-center text-[13px]">
        Compliance updates: All agents are required to submit means of identity
        for verification purpose.{" "}
        <Link href="/" className="text-blue-700">
          Upload your documents
        </Link>{" "}
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col w-full text-[#757575]">
          <div className="p-[2rem]">
            <div className="flex justify-between items-center ">
              <div>
                <h1 className="text-[25px] font-[600] ">Post a Property</h1>
                <p>Put your property in front of millions of home-seekers</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-[3rem] py-[0.7rem] rounded-md bg-black text-white text-[18px] font-bold"
                >
                  POST
                </button>
              </div>
            </div>

            <div className="p-5 bg-[#D9D9D9] mt-5 ">
              <div className="flex flex-col p-4 my-4">
                <label className="mb-3 text-black text-[18px] font-[600]">
                  Title
                </label>
                <Field
                  className="py-3 px-4 ring-0 outline-none "
                  type="text"
                  id="title"
                  name="title"
                />
                {errorHandler("title")}
              </div>
              <div className="grid grid-cols-2 mt-[-2rem] ">
                <div className="flex flex-col p-4 my-4">
                  <label className="mb-3 text-black text-[18px] font-[600]">
                    Purpose
                  </label>
                  <Field
                    className="py-3 px-4 ring-0 outline-none"
                    type="text"
                    name="purpose"
                  />
                  {errorHandler("purpose")}
                </div>
                <div className="flex flex-col p-4 my-4">
                  <label className="mb-3 text-black text-[18px] font-[600] ">
                    Type of Property
                  </label>
                  <Field
                    name="typeOfProperty"
                    className="ring-0"
                    render={({ field }) => (
                      <select
                        className="p-3 ring-0"
                        {...field}
                        placeholder="typeOfProperty"
                      >
                        <option>--select--</option>
                        <option>Property One</option>
                      </select>
                    )}
                  />
                  {errorHandler("typeOfProperty")}
                </div>
              </div>
              <div className="grid grid-cols-3 mt-[-2rem] ">
                <div className="flex flex-col p-4 my-4">
                  <label className="mb-3 text-black text-[18px] font-[600] ">
                    Bedrooms
                  </label>
                  <Field
                    name="bedRoom"
                    className="ring-0"
                    render={({ field }) => (
                      <select
                        className="p-3 ring-0"
                        {...field}
                        placeholder="bedRoom"
                      >
                        <option>--select--</option>
                        <option>One Bedroom</option>
                      </select>
                    )}
                  />
                  {errorHandler("bedRoom")}
                </div>
                <div className="flex flex-col p-4 my-4">
                  <label className="mb-3 text-black text-[18px] font-[600] ">
                    Bathrooms
                  </label>
                  <Field
                    name="bathRoom"
                    className="ring-0"
                    render={({ field }) => (
                      <select className="p-3 ring-0" {...field}>
                        <option>--select--</option>
                        <option>One Bathroom</option>
                      </select>
                    )}
                  />
                  {errorHandler("bathRoom")}
                </div>
                <div className="flex flex-col p-4 my-4">
                  <label className="mb-3 text-black text-[18px] font-[600] ">
                    Toilets
                  </label>
                  <Field
                    name="toilets"
                    className="ring-0"
                    render={({ field }) => (
                      <select className="p-3 ring-0" {...field}>
                        <option>--select--</option>
                        <option>One Toilet</option>
                      </select>
                    )}
                  />
                  {errorHandler("toilets")}
                </div>
              </div>
            </div>
            <div className="px-5 py-10 bg-[#D9D9D9] mt-5">
              <div className="grid grid-cols-3 mt-[-2rem] ">
                <div className="flex flex-col p-4 my-4">
                  <label className="mb-3 text-black text-[18px] font-[600] ">
                    Higher Institution
                  </label>
                  <Field
                    className="py-3 px-4 ring-0 outline-none"
                    type="text"
                    name="higherInstitution"
                  />
                  {errorHandler("higherInstitution")}
                </div>
                <div className="flex flex-col p-4 my-4">
                  <label className="mb-3 text-black text-[18px] font-[600] ">
                    State
                  </label>
                  <Field
                    name="state"
                    className="ring-0"
                    render={({ field }) => (
                      <select className="p-3 ring-0" {...field}>
                        <option>--select--</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                      </select>
                    )}
                  />
                  {errorHandler("state")}
                </div>
                <div className="flex flex-col p-4 my-4">
                  <label className="mb-3 text-black text-[18px] font-[600] ">
                    Locality
                  </label>
                  <Field
                    className="py-3 px-4 outline-none ring-0"
                    type="text"
                    name="locality"
                  />
                  {errorHandler("locality")}
                </div>
              </div>
              <div className="flex flex-col p-4 mb-2">
                <label className="mb-3 text-black text-[18px] font-[600] ">
                  Street/Estate/Neighborhood
                </label>
                <Field
                  className="py-3 px-4 outline-none ring-0"
                  type="text"
                  name="location"
                />
                {errorHandler("location")}
              </div>
              <div className="grid grid-cols-2 mt-[-2rem] ">
                <div className="flex flex-col p-4 my-4">
                  <label className="mb-3 text-black text-[18px] font-[600] ">
                    Price
                  </label>
                  <Field
                    className="py-3 px-4 outline-none ring-0"
                    type="text"
                    name="price"
                  />
                  {errorHandler("price")}
                </div>
                <div className="flex flex-col p-4 my-4">
                  <label className="mb-3 text-black text-[18px] font-[600] ">
                    Append
                  </label>
                  <Field
                    className="py-3 px-4 "
                    type="file"
                    id="file"
                    name="image"
                  />
                </div>
              </div>
            </div>
            <div className="p-5 bg-[#D9D9D9] mt-5 ">
              <div className="flex flex-col p-4 my-4">
                <label className="mb-3 text-black text-[18px] font-[600] ">
                  Description
                </label>
                <Field
                  name="description"
                  render={({ field }) => (
                    <textarea
                      name="description"
                      className="p-3 outline-none"
                      rows={10}
                      {...field}
                      placeholder="Description"
                    />
                  )}
                />
                {errorHandler("description")}
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </SideNavWrapper>
  );
};

export default OwnerDashboard;
