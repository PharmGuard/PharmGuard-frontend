import React from "react";
import { Link } from "react-router-dom";
import BackArrow from "../../../assets/icons/back-arrow.svg?react";
import { Form, FormInput, FormButton } from "../../../components/Form";

const ResetPassword = () => {
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
            src="/auth/password-reset.svg"
            alt="Reset Password Illustration"
            className="w-full max-w-xl"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl text-primary font-bold mb-3">
              Reset Password
            </h2>
            <p className="text-primary-text text-lg">
              Enter a new password for your account
            </p>
          </div>

          
          <Form className="space-y-8 mb-2">
            <FormInput
              type="number"
              name="otp"
              placeholder="Enter the 4 digit code sent to your email"
              className="w-full"
              max-length={4}
            />
            <FormInput
              type="password"
              name="password"
              placeholder="Enter New Password"
              className="w-full"
            />
            <FormInput
              type="password"
              name="confirm-password"
              placeholder="Confirm New Password"
              className="w-full"
            />
            <FormButton className="w-full mt-6 cursor-pointer">
              Reset Password
            </FormButton>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
