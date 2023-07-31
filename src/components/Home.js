import React, { useState } from "react";
import Mobile from "./Mobile";

const Home = (props) => {
  const [data, setData] = useState({
    element: "",
    toolText: "",
    size: "",
    padding: "",
    color: "",
    bgColor: "",
    radius: "",
    tipWidth: "",
    ArrWidth: "",
    arrHeight: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  console.log("====================================");
  console.log(data);
  console.log("====================================");

  return (
    <>
      <div className="main-frame">
        <div className="input-screen">
          <div className="screen">
            <form className="Form">
              <div className="screen-inputs">
                {" "}
                <label htmlFor="Target Element">
                  <strong>Target Element</strong>
                </label>
                <select
                  name="element"
                  id="element"
                  onChange={handleChange}
                  value={data.element}
                >
                  <option>Button 1</option>
                  <option>Button 2</option>
                  <option>Button 3</option>
                  <option>Button 4</option>
                  <option>Button 5</option>
                </select>
              </div>
              <div className="screen-inputs">
                {" "}
                <label htmlFor="Tool Tip text">
                  <strong>Tooltip text</strong>
                </label>
                <input
                  type="text"
                  name="toolText"
                  value={data.toolText}
                  onChange={handleChange}
                  placeholder="Input"
                ></input>
              </div>
              <div className="screen-inputs-col">
                {" "}
                <div className="screen-inputs">
                  <label htmlFor="Text Size">
                    <strong>Text Size</strong>
                  </label>
                  <input
                    type="text"
                    name="size"
                    value={data.size}
                    onChange={handleChange}
                    placeholder=""
                  ></input>
                </div>
                <div className="screen-inputs">
                  <label htmlFor="Padding">
                    <strong>Padding</strong>
                  </label>
                  <input
                    type="text"
                    name="padding"
                    value={data.padding}
                    onChange={handleChange}
                    placeholder=""
                  ></input>
                </div>
              </div>
              <div className="screen-inputs">
                {" "}
                <label htmlFor="Text color">
                  <strong>Text Color</strong>
                </label>
                <input
                  type="text"
                  name="color"
                  value={data.color}
                  onChange={handleChange}
                  placeholder="Input"
                ></input>
              </div>
              <div className="screen-inputs">
                {" "}
                <label htmlFor="Background Color">
                  <strong>Background Color</strong>
                </label>
                <input
                  type="text"
                  name="bgColor"
                  value={data.bgColor}
                  onChange={handleChange}
                  placeholder="Input"
                ></input>
              </div>
              <div className="screen-inputs-col">
                {" "}
                <div className="screen-inputs">
                  <label htmlFor="Corner Radius">
                    <strong>Corner Radius</strong>
                  </label>
                  <input
                    type="text"
                    name="radius"
                    value={data.radius}
                    onChange={handleChange}
                    placeholder=""
                  ></input>
                </div>
                <div className="screen-inputs">
                  <label htmlFor="Tooltip Width">
                    <strong>Tooltip Width</strong>
                  </label>
                  <input
                    type="text"
                    name="tipWidth"
                    value={data.tipWidth}
                    onChange={handleChange}
                    placeholder=""
                  ></input>
                </div>
              </div>{" "}
              <div className="screen-inputs-col">
                {" "}
                <div className="screen-inputs">
                  <label htmlFor="Arrow Width">
                    <strong>Arrow width</strong>
                  </label>
                  <input
                    type="text"
                    name="ArrWidth"
                    value={data.ArrWidth}
                    onChange={handleChange}
                    placeholder=""
                  ></input>
                </div>
                <div className="screen-inputs">
                  <label htmlFor="Arrow Height">
                    <strong>Arrow height</strong>
                  </label>
                  <input
                    type="text"
                    name="arrHeight"
                    value={data.arrHeight}
                    onChange={handleChange}
                    placeholder=""
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mobile-preview">
          <Mobile
            element={data.element}
            toolText={data.toolText}
            size={data.size}
            padding={data.padding}
            color={data.color}
            bgColor={data.bgColor}
            radius={data.radius}
            tipWidth={data.tipWidth}
            ArrWidth={data.tipWidth}
            arrHeight={data.arrHeight}
          ></Mobile>
        </div>
      </div>
    </>
  );
};

export default Home;
