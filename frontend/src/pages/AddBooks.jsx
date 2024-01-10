//frontend/src/pages/AddBooks.jsx
import React, { useState } from "react";
import axios from "axios";

const AddBooks = () => {
  const [Data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/add", Data)
      .then((res) => alert(res.data.message));
    setData({
      bookname: "",
      author: "",
      description: "",
      price: "",
      image: "",
    });
  };
  console.log(Data);
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container p-4">
        <div className="mb-3">
          <label htmlFor="BookName" className="form-label text-white">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="BookName"
            placeholder="Enter Book Name"
            name="bookname"
            onChange={change}
            value={Data.bookname}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Author" className="form-label text-white">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="Author"
            placeholder="Enter The Author Name"
            name="author"
            onChange={change}
            value={Data.author}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Description" className="form-label text-white">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="Description"
            placeholder="Enter The Description of The Book"
            name="description"
            onChange={change}
            value={Data.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Image" className="form-label text-white">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="Image"
            placeholder="Enter The URL of the Image"
            name="image"
            onChange={change}
            value={Data.image}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Price" className="form-label text-white">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="Price"
            placeholder="Enter The Price"
            name="price"
            onChange={change}
            value={Data.price}
          />
        </div>
        <button className="btn btn-success" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBooks;
