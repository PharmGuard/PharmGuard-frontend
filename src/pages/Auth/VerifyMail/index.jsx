import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import BackArrow from "../../../assets/icons/back-arrow.svg?react";
import { Form, FormInput, FormButton } from "../../../components/Form";
import authService from "../../../services/authService";
import toast from "react-hot-toast";
import { toastConfig } from "../../../utils/utils";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: searchParams.get("email") || "",
    otp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await authService.verifyEmail(form.email, form.otp);
      toast.success("Email verified successfully!", toastConfig);
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
    <div className="flex flex-col min-h-screen px-4">
      <img src="/logo.svg" alt="PharmGuard Logo" className="w-50 h-auto my-6" />
      <div className="flex flex-col bg-white p-5">
        <Link
          to="/auth/login"
          className="flex items-center gap-2 text-lg text-primary hover:underline w-fit"
        >
          <BackArrow className="w-4 h-4" />
          Back to Login
        </Link>
        <div className="flex items-center justify-center">
          <img
            src="/auth/verify-illustration.svg"
            alt="Verify Email Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl text-primary font-bold mb-3">
              Verify Email
            </h2>
            <p className="text-primary-text text-lg">
              Enter the OTP sent to your email to verify your account.
            </p>
          </div>

          <Form className="space-y-8" onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full"
              value={form.email}
              onChange={handleChange}
              required
            />
            <FormInput
              type="text"
              name="otp"
              placeholder="Enter the 4 digit code"
              className="w-full"
              maxLength={4}
              value={form.otp}
              onChange={handleChange}
              inputMode="numeric"
              pattern="[0-9]*"
              required
            />
            <FormButton
              className="w-full mt-6 cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Verifying..." : "Verify Email"}
            </FormButton>
          </Form>

          <div className="text-center my-4 text-sm text-primary-text">
            <button
              type="button"
              onClick={handleResendOTP}
              className="text-primary hover:underline font-medium"
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
