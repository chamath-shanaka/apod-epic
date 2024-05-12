import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function LoginModal() {
  const { login, register, isLoading, isAuthenticated } = useKindeAuth();

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleRegister = async () => {
    try {
      await register();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Log In</h2>
          <div className="flex min-w-full min-h-full justify-items-center justify-center">
            <span>
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className="ml-2 btn btn-primary"
              >
                {isLoading ? "Loading..." : "Log in"}
              </button>
              <button
                onClick={handleRegister}
                disabled={isLoading}
                className="ml-2 btn btn-primary"
              >
                {isLoading ? "Loading..." : "Register"}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
