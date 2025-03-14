"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, Info, Download, Github, Menu, FileDown, ExternalLink } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Clients", href: "/clients", icon: Download },
  { name: "About", href: "/about", icon: Info },
]

const clientItems = [
  { name: "IW4x", href: "/clients/iw4-hp", icon: FileDown },
  { name: "IW6x", href: "/clients/iw6-hp", icon: FileDown },
  { name: "S1x", href: "/clients/s1-hp", icon: FileDown },
  { name: "T4M", href: "/clients/t4-hp", icon: FileDown },
  { name: "T5M", href: "/clients/t5-hp", icon: FileDown },
  { name: "T6M", href: "/clients/t6-hp", icon: FileDown },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile navbar trigger */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" className="rounded-full shadow-lg">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md",
                    pathname === item.href ? "bg-blue-900/50 text-blue-300" : "text-gray-300 hover:bg-gray-800",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}

              {pathname.includes("/clients") && (
                <>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Game Clients</div>
                  {clientItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md ml-2",
                        pathname === item.href ? "bg-blue-900/50 text-blue-300" : "text-gray-300 hover:bg-gray-800",
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </>
              )}

              <div className="mt-4 px-4">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://github.com/harbourproductions" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>

              <div className="mt-2 px-4">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a href="https://eikemo.dev" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Eikemo Developments
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop navbar */}
      <nav className="hidden w-[250px] border-l border-gray-800 bg-black/95 backdrop-blur md:block">
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold text-white">Navigation</h2>
          </div>
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href ? "bg-blue-900/50 text-blue-300" : "text-gray-300 hover:bg-gray-800",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}

            {pathname.includes("/clients") && (
              <>
                <div className="px-3 py-2 mt-6 text-xs font-semibold text-gray-500 uppercase">Game Clients</div>
                {clientItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ml-2",
                      pathname === item.href ? "bg-blue-900/50 text-blue-300" : "text-gray-300 hover:bg-gray-800",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                ))}
              </>
            )}

            <div className="pt-6 mt-6 border-t border-gray-800">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="https://github.com/harbourproductions" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>

            <div className="mt-2">
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <a href="https://eikemo.dev" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Eikemo Developments
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

