"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { Icon } from "@iconify/react";

const ProductPage = () => {
  const [visibleProducts, setVisibleProducts] = useState(25);

  const products = [
    {
      id: 1,
      imageSrc:
        "https://comicsense.b-cdn.net/wp-content/uploads/2023/08/gear-5-jersey-tee-scaled.jpg",
      title: "Product 1",
      availableSizes: ["S", "M"],
      allSizes: ["S", "M", "L", "XL"],
      price: "$20",
      showStars: false,
    },
    {
      id: 2,
      imageSrc:
        "https://comicsense.b-cdn.net/wp-content/uploads/2023/08/gear-5-jersey-tee-scaled.jpg",
      title: "Product 2",
      availableSizes: ["S", "M"],
      allSizes: ["S", "M", "L", "XL"],
      price: "$20",
      offerEndsAt: new Date("2023-08-18T23:59:59"),
      showCountdown: true,
      showStars: false,
    },
    {
      id: 3,
      imageSrc:
        "https://comicsense.b-cdn.net/wp-content/uploads/2023/08/gear-5-jersey-tee-scaled.jpg",
      title: "Product 3",
      availableSizes: ["M", "L"],
      allSizes: ["S", "M", "L", "XL"],
      price: "$20",
      starRating: 5,
      showStars: true,
    },

    // ... Add more products
  ];

  const toggleSize = (productIndex, size) => {
    // Toggle the size selection for the specified product
    const updatedProducts = [...products];
    const product = updatedProducts[productIndex];
    const index = product.availableSizes.indexOf(size);

    if (index !== -1) {
      product.availableSizes.splice(index, 1);
    } else {
      product.availableSizes.push(size);
    }

    return updatedProducts;
  };

  const calculateRemainingTime = (endTime) => {
    const now = new Date().getTime();
    return Math.max(0, endTime - now);
  };

  const formatRemainingTime = (remainingTime) => {
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return `${days} D ${hours} H ${minutes} M ${seconds} S`;
  };

  const [remainingTimes, setRemainingTimes] = useState({});

  useEffect(() => {
    const updateRemainingTimes = () => {
      const updatedRemainingTimes = {};
      products.forEach((product) => {
        if (product.showCountdown) {
          updatedRemainingTimes[product.id] = calculateRemainingTime(
            product.offerEndsAt
          );
        }
      });
      setRemainingTimes(updatedRemainingTimes);
    };

    updateRemainingTimes();
    const intervalId = setInterval(updateRemainingTimes, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [products]);

  const loadMoreProducts = () => {
    setVisibleProducts(visibleProducts + 25);
  };

  return (
    <>
      <Header />
      <div className="p-16">
        <h1 className="text-2xl font-semibold mb-4">Products</h1>
        <div className="grid grid-cols-5 gap-4">
          {products.slice(0, visibleProducts).map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 p-4 text-center relative"
            >
              <span className="absolute top-0 right-0 bg-white rounded-full p-1 cursor-pointer hover:text-red-500 transition-opacity duration-300">
                <Icon icon="uil:heart" />
              </span>
              <a href="#">
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="mx-auto mb-2 cursor-pointer"
                />
              </a>
              <a href="#" className="text-black hover:underline">
                {product.title}
              </a>
              {product.showCountdown && (
                <div className="mt-2">
                  <p className="text-gray-500">Offer ends in:</p>
                  <p className="text-blue-500">
                    {formatRemainingTime(remainingTimes[product.id])}
                  </p>
                </div>
              )}
              {product.showStars && (
                <div className="flex items-center justify-center space-x-1 mt-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Icon
                      key={rating}
                      icon="ri:star-fill"
                      className={
                        rating <= product.starRating
                          ? "text-red-500"
                          : "text-gray-400"
                      }
                    />
                  ))}
                </div>
              )}
              <div className="flex justify-center mt-2">
                {product.allSizes.map((size) => (
                  <span
                    key={size}
                    className={`bg-gray-200 p-1 px-2 rounded mr-2 ${
                      product.availableSizes.includes(size)
                        ? " text-black"
                        : "text-gray-400"
                    }`}
                  >
                    {size}
                  </span>
                ))}
              </div>
              <p className="mt-2">{product.price}</p>
            </div>
          ))}
        </div>
        {visibleProducts < products.length && (
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={loadMoreProducts}
            >
              Load More
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
