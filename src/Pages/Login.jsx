"use client"
import React from "react"
import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      // Handle login
      console.log("Logging in with:", { email, password, rememberMe })
      alert(`Login attempt with email: ${email}`)
    } else {
      // Handle registration
      console.log("Registering with:", { email, password })
      alert(`Registration attempt with email: ${email}`)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleAuthMode = () => {
    setIsLogin(!isLogin)
    // Reset form when switching modes
    setEmail("")
    setPassword("")
    setShowPassword(false)
  }

  return (
    <main className="w-full min-h-screen bg-gray-50 py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">{isLogin ? "Welcome back" : "Create an account"}</h1>
              <p className="text-gray-500">
                {isLogin ? "Sign in to your account to continue" : "Fill in your details to get started"}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </label>
                    {isLogin && (
                      <a href="/forgot-password" className="text-sm text-black hover:underline">
                        Forgot password?
                      </a>
                    )}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full pl-10 pr-10 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff size={18} className="text-gray-400" />
                      ) : (
                        <Eye size={18} className="text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex justify-center items-center py-2 px-4 border rounded-md shadow-sm bg-white hover:bg-gray-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-2">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex justify-center items-center py-2 px-4 border rounded-md shadow-sm bg-white hover:bg-gray-50"
                  >
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
                      className="mr-2"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Facebook
                  </button>
                </div>
              </form>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button onClick={toggleAuthMode} className="ml-1 text-black font-medium hover:underline">
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </div>

          <div className="w-full max-w-md mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-2 rounded-full">
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
                <div>
                  <h3 className="font-medium">Secure Login</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Your information is secured with SSL encryption and we never store your credit card details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md">
            <div className="flex justify-between items-center">
              <a href="/" className="text-sm text-gray-600 hover:text-black hover:underline">
                Return to Home
              </a>
              <a href="/shop_women" className="text-sm text-black font-medium hover:underline flex items-center">
                Continue Shopping <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login

