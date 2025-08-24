"use client";
import styles from "./Login.module.css";
import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password validation requirements
  // Min 8 chars, at least 1 uppercase, 1 number, 1 special char
  const validateEmail = (value) => {
    if (!value) {
      setEmailError("Email is required.");
      setEmailValid(false);
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address.");
      setEmailValid(false);
    } else {
      setEmailError("");
      setEmailValid(true);
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError("Password is required.");
      setPasswordValid(false);
    } else if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      setPasswordValid(false);
    } else if (!/[A-Z]/.test(value)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      setPasswordValid(false);
    } else if (!/[0-9]/.test(value)) {
      setPasswordError("Password must contain at least one number.");
      setPasswordValid(false);
    } else if (!/[^A-Za-z0-9]/.test(value)) {
      setPasswordError("Password must contain at least one special character.");
      setPasswordValid(false);
    } else {
      setPasswordError("");
      setPasswordValid(true);
    }
  };

  // Validate on input changes
  useEffect(() => {
    validateEmail(email);
  }, [email]);

  useEffect(() => {
    validatePassword(password);
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);

    if (emailValid && passwordValid) {
      setIsSubmitting(true);
      setLoginError("");
      // Use NextAuth signIn
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      setIsSubmitting(false);

      if (res?.error) {
        setLoginError("Invalid email or password.");
      } else {
        // Optionally redirect or show success
        window.location.href = "/";
      }
    }
  };

  return (
    <div className={styles.loginContainer}>
      <section className={styles.loginImageSection} aria-hidden="true" />
      <section className={styles.loginFormSection} aria-label="Login Form">
        <form className={styles.loginForm} onSubmit={handleSubmit} noValidate>
          <h1 className={styles.loginTitle}>Login</h1>

          {loginError && (
            <span className={styles.errorMessage} role="alert" aria-live="assertive">
              {loginError}
            </span>
          )}

          <div className={styles.inputGroup}>
            <input
              id="email"
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.input} ${emailError ? styles.inputError : ""}`}
              aria-describedby="email-error"
              aria-invalid={!!emailError}
              required
              autoComplete="email"
            />
            <label htmlFor="email">Email</label>
            {emailError && (
              <span
                id="email-error"
                className={styles.errorMessage}
                role="alert"
                aria-live="assertive"
              >
                {emailError}
              </span>
            )}
          </div>

          <div className={styles.inputGroup} style={{ position: "relative" }}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${styles.input} ${passwordError ? styles.inputError : ""}`}
              aria-describedby="password-error"
              aria-invalid={!!passwordError}
              required
              autoComplete="current-password"
            />
            <label htmlFor="password">Password</label>
            <button
              type="button"
              className={styles.togglePasswordBtn}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={0}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {passwordError && (
              <span
                id="password-error"
                className={styles.errorMessage}
                role="alert"
                aria-live="assertive"
              >
                {passwordError}
              </span>
            )}
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={!emailValid || !passwordValid || isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </section>
    </div>
  );
}