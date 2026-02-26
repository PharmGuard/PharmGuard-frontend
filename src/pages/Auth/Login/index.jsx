import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import BackArrow from "../../../assets/icons/back-arrow.svg?react";
import { Form, FormInput, FormButton } from "../../../components/Form";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const data = await login(formData.email.trim(), formData.password);

      // Redirect based on role
      if (data.user.role === "admin") {
        navigate("/dashboard");
      } else if (data.user.role === "pharmacist") {
        navigate("/pharmacist-dashboard");
      } else if (data.user.role === "storekeeper") {
        navigate("/storekeeper-dashboard");
      }
    } catch (error) {
      console.error(
        "Login failed. Server response:",
        error.response?.data || error,
      );
      const message =
        error.response?.data?.message || "Login failed. Please try again.";
      setErrors({ general: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side - Illustration (Hidden on mobile, only shows on desktop) */}
      <div className="hidden lg:flex flex-col flex-1 bg-white p-8">
        {/* Logo */}
        <img
          src="/logo.svg"
          alt="PharmGuard Logo"
          className="w-50 h-auto mb-8"
        />

        {/* Back Button */}
        <Link
          to="/"
          className="flex items-center gap-2 text-primary hover:underline w-fit mb-8"
        >
          <BackArrow className="w-4 h-4" />
          Back
        </Link>

        {/* Illustration */}
        <div className="flex flex-1 items-center justify-center">
          <img
            src="/auth/login-illustration.svg"
            alt="Login Illustration"
            className="w-full max-w-2xl object-contain"
          />
        </div>
      </div>

      {/* Right Side - Form (Full screen on mobile, half on desktop) */}
      <div className="flex-1 bg-secondary-bg min-h-screen flex flex-col px-6 py-8 lg:px-12 lg:py-12">
        {/* Mobile Logo & Back - Only show on mobile */}
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

        {/* Form Container - Centered */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl text-primary font-bold mb-3">
                Welcome Back!
              </h2>
              <p className="text-primary-text text-lg">
                Log in to continue managing your pharmacy
              </p>
            </div>

            {/* General Error */}
            {errors.general && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{errors.general}</p>
              </div>
            )}

            {/* Form */}
            <Form onSubmit={handleSubmit}>
              <FormInput
                label="Email"
                placeholder="Enter your email"
                type="email"
                name="email"
                className="mb-8"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <FormInput
                label="Password"
                placeholder="Enter your password"
                type="password"
                name="password"
                className="mb-2"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />

              {/* Forgot Password */}
              <div className="text-left mb-8">
                <Link
                  to="/auth/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <FormButton
                loading={loading}
                className="w-full mt-6 cursor-pointer"
              >
                Log In
              </FormButton>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
