"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Detect", href: "/detect" },
  { name: "About", href: "/about" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* Left Aligned: Mobile Menu Trigger or Desktop Logo */}
          <div className="flex items-center">
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="relative h-10 w-10 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950/20 dark:hover:to-purple-950/20 transition-all duration-300 group"
                >
                  <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="sr-only">Toggle menu</span>
                  {/* Animated indicator */}
                  <div className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="left" 
                className="w-[280px] sm:w-[320px] p-0 bg-background/95 backdrop-blur-xl border-r border-border/50"
              >
                <div className="flex flex-col h-full relative overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-gradient-x"></div>
                  
                  {/* Header */}
                  <SheetHeader className="relative p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/10 dark:to-purple-950/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-md">
                          <span className="text-white font-semibold text-sm">DD</span>
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
                        </div>
                        <div>
                          <SheetTitle className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            DeepDetect
                          </SheetTitle>
                          <p className="text-xs text-muted-foreground">
                            AI Detection Platform
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 p-2 rounded-md bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200/30 dark:border-blue-800/30">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        🛡️ Professional deepfake detection technology
                      </p>
                    </div>
                  </SheetHeader>

                  {/* Navigation Links */}
                  <div className="flex-1 p-4 space-y-4 relative">
                    {/* Quick Actions */}
                    <div className="space-y-1">
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Navigation
                      </h3>
                      <div className="space-y-1">
                        {navItems.map((item, index) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "flex items-center w-full px-3 py-2.5 text-left rounded-lg transition-all duration-300 group relative overflow-hidden",
                              pathname === item.href
                                ? "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 text-primary border border-primary/20 shadow-md scale-[1.01]"
                                : "text-muted-foreground hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 hover:text-foreground hover:scale-[1.005] hover:shadow-sm"
                            )}
                            style={{
                              animationDelay: `${index * 100}ms`
                            }}
                          >
                            <div className="flex items-center space-x-3 relative z-10">
                              <div
                                className={cn(
                                  "w-2 h-2 rounded-full transition-all duration-300 shadow-sm",
                                  pathname === item.href
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-blue-500/25"
                                    : "bg-muted-foreground/30 group-hover:bg-gradient-to-r group-hover:from-blue-500/50 group-hover:to-purple-500/50"
                                )}
                              />
                              <span className="font-medium text-sm">{item.name}</span>
                            </div>
                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Settings Section */}
                    <div className="space-y-1">
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Settings
                      </h3>
                      <div className="p-3 rounded-lg bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 border border-border/50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"></div>
                            <span className="text-xs font-medium">Theme</span>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="h-7 px-2 rounded-md border-border/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950/20 dark:hover:to-purple-950/20 transition-all duration-300"
                          >
                            {theme === "dark" ? (
                              <>
                                <Sun className="h-3 w-3 mr-1" />
                                Light
                              </>
                            ) : (
                              <>
                                <Moon className="h-3 w-3 mr-1" />
                                Dark
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-4 border-t border-border/50 bg-gradient-to-r from-slate-50/50 to-gray-50/50 dark:from-slate-900/50 dark:to-gray-900/50 relative">
                    <div className="text-center space-y-1">
                      <div className="flex items-center justify-center space-x-1">
                        <div className="w-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <p className="text-xs text-muted-foreground">
                          Built with <span className="text-yellow-500">💛</span> using Next.js
                        </p>
                        <div className="w-0.5 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      </div>
                      <p className="text-xs text-muted-foreground/70">
                        v2.0 • Advanced AI Technology
                      </p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            {/* Desktop Logo */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">DD</span>
              </div>
              <Link href="/" className="font-bold text-xl">
                DeepDetect
              </Link>
            </div>
          </div>

          {/* Center: Mobile Logo or Desktop Nav */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-2 md:hidden">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">DD</span>
              </div>
              <Link href="/" className="font-bold text-xl">
                DeepDetect
              </Link>
            </div>
            <div className="hidden md:flex">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "group relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 group-hover:scale-x-100",
                        pathname === item.href ? "scale-x-100" : ""
                      )}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Aligned: Theme Toggle */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">
              Sign In
            </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

          </div>
        </div>
      </div>
    </nav>
  )
}
