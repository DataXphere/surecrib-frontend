"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";

const OwnerActivateAccount = () => {
  const [successful, setSuccessful] = useState(true);
  const [loading, setLoading] = useState(false);
  const activateParams = useParams();
  const token = activateParams.token;
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const activateAccount = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://surecrib.onrender.com/api/owners/account-activation",
          {
            method: "POST",
            body: JSON.stringify({ token }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          onOpen();
          setLoading(false);
          setSuccessful(true);
        } else {
          setLoading(false);
          setSuccessful(false);
        }
      } catch (error) {
        setLoading(false);
        setSuccessful(false);
        console.error(error);
      }
    };

    activateAccount();
  }, [token]);

  return (
    <>
      <Modal isOpen={isOpen} size="2xl" className="h-full">
        <ModalOverlay />
        <ModalContent className="p-20 overflow-hidden rounded-2xl border-[#1A6177]">
          <ModalBody className="flex flex-col items-center mb-10 lg:mb-16">
            <p>
              Your Account has been activated! You can now Login and access your
              dashboard
            </p>
            <Link
              href="/owners/login"
              className="bg-[#1A6177] text-white py-3 px-7 rounded-lg mt-8">
              Login
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>

      {loading ? (
        <div className="shadow-xl px-5 py-6 flex flex-col m-auto w-[90%] lg:w-1/2 items-center text-center h-[100vh] my-16 ">
          <Spinner size="xl" thickness="10px" speed="0.65s" color="gray" />
          <p className="mt-8 ">
            Please hold on while we work on activating your accout. It will only
            take a while...
          </p>
        </div>
      ) : null}

      {!successful ? (
        <div className="shadow-xl px-5 py-6 flex flex-col m-auto w-[90%] lg:w-1/2 items-center text-center h-full my-16 text-red-600 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            className="bi bi-x-octagon-fill mb-6"
            viewBox="0 0 16 16">
            <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
          </svg>
          <p className="font-bold">
            Oops, something went wrong! It may be that your activation link has expired or you clicked on the wrong link.
          </p>
          <Link
            href="/owners/register"
            className="mt-6 text-white bg-[#1A6177] p-4 rounded-lg font-bold">
            Try again
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default OwnerActivateAccount;
