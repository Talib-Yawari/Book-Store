import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksSection from "../components/BooksSection";

const Books = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/getBooks"
        );
        setData(response.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
      <BooksSection data={data} />
    </div>
  );
};

export default Books;
