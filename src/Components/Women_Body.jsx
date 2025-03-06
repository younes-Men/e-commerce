import React from "react"
import { useState, useMemo } from "react"
import { Star, Heart, Filter, ShoppingBag } from "lucide-react"
import womenHeader from "../images/womenHeader.jpg"

const Women_Body = () => {
  // State for filters and sorting
  const [selectedCategory, setSelectedCategory] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [cart, setCart] = useState([])
  const [showCartNotification, setShowCartNotification] = useState(false)
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1,
      name: "Floral Summer Dress",
      price: 79.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n4.jpg-G2QKAVCXGF85456czOXorQ4IBAX31j.jpeg",
      category: "Dresses",
      rating: 4.7,
      isNew: true,
      dateAdded: "2024-03-01",
    },
    {
      id: 2,
      name: "Casual Linen Blouse",
      price: 49.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n5.jpg-ykK2HxnXbHnoWdMd2prXYmgsegmDyF.jpeg",
      category: "Tops",
      rating: 4.5,
      isNew: true,
      dateAdded: "2024-03-02",
    },
    {
      id: 3,
      name: "High-Waisted Jeans",
      price: 69.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n7.jpg-YGcDyxnOSRjr0Ty9whiJoOHNtgDAdT.jpeg",
      category: "Bottoms",
      rating: 4.8,
      isNew: false,
      dateAdded: "2024-02-28",
    },
    {
      id: 4,
      name: "Oversized Cardigan",
      price: 59.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f6.jpg-zvEHIeHP5xp1MHxxsB30pAK4YCpsI8.jpeg",
      category: "Tops",
      rating: 4.6,
      isNew: false,
      dateAdded: "2024-02-25",
    },
  ])

  // Categories data
  const categories = [
    {
      name: "Dresses",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/womens.jpg-0PE0yYlnyvd3tRFkNM9hlie1kdNV2q.jpeg",
      link: "/women/dresses",
    },
    {
      name: "Tops",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n5.jpg-ykK2HxnXbHnoWdMd2prXYmgsegmDyF.jpeg",
      link: "/women/tops",
    },
    {
      name: "Bottoms",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f6.jpg-zvEHIeHP5xp1MHxxsB30pAK4YCpsI8.jpeg",
      link: "/women/bottoms",
    },
    {
      name: "Accessories",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accessoire.jpg-jyYv5kdRSR7O0HnMiHNApM8Xm7n7eo.jpeg",
      link: "/women/accessories",
    },
  ]

  // Function to add product to cart
  const addToCart = (product) => {
    setCart([...cart, product])
    setShowCartNotification(true)
    setTimeout(() => {
      setShowCartNotification(false)
    }, 3000)
  }

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let products = [...featuredProducts]

    // Apply category filter
    if (selectedCategory) {
      products = products.filter((product) => product.category === selectedCategory)
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low-high":
        products.sort((a, b) => a.price - b.price)
        break
      case "price-high-low":
        products.sort((a, b) => b.price - a.price)
        break
      case "newest":
        products.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        break
      case "bestselling":
        products.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return products
  }, [selectedCategory, sortBy, featuredProducts])

  // Render star ratings
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
      {/* Cart Notification */}
      {showCartNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center">
          <ShoppingBag size={16} className="mr-2" />
          Item added to cart!
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src={womenHeader}
          alt="Fashion collection"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Women's Collection
              </h1>
              <p className="text-xl text-white/90 md:text-2xl">Elegance and style for every occasion</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a
                  href="/women/new-arrivals"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  New Arrivals
                </a>
                <a
                  href="/women/bestsellers"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Bestsellers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Sort Section */}
      <section className="py-6 border-b">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Filter size={16} className="mr-2" />
                Filter
              </button>
              <select
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="Dresses">Dresses</option>
                <option value="Tops">Tops</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="bestselling">Bestselling</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredAndSortedProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-[350px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-black text-white text-xs font-medium px-2 py-1 rounded">
                      New
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 transition-colors hover:bg-white">
                      <Heart size={18} />
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"></div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex w-full items-center justify-center rounded-md bg-black py-3 text-sm font-medium text-white hover:bg-black/80"
                    >
                      <ShoppingBag size={16} className="mr-2" />
                      Add to Bag
                    </button>
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
        </div>
      </section>

      {/* Cart Indicator */}
      <div className="fixed top-4 right-4 z-40">
        <button className="relative flex items-center justify-center rounded-full bg-black p-3 text-white">
          <ShoppingBag size={20} />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </main>
  )
}

export default Women_Body

