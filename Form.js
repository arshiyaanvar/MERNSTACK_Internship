import React, { useState } from "react";

function Form() {
  // Define the fields dynamically using an object
  const fields = {
    roll: "Roll Number",
    name: "Name",
    gender: "Gender",
    city: "City",
    phone: "Phone",
  };

  // Initialize formData state
  const [formData, setFormData] = useState(
    Object.keys(fields).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
  );

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Data Submitted: " + JSON.stringify(formData));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dynamic Student Form</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(fields).map((key) => (
          <div key={key} style={{ marginBottom: "15px" }}>
            <label>
              {fields[key]}:
              {key === "gender" ? (
                <select
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <input
                  type={key === "phone" ? "tel" : "text"}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  required
                />
              )}
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
