import React from "react";
import { Link } from "react-router-dom";
import BackArrow from "../../../assets/icons/back-arrow.svg?react";
import { Form, FormButton } from "../../../components/Form";

const VerifySuccess = () => {
  return (
    <div className="flex flex-col min-h-screen px-4">
      <img src="/logo.svg" alt="PharmGuard Logo" className="w-50 h-auto my-8" />
      <div className="flex flex-col bg-white p-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg text-primary hover:underline w-fit mb-8"
        >
          <BackArrow className="w-4 h-4" />
          Back
        </Link>
        <div className="flex items-center justify-center">
              <img
                src="/auth/verified.svg"
                alt="Verify Success Illustration"
                className="w-full max-w-xl"
                />
          </div>
      </div>



      <div className="flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl text-primary font-bold mb-3">
                Account Verified
              </h2>
              <p className="text-primary-text text-lg">
                Your account has been successfully verified, you can log in now
              </p>
            </div>

            <Form className="space-y-8 mb-2">
              <FormButton className="w-full mt-6 cursor-pointer">
                Log In
              </FormButton>
            </Form>
          </div>
      </div>
    </div>
  );
};

export default VerifySuccess;
