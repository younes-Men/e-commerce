import React, { useState } from "react";
import { Search, ShoppingBag, User, Menu, X, Heart, ChevronDown } from "lucide-react";


const NavLink = ({ href, children }) => (
  <a href={href} className="text-gray-700 hover:text-black font-medium">
    {children}
  </a>
);


const DropdownMenu = ({ title, items }) => (
  <div className="relative group">
    <button className="flex items-center text-gray-700 hover:text-black font-medium">
      {title} <ChevronDown size={16} className="ml-1" />
    </button>
    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {item.name}
        </a>
      ))}
    </div>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with announcement */}
      <div className="bg-black text-white py-2 text-center text-sm">
        <p>Free shipping on all orders over $50</p>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button className="lg:hidden text-gray-700 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold tracking-tighter">
              ELEGANCE
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <DropdownMenu
              title="Women"
              items={[
                { name: "Dresses", href: "/women/dresses" },
                { name: "Tops", href: "/women/tops" },
                { name: "Bottoms", href: "/women/bottoms" },
                { name: "Accessories", href: "/women/accessories" },
              ]}
            />
            <DropdownMenu
              title="Men"
              items={[
                { name: "Shirts", href: "/men/shirts" },
                { name: "Pants", href: "/men/pants" },
                { name: "Outerwear", href: "/men/outerwear" },
                { name: "Accessories", href: "/men/accessories" },
              ]}
            />
            <NavLink href="/new-arrivals">New Arrivals</NavLink>
            <NavLink href="/sale">Sale</NavLink>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black focus:outline-none" onClick={toggleSearch} aria-label="Search">
              <Search size={20} />
            </button>
            <a href="/wishlist" className="text-gray-700 hover:text-black hidden sm:block">
              <Heart size={20} />
            </a>
            <a href="/account" className="text-gray-700 hover:text-black hidden sm:block">
              <User size={20} />
            </a>
            <a href="/cart" className="text-gray-700 hover:text-black relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </a>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={toggleSearch}>
              <X size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <NavLink href="/">Home</NavLink>
              <details className="group">
                <summary className="flex justify-between items-center text-gray-700 py-2 border-b border-gray-100 cursor-pointer">
                  Women <ChevronDown size={16} className="ml-1" />
                </summary>
                <div className="pl-4 mt-2 space-y-2">
                  <a href="/women/dresses" className="block py-2 text-gray-600">Dresses</a>
                  <a href="/women/tops" className="block py-2 text-gray-600">Tops</a>
                  <a href="/women/bottoms" className="block py-2 text-gray-600">Bottoms</a>
                  <a href="/women/accessories" className="block py-2 text-gray-600">Accessories</a>
                </div>
              </details>
              <details className="group">
                <summary className="flex justify-between items-center text-gray-700 py-2 border-b border-gray-100 cursor-pointer">
                  Men <ChevronDown size={16} className="ml-1" />
                </summary>
                <div className="pl-4 mt-2 space-y-2">
                  <a href="/men/shirts" className="block py-2 text-gray-600">Shirts</a>
                  <a href="/men/pants" className="block py-2 text-gray-600">Pants</a>
                  <a href="/men/outerwear" className="block py-2 text-gray-600">Outerwear</a>
                  <a href="/men/accessories" className="block py-2 text-gray-600">Accessories</a>
                </div>
              </details>
              <NavLink href="/new-arrivals">New Arrivals</NavLink>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/wishlist">Wishlist</NavLink>
              <NavLink href="/account">My Account</NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
