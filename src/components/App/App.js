import { useEffect, useReducer, useState } from "react";
import { Button } from "flowbite-react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import Landing from "./Landing/Landing";
import Shop from "./Shop/Shop";
import Fashions from "./Fashions/Fashions";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.jsonbin.io/v3/b/65ebf6aa266cfc3fde95c612",
        {
          headers: {
            "X-Master-Key":
              "$2a$10$/WY6dLNJGYHLgZabFS1RfOig.lNHhWU1gRMT530MoEQ5.tYjIWvIK",
          },
        }
      );
      setProducts(response.data.record);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white max-w-screen-xl mx-auto min-h-screen flex justify-between flex-col">
        <BrowserRouter>
          <Menu />
          <main className="my-8">
            <div className="container mx-auto px-6">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                  path="/Shop"
                  element={<Shop products={products.Fashions} />}
                />
                <Route
                  path="/Fashions"
                  element={<Fashions products={products.Shop} />}
                />
              </Routes>
            </div>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
