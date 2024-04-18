import * as React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = () => {
  return (
    <>
    <Layout>
      <div className="bg-[#eac69688] h-[95vh] flex justify-center items-center mt-10">
        <div className=" border-[2px] border-white flex flex-col p-3 rounded-xl">
          <h1 className="text-2xl capitalize text-[#b14822dd] font-semibold text-center">
            {" "}
            welcome back!
          </h1>
          <form className="flex flex-col gap-5 mt-7">
            <div className="email mx-9 ">
              <input
                type="text"
                className=" border border-black  px-4 w-[450px] h-[45px] rounded-md "
                placeholder="Email or Username"
              />
            </div>
            <div className="Password mx-9 relative ">
              <input
                type="text"
                className=" border border-black  px-4 h-[45px] w-[450px] rounded-md"
                placeholder="Password"
                
              />
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="password-eyes w-5 h-5 absolute top-3 right-5 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              
            </div>
          </form>
          <div className="">
            <Link to="forgot password">
              <p className="capitalize mx-9 mt-7 text-[#b14822ef] cursor-pointer ">
                forgot password?
              </p>
            </Link>
            <div className="  mt-7 mx-9 ">
              <button className="capitalize border border-transparent w-[450px] h-[45px] transition-all ease-in-out duration-500  bg-[#b14822dd] hover:bg-[#b14822b6] cursor-pointer text-white  text-xl rounded-md">
                continue
              </button>
            </div>
            <p className="flex items-center justify-center mt-7 capitalize">
              don't have an account?{" "}
              <Link to="register">
                {" "}
                <span className="text-[#b14822ef]"> sign up.</span>
              </Link>
            </p>
          </div>
          <div>
            <div className="flex w-full items-center justify-center gap-2 mt-7">
              <p className="w-[200px] border border-black"></p>
              <p className="text-[18px] uppercase">or </p>
              <p className="w-[200px] border border-black"></p>
            </div>
            <div className="  mt-7 mx-9 ">
              <button className="capitalize flex items-center justify-center gap-3 border border-transparent w-[450px] h-[45px] transition-all ease-in-out duration-500 bg-white text-[#b14822dd] hover:bg-[#b14822b6] cursor-pointer hover:text-white  text-xl rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#ffc107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                  />
                  <path
                    fill="#ff3d00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                  />
                  <path
                    fill="#4caf50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                  />
                  <path
                    fill="#1976d2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                  />
                </svg>{" "}
                sign in with google
              </button>
            </div>
            <div className="  mt-5 mx-9 ">
              <button className="capitalize flex items-center justify-center gap-3 border border-transparent w-[450px] h-[45px] transition-all ease-in-out duration-500 bg-white text-[#b14822dd] hover:bg-[#b14822b6] cursor-pointer hover:text-white  text-xl rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#1877f2"
                    d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                  />
                  <path
                    fill="#fff"
                    d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"
                  />
                </svg>
                sign in with facebook
              </button>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default Login;
