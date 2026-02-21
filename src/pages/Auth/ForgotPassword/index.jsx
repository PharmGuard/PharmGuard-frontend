import React from "react";
import { Link } from "react-router-dom";
import BackArrow from "../../../assets/icons/back-arrow.svg?react";
import { Form,FormInput, FormButton } from "../../../components/Form";

const ForgotPassword = () => {
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
            src="/auth/forgot-password.svg"
            alt="Forgot Password Illustration"
            className="w-full max-w-xl"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl text-primary font-bold mb-3">
              Forgot Password ?
            </h2>
            <p className="text-primary-text text-lg">
              We've sent a password reset link to your email address.
            </p>
          </div>

          <Form className="space-y-8 mb-2">
            <FormInput 
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full"
            />
            <FormButton className="w-full mt-6 cursor-pointer">
              Log In
            </FormButton>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
