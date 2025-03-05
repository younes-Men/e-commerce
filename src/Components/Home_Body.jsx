import React from "react"
import { ArrowRight, Star, TruckIcon, RefreshCcw, Shield, ChevronRight } from "lucide-react"
import image1 from "../images/image1.jpg"
import hero4 from "../images/hero4.png"

const Body_Home = () => {
  // Sample product data
  const newArrivals = [
    {
      id: 1,
      name: "Oversized Cotton Shirt",
      price: 49.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "Women",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Slim Fit Denim Jeans",
      price: 59.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "Men",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Floral Summer Dress",
      price: 79.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "Women",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Casual Linen Blazer",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "Men",
      rating: 4.6,
    },
  ]

  // Categories
  const categories = [
    {
      name: "Women's Collection",
      image: {hero4},
      link: "/women",
    },
    {
      name: "Men's Collection",
      image: {hero4},
      link: "/men",
    },
    {
      name: "Accessories",
      image: {hero4},
      link: "/accessories",
    },
  ]

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={16} className="fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="relative">
          <Star size={16} className="text-gray-300" />
          <Star size={16} className="absolute top-0 left-0 w-1/2 overflow-hidden fill-yellow-400 text-yellow-400" />
        </span>,
      )
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-gray-300" />)
    }

    return stars
  }

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src= {image1}
          alt="Fashion collection"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                New Season Arrivals
              </h1>
              <p className="text-xl text-white/90 md:text-2xl">Discover the latest trends in fashion</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a
                  href="/women"
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

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Shop by Category</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Explore our wide range of collections designed for every occasion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src= {hero4}
                  alt={category.name}
                  className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
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

      {/* New Arrivals Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">New Arrivals</h2>
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
                    <a
                      href={`/product/${product.id}`}
                      className="flex w-full items-center justify-center rounded-md bg-black py-3 text-sm font-medium text-white"
                    >
                      Quick View
                    </a>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <h3 className="mt-1 text-lg font-medium">{product.name}</h3>
                  <div className="mt-1 flex items-center">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
                  </div>
                  <p className="mt-2 font-medium">${product.price.toFixed(2)}</p>
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

      {/* Special Offer Banner */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                Limited Time Offer
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Summer Sale Up to 50% Off</h2>
              <p className="text-lg text-white/80">
                Refresh your wardrobe with our summer collection. Limited time offer, shop now!
              </p>
              <a
                href="/sale"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Shop the Sale
              </a>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=800&width=600"
                alt="Summer sale"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-3">
                <TruckIcon size={24} />
              </div>
              <h3 className="text-lg font-medium">Free Shipping</h3>
              <p className="mt-2 text-sm text-gray-600">On all orders over $50</p>
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
              <p className="mt-2 text-sm text-gray-600">Satisfaction guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      

      
      
    </main>
  )
}

export default Body_Home

