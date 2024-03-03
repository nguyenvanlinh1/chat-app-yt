import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="lable-text">Male</span>
          <input type="checkbox" className="checkbox border-yellow-300 checkbox-primary"></input>
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-yellow-300 checkbox-primary"></input>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
