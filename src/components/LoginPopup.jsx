import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");

  return (
    <div className="absolute z-[30] bg-[#00000090] inset-0 flex items-center justify-center">
      <div className="bg-white rounded-lg">
        <form className="flex flex-col w-[350px] p-[2rem]">
          <div className="flex justify-between text-center">
            <h2 className="font-extrabold text-[2rem]">{currState}</h2>
            <RxCross2
              className="cursor-pointer my-3 text-[1rem]"
              onClick={() => setShowLogin(false)}
            />
          </div>
          <div className="mt-[1rem] flex flex-col space-y-3">
            {currState === "Login" ? (
              <></>
            ) : (
              <input
                className="border-2 p-1"
                placeholder="Your name"
                required
              />
            )}
            <input className="border-2 p-1" placeholder="Your Email" required />
            <input className="border-2 p-1" placeholder="Password" required />
          </div>
          <button className="mt-[1rem] text-white rounded-lg bg-orange-500 p-2">
            {currState}
          </button>
          <div className="mt-[2rem] flex justify-start space-x-2">
            <input className="-mt-6" type="checkBox" />
            <p className="text-[#747474]">
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>
          <div className="mt-[1rem]">
            {currState === "Login" ? (
              <p className="text-[#747474]">
                Create a new account?{" "}
                <span
                  className="cursor-pointer text-orange-600"
                  onClick={() => setCurrState("Sign up")}
                >
                  Clich here
                </span>
              </p>
            ) : (
              <p className="text-[#747474]">
                Already have an account?{" "}
                <span
                  className="cursor-pointer text-orange-600"
                  onClick={() => setCurrState("Login")}
                >
                  Login here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
