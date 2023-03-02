import React, { useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import MyImage from "../../assests/camera.jpg";

import "./New.scss";

const New = ({ inputs, title }) => {
  // we want to be able to show our image

  const [file, setFile] = useState("");
console.log(file);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>{title}</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : MyImage} alt="image" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  <img src={MyImage} alt="" />
                </label>
                <input type="file" style={{ display: "none" }} id="file" onChange={e=>setFile(e.target.files[0])} />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.text} placeholder={input.placeholder} />
                  </div>
                );
              })}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
