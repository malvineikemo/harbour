import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-400">
          Harbour
        </Link>
      </div>
    </header>
  )
}

