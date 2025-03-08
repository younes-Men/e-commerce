import React from "react";
import { useState } from "react";
import {
  ArrowRight,
  Star,
  TruckIcon,
  RefreshCcw,
  Shield,
  ChevronRight,
  X,
  Heart,
  ShoppingBag,
} from "lucide-react";
import image1 from "../images/image1.jpg";
import womens from "../images/womens.jpg";
import mens from "../images/mens.jpg";
import accessoire from "../images/accessoire.jpg";
import f6 from "../images/f6.jpg";
import n4 from "../images/n4.jpg";
import n5 from "../images/n5.jpg";
import n7 from "../images/n7.jpg";

const Body_Home = () => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);

  const newArrivals = [
    {
      id: 1,
      name: "Oversized Cotton Shirt",
      price: 49.99,
      image: f6,
      category: "Women",
      rating: 4.5,
      description:
        "A comfortable oversized cotton shirt perfect for casual outings. Made with 100% premium cotton for breathability and durability.",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "White", "Blue", "Red"],
      inStock: true,
    },
    {
      id: 2,
      name: "Slim Fit Denim Jeans",
      price: 59.99,
      image: n4,
      category: "Men",
      rating: 4.8,
      description:
        "Classic slim fit denim jeans with a modern touch. Features a comfortable stretch fabric that moves with you throughout the day.",
      sizes: ["28", "30", "32", "34", "36"],
      colors: ["Blue", "Black", "Gray"],
      inStock: true,
    },
    {
      id: 3,
      name: "Floral Summer Dress",
      price: 79.99,
      image: n5,
      category: "Women",
      rating: 4.7,
      description:
        "A beautiful floral summer dress perfect for warm days. The lightweight fabric keeps you cool while the elegant design turns heads.",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Floral Print", "Blue", "Pink"],
      inStock: true,
    },
    {
      id: 4,
      name: "Casual Linen Blazer",
      price: 89.99,
      image: n7,
      category: "Men",
      rating: 4.6,
      description:
        "A sophisticated linen blazer that combines comfort and style. Perfect for both casual and semi-formal occasions.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Beige", "Navy", "Gray"],
      inStock: false,
    },
  ];

  const categories = [
    {
      name: "Women's Collection",
      image: womens,
      link: "/Women_product",
    },
    {
      name: "Men's Collection",
      image: mens,
      link: "/Men_product",
    },
    {
      name: "Accessories",
      image: accessoire,
      link: "/AccessoireMen_product",
    },
  ];

  const openQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
    setSelectedSize(product.sizes[0]);
    setSelectedColor(product.colors[0]);
    setQuantity(1);

    document.body.style.overflow = "hidden";
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedProduct(null);

    document.body.style.overflow = "auto";
  };

  const addToCart = () => {
    alert(
      `Added to cart: ${selectedProduct.name} - Size: ${selectedSize}, Color: ${selectedColor}, Quantity: ${quantity}`
    );
    closeQuickView();
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          size={16}
          className="fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="relative">
          <Star size={16} className="text-gray-300" />
          <Star
            size={16}
            className="absolute top-0 left-0 w-1/2 overflow-hidden fill-yellow-400 text-yellow-400"
          />
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={16} className="text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <main className="w-full">
      {isQuickViewOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <button
              onClick={closeQuickView}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 z-10"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="relative">
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  className="w-full h-auto object-cover rounded-md"
                />

                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart size={20} />
                </button>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-500">
                  {selectedProduct.category}
                </span>
                <h2 className="text-2xl font-bold mt-1">
                  {selectedProduct.name}
                </h2>

                <div className="flex items-center mt-2">
                  <div className="flex">
                    {renderStars(selectedProduct.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    ({selectedProduct.rating})
                  </span>
                </div>

                <p className="text-xl font-semibold mt-2">
                  ${selectedProduct.price.toFixed(2)}
                </p>

                <p className="mt-4 text-gray-600">
                  {selectedProduct.description}
                </p>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((size) => (
                      <button
                        key={size}
                        className={`px-3 py-1 border rounded-md ${
                          selectedSize === size
                            ? "border-black bg-black text-white"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.colors.map((color) => (
                      <button
                        key={color}
                        className={`px-3 py-1 border rounded-md ${
                          selectedColor === color
                            ? "border-black bg-black text-white"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">Quantity</h3>
                  <div className="flex items-center">
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <div className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300">
                      {quantity}
                    </div>
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                      onClick={() => handleQuantityChange(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    className="flex-1 bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-black/90 flex items-center justify-center"
                    onClick={addToCart}
                    disabled={!selectedProduct.inStock}
                  >
                    <ShoppingBag size={18} className="mr-2" />
                    {selectedProduct.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                  <button className="flex-1 border border-black py-3 px-6 rounded-md font-medium hover:bg-gray-50">
                    View Full Details
                  </button>
                </div>

                <div className="mt-6 flex items-center text-sm text-gray-500">
                  <TruckIcon size={16} className="mr-2" />
                  <span>Free shipping on orders over $50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src={image1 || "/placeholder.svg"}
          alt="Fashion collection"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                New Season Arrivals
              </h1>
              <p className="text-xl text-white/90 md:text-2xl">
                Discover the latest trends in fashion
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a
                  href="/Women"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Shop Women
                </a>
                <a
                  href="/men"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Shop Men
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Shop by Category
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Explore our wide range of collections designed for every occasion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                  <a
                    href={category.link}
                    className="mt-4 inline-flex items-center rounded-md bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90"
                  >
                    Shop Now <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              New Arrivals
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Check out our latest products and stay ahead of the fashion curve
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"></div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                      onClick={() => openQuickView(product)}
                      className="flex w-full items-center justify-center rounded-md bg-black py-3 text-sm font-medium text-white hover:bg-black/90"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    {product.category}
                  </span>
                  <h3 className="mt-1 text-lg font-medium">{product.name}</h3>
                  <div className="mt-1 flex items-center">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="ml-2 text-sm text-gray-500">
                      ({product.rating})
                    </span>
                  </div>
                  <p className="mt-2 font-medium">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/new-arrivals"
              className="inline-flex items-center rounded-md border border-black bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-50"
            >
              View All Products <ChevronRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-3">
                <TruckIcon size={24} />
              </div>
              <h3 className="text-lg font-medium">Free Shipping</h3>
              <p className="mt-2 text-sm text-gray-600">
                On all orders over $50
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-3">
                <RefreshCcw size={24} />
              </div>
              <h3 className="text-lg font-medium">Easy Returns</h3>
              <p className="mt-2 text-sm text-gray-600">30-day return policy</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-3">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-medium">Secure Payment</h3>
              <p className="mt-2 text-sm text-gray-600">100% secure checkout</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Quality Guarantee</h3>
              <p className="mt-2 text-sm text-gray-600">
                Satisfaction guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body_Home;
