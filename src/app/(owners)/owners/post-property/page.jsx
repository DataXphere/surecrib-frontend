"use client";

import Link from "next/link";
import { OwnerContext } from "@/context/ownerContext";
import { useContext, useState, useEffect } from "react";
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
    images: [],
    description: "",
  };

  const [selectedState, setSelectedState] = useState("");
  const [institutions, setInstitutions] = useState([]);
  const [allStates, setAllStates] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(
          "https://surecrib.onrender.com/api/institutions/states"
        );
        const data = await response.json();
        setAllStates(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStates();
  }, []);

  const fetchInstitution = async (selectedValue) => {
    try {
      const response = await fetch(
        `https://surecrib.onrender.com/api/institutions?state=${selectedValue}`
      );
      const data = await response.json();
      setInstitutions(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSelectState = (event) => {
    const { value } = event.target;
    setSelectedState(value);

    fetchInstitution(value);
  };

  const { owner } = useContext(OwnerContext);
  const MAX_FILE_SIZE = 3000;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    purpose: Yup.string().required("Purpose is required"),
    typeOfProperty: Yup.string().required("Type of Property is required"),
    bedRoom: Yup.string().required("Bed Room is required"),
    bathRoom: Yup.string().required("Bath Room is required"),
    toilets: Yup.string().required("Toilet is required"),
    higherInstitution: Yup.string().required("Higher Institution is required"),
    // state: Yup.string().required("State is required"),
    locality: Yup.string().required("Locality is required"),
    location: Yup.string().required("Location is required"),
    price: Yup.string().required("Price is required"),
    description: Yup.string().required("Description is required"),
    images: Yup.array()
      .min(1, "At least one image is required")
      .max(3, "Only 3 images are allowed")
      .of(
        Yup.mixed().test("fileSize", "File size is too large", (value) => {
          return value && value.size <= MAX_FILE_SIZE;
        })
      ),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("purpose", values.purpose);
      formData.append("typeOfProperty", values.typeOfProperty);
      formData.append("bedRoom", values.bedRoom);
      formData.append("bathRoom", values.bathRoom);
      formData.append("toilets", values.toilets);
      formData.append("higherInstitution", values.higherInstitution);
      formData.append("state", values.state);
      formData.append("locality", values.locality);
      formData.append("location", values.location);
      formData.append("price", values.price);
      formData.append("description", values.description);

      values.images.forEach((image, index) => {
        formData.append(`image[${index}]`, image);
      });

      const response = await fetch("https://surecrib.onrender.com/api/cribs", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.ok) {
        alert("Property Listed Successfully!");
      } else {
        alert("failed to list property");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SideNavWrapper>
      <div className="bg-[#D9D9D9] px-5 py-2 text-center text-[13px]">
        Compliance updates: All agents are required to submit means of identity
        for verification purpose.{" "}
        <Link href="#" className="text-blue-700">
          Upload your documents
        </Link>{" "}
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
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
                  className={`${
                    loading ? "bg-slate-500" : ""
                  } px-[3rem] py-[0.7rem] rounded-md bg-black text-white text-[18px] font-bold`}>
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
                        placeholder="typeOfProperty">
                        <option>--select--</option>
                        <option>Self-con</option>
                        <option>Flat</option>
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
                        placeholder="bedRoom">
                        <option>--select--</option>
                        <option>One Bedroom</option>
                        <option>Two Bedroom</option>
                        <option>Three Bedroom</option>
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
                        <option>Two Bathroom</option>
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
                        <option>Two Toilet</option>
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
                    State
                  </label>
                  <Field
                    as="select"
                    name="state"
                    className="py-3 px-4 ring-0 outline-none"
                    value={selectedState}
                    onChange={handleSelectState}>
                    <option>--select--</option>
                    {allStates
                      ? allStates.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))
                      : "loading..."}
                  </Field>
                  {errorHandler("state")}
                </div>

                <div className="flex flex-col p-4 my-4">
                  <label className="mb-3 text-black text-[18px] font-[600] ">
                    Higher Institution
                  </label>
                  <Field
                    as="select"
                    className="py-3 px-4 ring-0 outline-none"
                    name="higherInstitution">
                    <option value="">--select--</option>
                    {institutions
                      ? institutions.map((institution) => (
                          <option key={institution.id} value={institution.name}>
                            {institution.name}
                          </option>
                        ))
                      : "loading"}
                  </Field>
                  {errorHandler("higherInstitution")}
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
                    Add Property Pictures
                  </label>
                  <Field
                    className="py-3 px-4 "
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    multiple
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
