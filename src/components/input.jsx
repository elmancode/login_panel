import axios from "axios";
import React from "react";
import { useState } from "react";

const Input = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const btn = () => {
    axios
      .post("http://localhost:9000/create-data", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        setEmail("");
        setPassword("");
      });
  };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show)
  }


  return (
    <div
      className="  w-screen h-screen
    grid   place-content-center font-sans text-sm"
    >
      <div className=" grid grid-col p-20 rounded-lg  shadow-2xl ">
        <h2 className=" text-xl ">Panelə daxil olun</h2>
        <div className="flex flex-col  mt-5 ">
          <label className="" htmlFor="">
            {" "}
            Username
          </label>
          <input
            className=" border border-gray-400  h-10 w-96  mt-5 outline-0 p-5 "
            type="text"
            placeholder="example@gmail.com"
            onChange={handleChangeEmail}
            value ={email}
          />
        </div>
        <div className="flex flex-col  mt-6 ">
          <label htmlFor=""> Şifrə </label>
          <input
            className=" border border-gray-400  h-10 w-96  mt-5  outline-0 p-5 "
            type={show? "text" : "password"}
            placeholder="**********"
            onChange={handleChangePassword}
            value={password }
          />
        </div>

        <div className="flex mt-5 ">
          <input className="flex items-start" 
          type="checkbox" 
          onChange={handleShow}
           />
          <p className="ml-3">Parolu Göstər</p>
        </div>

        <button
          className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5
          cursor-pointer"
          onClick={btn}
          disabled={email.trim() == "" || password.trim() == "" ? true : false}
        >
          Daxil ol
        </button>
      </div>
    </div>
  );
};

export default Input;
