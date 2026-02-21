import React from "react";
import { Link } from "react-router-dom";
import BackArrow from "../../../assets/icons/back-arrow.svg?react";
import { Form, FormInput, FormButton } from "../../../components/Form";

const VerifyAccount = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="hidden lg:flex flex-col flex-1 bg-white p-8">
        <img
          src="/logo.svg"
          alt="PharmGuard Logo"
          className="w-50 h-auto mb-8"
        />
        <Link
          to="/"
          className="flex items-center gap-2 text-primary hover:underline w-fit mb-8"
        >
          <BackArrow className="w-4 h-4" />
          Back
        </Link>
        <div className="flex flex-1 items-center justify-center">
          <img
            src="/auth/verify-illustration.svg"
            alt="Verify Account Illustration"
            className="w-full max-w-2xl"
          />
        </div>
      </div>

      <div className="flex-1 bg-secondary-bg min-h-screen flex flex-col px-6 py-8 lg:px-12 lg:py-12">
        <div className="lg:hidden mb-8">
          <img
            src="/logo.svg"
            alt="PharmGuard Logo"
            className="w-40 h-auto mb-4"
          />
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-primary hover:underline w-fit"
          >
            <BackArrow className="w-4 h-4" />
            Back
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl text-primary font-bold mb-3">
                Verify Your Account
              </h2>
              <p className="text-primary-text text-lg">
                Set up your pharmacy and get started with PharmGuard
              </p>
            </div>

            <Form className="space-y-8 mb-2">
              <FormInput
                label="Email Address"
                placeholder="enter your email"
                type="email"
                name="email"
              />
              <FormInput
                label="OTP Code"
                placeholder="Enter the 4-digit code sent to your email"
                type="text"
                name="otp"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
              />
              <FormInput
                label="Password"
                placeholder="Create a strong password"
                type="password"
                name="password"
              />
              <FormInput
                label="Confirm Password"
                placeholder="Re-enter your password"
                type="password"
                name="confirmPassword"
              />

              <FormButton className="w-full mt-6 cursor-pointer">
                Verify Account
              </FormButton>
            </Form>

            <div className="text-center my-4 text-sm text-primary-text">
              Account already verified?{" "}
              <Link
                to="/auth/login"
                className="text-sm text-primary hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
