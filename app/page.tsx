import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, Github, Users, Code } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl space-y-12 py-12">
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Welcome to <span className="text-blue-400">Harbour</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
          Enhanced Call of Duty clients with modern features, dedicated servers, and community support.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/clients">
              <Download className="mr-2 h-4 w-4" />
              Download Clients
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/about">
              <Users className="mr-2 h-4 w-4" />
              About Our Team
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <a href="https://github.com/harbourproductions" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="group rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 rounded-full bg-blue-900/50 p-2.5 text-blue-300 w-10 h-10 flex items-center justify-center">
            <Download className="h-5 w-5" />
          </div>
          <h3 className="mb-2 text-xl font-bold">Enhanced Clients</h3>
          <p className="text-gray-300">
            Play classic Call of Duty titles with enhanced features, improved stability, and modern compatibility.
          </p>
        </div>
        <div className="group rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 rounded-full bg-blue-900/50 p-2.5 text-blue-300 w-10 h-10 flex items-center justify-center">
            <Code className="h-5 w-5" />
          </div>
          <h3 className="mb-2 text-xl font-bold">Dedicated Servers</h3>
          <p className="text-gray-300">
            Host and play on dedicated servers with advanced configuration options and improved networking.
          </p>
        </div>
        <div className="group rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 rounded-full bg-blue-900/50 p-2.5 text-blue-300 w-10 h-10 flex items-center justify-center">
            <Users className="h-5 w-5" />
          </div>
          <h3 className="mb-2 text-xl font-bold">Active Community</h3>
          <p className="text-gray-300">
            Join thousands of players keeping classic Call of Duty titles alive with regular updates and events.
          </p>
        </div>
      </section>

      <section className="rounded-xl bg-blue-900 p-8 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to play?</h2>
          <p className="mb-6 text-blue-100">Download our enhanced game clients and join the community today.</p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/clients">
              <Download className="mr-2 h-4 w-4" />
              Get Started
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

