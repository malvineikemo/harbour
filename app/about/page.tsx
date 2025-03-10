import { Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <h1 className="mb-8 text-4xl font-bold tracking-tighter">About Harbour</h1>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-gray-200 text-lg">
          We&apos;re a team focused on enhancing and maintaining Call of Duty clients with modern features and
          improvements.
        </p>

        <p>
          Harbour is dedicated to improving classic Call of Duty titles with enhanced features, dedicated server
          support, and modern compatibility. Our goal is to keep these beloved games accessible and enjoyable for both
          veteran players and newcomers alike.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to extend the life of classic Call of Duty titles by enhancing them with modern features and
          fixing issues that would otherwise make them difficult to play on current systems. We believe these games
          deserve to remain playable for years to come.
        </p>

        <h2>Enhanced Clients</h2>
        <p>We maintain enhanced clients for various Call of Duty titles, including:</p>
        <ul>
          <li>
            <strong>IW4x</strong> - Modern Warfare 2 (2009)
          </li>
          <li>
            <strong>IW6x</strong> - Ghosts (2013)
          </li>
          <li>
            <strong>S1x</strong> - Advanced Warfare (2014)
          </li>
          <li>
            <strong>T4M</strong> - World at War (2008)
          </li>
          <li>
            <strong>T5M</strong> - Black Ops (2010)
          </li>
          <li>
            <strong>T6M</strong> - Black Ops II (2012)
          </li>
        </ul>

        <p>Our enhanced clients offer features like:</p>
        <ul>
          <li>Dedicated server support</li>
          <li>Improved networking</li>
          <li>Modern OS compatibility</li>
          <li>Enhanced security</li>
          <li>Bug fixes and stability improvements</li>
          <li>Custom content support</li>
        </ul>

        <h2>Community-Driven Development</h2>
        <p>
          Our development process is community-driven, with regular updates based on player feedback and needs.
          We&apos;re committed to transparency and collaboration in all our projects.
        </p>

        <div className="my-8 flex justify-center">
          <Button asChild size="lg">
            <a href="https://github.com/harbourproductions" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Visit Our GitHub
            </a>
          </Button>
        </div>

        <h2>The Team</h2>
        <p>
          Harbour Productions consists of developers passionate about preserving and enhancing classic Call of Duty
          experiences. Our team includes experts in game modification, networking, and user interface design.
        </p>

        <h2>Join Us</h2>
        <p>
          We&apos;re always looking for passionate contributors to help improve our clients. If you&apos;re interested
          in contributing, check out our GitHub repositories or join our Discord community.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="/clients">Explore Our Clients</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

