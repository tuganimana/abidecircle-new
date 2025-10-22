"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet"
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Menu, 
  X, 
  Heart, 
  BookOpen, 
  Users, 
  Zap, 
  ChevronDown,
  Sparkles
} from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "#home", icon: Heart },
    { name: "About", href: "#about", icon: BookOpen },
    { name: "Features", href: "#features", icon: Zap },
    { name: "Services", href: "#services", icon: Users },
    { name: "Testimonials", href: "#testimonials", icon: Heart },
  ]

  const handleNavClick = (href: string, name: string) => {
    setActiveSection(name.toLowerCase())
    setIsMenuOpen(false)
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" 
        : "bg-white/90 backdrop-blur-sm border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer flex-shrink-0">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Heart className="h-6 w-6 text-white group-hover:animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <Sparkles className="h-2 w-2 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                FaithTech
              </span>
              <span className="text-xs text-gray-500 font-medium leading-tight">AI for Christian Ministry</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 mx-8 flex-1 justify-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href, item.name)}
                className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50 group ${
                  activeSection === item.name.toLowerCase()
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <item.icon className="h-4 w-4 group-hover:animate-pulse flex-shrink-0" />
                <span>{item.name}</span>
                {activeSection === item.name.toLowerCase() && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            {/* Auth Buttons */}
            <div className="flex items-center space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="hover:bg-blue-50 hover:text-blue-600 transition-colors h-10">
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">Welcome Back</DialogTitle>
                    <p className="text-center text-gray-600">Access your AI-powered ministry tools</p>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" className="h-11" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter your password" className="h-11" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="remember" className="rounded" />
                        <Label htmlFor="remember" className="text-sm">Remember me</Label>
                      </div>
                      <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>
                    <Button className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Sign In
                    </Button>
                    <div className="text-center">
                      <span className="text-sm text-gray-600">Don't have an account? </span>
                      <a href="#" className="text-sm text-blue-600 hover:underline font-medium">Sign up</a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 h-10">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Start Free
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">Join FaithTech</DialogTitle>
                    <p className="text-center text-gray-600">Get AI-powered tools for sermons, songs, and scripture</p>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" className="h-11" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="signup-email">Email Address</Label>
                      <Input id="signup-email" type="email" placeholder="Enter your email" className="h-11" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input id="signup-password" type="password" placeholder="Create a password" className="h-11" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" className="rounded" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                      </Label>
                    </div>
                    <Button className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Create Account
                    </Button>
                    <div className="text-center">
                      <span className="text-sm text-gray-600">Already have an account? </span>
                      <a href="#" className="text-sm text-blue-600 hover:underline font-medium">Sign in</a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden hover:bg-blue-50 h-10 w-10 p-0">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Navigation */}
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleNavClick(item.href, item.name)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  ))}
                </div>

                {/* Mobile Auth Buttons */}
                <div className="pt-6 border-t space-y-3">
                  <Button variant="ghost" className="w-full justify-start">
                    Login
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Start Free
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
