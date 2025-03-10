import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Github, ExternalLink, Info } from "lucide-react"
import Image from "next/image"

export default function T6MPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter">T6M Client</h1>
          <p className="text-xl text-gray-400">Call of Duty: Black Ops II (2012)</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <a href="#download">
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/clients/t6m/guide">
              <Info className="mr-2 h-4 w-4" />
              Installation Guide
            </Link>
          </Button>
        </div>
      </div>

      <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="T6M screenshot"
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-invert max-w-none mb-12">
        <h2>About T6M</h2>
        <p>
          T6M is an enhanced client for Call of Duty: Black Ops II, currently in early development. Our goal is to
          provide dedicated server support, improved networking, and various quality-of-life improvements for this
          popular title.
        </p>

        <h3>Planned Features</h3>
        <ul>
          <li>
            <strong>Dedicated Servers</strong> - Play on community-hosted servers
          </li>
          <li>
            <strong>Server Browser</strong> - Find and filter available servers
          </li>
          <li>
            <strong>Improved Networking</strong> - Better connection stability and reduced lag
          </li>
          <li>
            <strong>Custom Content Support</strong> - Play and create custom maps and mods
          </li>
          <li>
            <strong>Console Commands</strong> - Access to developer console for advanced configuration
          </li>
          <li>
            <strong>Modern OS Compatibility</strong> - Better compatibility with Windows 10/11
          </li>
          <li>
            <strong>Performance Improvements</strong> - Better optimization for modern systems
          </li>
          <li>
            <strong>Enhanced Security</strong> - Protection against common exploits
          </li>
        </ul>

        <h3>System Requirements</h3>
        <ul>
          <li>
            <strong>OS:</strong> Windows 7/8/10/11 (64-bit recommended)
          </li>
          <li>
            <strong>CPU:</strong> Intel Core 2 Duo E8200 or AMD Phenom X3 8750
          </li>
          <li>
            <strong>RAM:</strong> 4GB
          </li>
          <li>
            <strong>GPU:</strong> NVIDIA GeForce GTX 470 or AMD Radeon HD 6870
          </li>
          <li>
            <strong>Storage:</strong> 16GB available space
          </li>
          <li>
            <strong>Internet:</strong> Broadband connection for multiplayer
          </li>
        </ul>

        <div className="bg-purple-900/30 border-purple-800 p-4 rounded-lg border">
          <p className="text-purple-300 font-semibold">Development Status:</p>
          <p className="text-gray-200">
            T6M is currently in early development. The client is not yet ready for general use, but we&apos;re making
            progress and will release early builds for testing soon. Follow our GitHub repository for updates on
            development progress.
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mt-4">
          <p className="text-yellow-300 font-semibold">Important Note:</p>
          <p>
            T6M will require a legitimate copy of Call of Duty: Black Ops II. Our client will not include the base game
            files, which must be obtained separately through legal means such as Steam or a physical copy.
          </p>
        </div>
      </div>

      <div id="download" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Development Builds</h2>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>T6M Development Status</CardTitle>
            <CardDescription>Early development builds are not yet available</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 py-6">
              T6M is currently in early development and not yet ready for public testing. We&apos;re working hard to
              bring you an enhanced Black Ops II experience. Follow our GitHub repository for updates on development
              progress and to be notified when early builds become available.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <a href="https://github.com/harbourproductions/t6m" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Follow Development
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <Button asChild size="lg" className="md:flex-1">
          <Link href="/clients/t6m/guide">
            <Info className="mr-2 h-5 w-5" />
            Installation Guide
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="md:flex-1">
          <a href="https://github.com/harbourproductions/t6m" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" />
            Source Code
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="md:flex-1">
          <Link href="/clients">
            <ExternalLink className="mr-2 h-5 w-5" />
            All Clients
          </Link>
        </Button>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 className="text-xl font-bold mb-4">Development Progress</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• Setting up project structure</li>
          <li>• Researching game internals</li>
          <li>• Implementing basic client modifications</li>
          <li>• Working on dedicated server functionality</li>
          <li>• Planning server browser implementation</li>
          <li>• Developing networking improvements</li>
          <li>• Testing Windows 10/11 compatibility</li>
          <li>• Designing security features</li>
        </ul>
        <div className="mt-4">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/harbourproductions/t6m/blob/main/ROADMAP.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Development Roadmap
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

