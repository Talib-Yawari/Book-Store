//src/components/BooksSection.jsx
import React from "react";

const BooksSection = ({ data, onUpdate, onDelete }) => {
  const handleUpdate = (id) => {
    // Call the onUpdate function with the book ID
    onUpdate && onUpdate(id);
  };

  const handleDelete = (id) => {
    // Call the onDelete function with the book ID
    onDelete && onDelete(id);
  };

  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap py-4">
      {data &&
        data.map((item) => (
          <div
            key={item._id}
            style={{
              width: "300px",
              height: "450px",
              backgroundColor: "",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid  white",
            }}
          >
            <div>
              <img
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "10px",
                }}
                className="img-fluid"
                src={item.image}
                alt="/"
              />
              {""}
            </div>
            <h6 style={{ fontSize: "20px" }} className="px-2 my-1 text-white">
              {item.bookname.slice(0, 20)}...
            </h6>
            <b
              style={{ fontSize: "30px", color: "teal" }}
              className="mb-2 px-2"
            >
              {item.price}
            </b>
            <div className="d-flex justify-content-around align-items-center">
              <button
                onClick={() => handleUpdate(item._id)}
                className="btn btn-primary"
              >
                UPDATE
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-danger"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;
