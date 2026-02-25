import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import BackArrow from "../../../assets/icons/back-arrow.svg?react";
import { Form, FormInput, FormButton } from "../../../components/Form";
import authService from "../../../services/authService";
import toast from "react-hot-toast";
import { toastConfig } from "../../../utils/utils";

const VerifyAccount = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: searchParams.get("email") || "",
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match", toastConfig);
      return;
    }

    setIsSubmitting(true);
    try {
      await authService.setupPassword(form.email, form.otp, form.password);
      toast.success("Account verified! Please login.", toastConfig);
      navigate("/auth/verify-success");
    } catch (error) {
      console.error("Verification error:", error);
      const msg = error.response?.data?.message || "Verification failed";
      toast.error(msg, toastConfig);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOTP = async () => {
    if (!form.email) {
      return toast.error("Email is required to resend OTP", toastConfig);
    }
    try {
      await authService.forgotPassword(form.email);
      toast.success("OTP resent successfully", toastConfig);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to resend OTP",
        toastConfig,
      );
    }
  };

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

            <Form className="space-y-8 mb-2" onSubmit={handleSubmit}>
              <FormInput
                label="Email Address"
                placeholder="enter your email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <FormInput
                label="OTP Code"
                placeholder="Enter the 4-digit code sent to your email"
                type="text"
                name="otp"
                value={form.otp}
                onChange={handleChange}
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                required
              />
              <FormInput
                label="Password"
                placeholder="Create a strong password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Confirm Password"
                placeholder="Re-enter your password"
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />

              <FormButton
                className="w-full mt-6 cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Verifying..." : "Verify Account"}
              </FormButton>
            </Form>

            <div className="text-center my-4 text-sm text-primary-text">
              <button
                type="button"
                onClick={handleResendOTP}
                className="text-primary hover:underline font-medium mr-4"
              >
                Resend OTP
              </button>
              <span className="text-gray-400">|</span>
              <span className="ml-4">Account already verified? </span>
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
