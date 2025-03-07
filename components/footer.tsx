import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-gray-400">
          © 2025 Harbour | A part of{" "}
          <a href="https://eikemo.dev" className="text-blue-400 hover:underline">
            Eikemo Developments
          </a>
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/privacy" className="text-sm text-gray-400 hover:underline hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-gray-400 hover:underline hover:text-gray-300">
            Terms of Service
          </Link>
          <Link href="/license" className="text-sm text-gray-400 hover:underline hover:text-gray-300">
            License
          </Link>
        </nav>
      </div>
    </footer>
  )
}

