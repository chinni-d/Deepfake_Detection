"use client"

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm relative w-full">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
          {/* Left side - Copyright */}
            <div className="text-sm text-muted-foreground text-center sm:text-left order-2 sm:order-1">
            © {new Date().getFullYear()} DeepDetect. All rights reserved.
            </div>

          {/* Right side - Built with */}
          <div className="text-sm text-muted-foreground flex items-center justify-center sm:justify-end order-1 sm:order-2">
            Built with <span className="mx-1 text-yellow-500">💛</span> using Next.js and AI technology
          </div>
        </div>
      </div>
    </footer>
  )
}
