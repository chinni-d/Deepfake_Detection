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
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <SheetHeader className="p-6 border-b bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">DD</span>
                        </div>
                        <SheetTitle className="font-bold text-lg">DeepDetect</SheetTitle>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground text-left">
                      Professional deepfake detection technology
                    </p>
                  </SheetHeader>

                  {/* Navigation Links */}
                  <div className="flex-1 p-6">
                    <div className="space-y-2">
                      {navItems.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center w-full px-4 py-3 text-left rounded-lg transition-all duration-200 group",
                            pathname === item.href
                              ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 text-primary border border-primary/20"
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          )}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={cn(
                                "w-2 h-2 rounded-full transition-all duration-200",
                                pathname === item.href
                                  ? "bg-gradient-to-r from-blue-600 to-purple-600"
                                  : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                              )}
                            />
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Theme Toggle in Mobile */}
                    <div className="mt-8 pt-6 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Theme</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                          className="h-8"
                        >
                          {theme === "dark" ? (
                            <>
                              <Sun className="h-3 w-3 mr-2" />
                              Light
                            </>
                          ) : (
                            <>
                              <Moon className="h-3 w-3 mr-2" />
                              Dark
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6 border-t bg-muted/30">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">
                        Built with <span className="text-yellow-500">💛</span> using Next.js
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
