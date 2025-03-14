import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Github } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function T6hpGuidePage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <Button variant="ghost" size="sm" className="mb-6" asChild>
        <Link href="/clients/t6m">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to T6M
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold tracking-tighter">T6M Installation Guide</h1>
        <p className="text-gray-400">Information about the upcoming T6M client</p>
      </div>

      <div className="prose prose-invert max-w-none">
        <Alert className="bg-purple-900/30 border-purple-800 mb-8">
          <AlertTitle className="text-purple-300">Development Status</AlertTitle>
          <AlertDescription>
            <p className="mt-2 text-gray-200">
              T6M is currently in early development and not yet available for public use. This guide will be updated
              with installation instructions once the client is ready for testing.
            </p>
          </AlertDescription>
        </Alert>

        <h2>Project Overview</h2>
        <p>
          T6M aims to enhance Call of Duty: Black Ops II with dedicated server support, improved networking, and various
          quality-of-life improvements. Our development team is working to bring these features to this popular title.
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

        <h2>Development Timeline</h2>
        <p>Our development team is working on the following timeline:</p>
        <ul>
          <li>
            <strong>Phase 1 (Current)</strong> - Research and basic implementation
          </li>
          <li>
            <strong>Phase 2</strong> - Core functionality development
          </li>
          <li>
            <strong>Phase 3</strong> - Alpha testing with limited features
          </li>
          <li>
            <strong>Phase 4</strong> - Beta testing with expanded features
          </li>
          <li>
            <strong>Phase 5</strong> - Public release
          </li>
        </ul>

        <h2>System Requirements</h2>
        <p>The expected system requirements for T6M will be:</p>
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

        <h2>Stay Updated</h2>
        <p>To stay updated on T6M development:</p>
        <ul>
          <li>Follow our GitHub repository for code updates and issue tracking</li>
          <li>Join our Discord community for discussions and development updates</li>
          <li>Check back on this website for official announcements</li>
        </ul>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mt-6">
          <p className="text-yellow-300 font-semibold">Important Note:</p>
          <p>
            T6M will require a legitimate copy of Call of Duty: Black Ops II. Our client will not include the base game
            files, which must be obtained separately through legal means such as Steam or a physical copy.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Button asChild size="lg" className="md:flex-1">
            <Link href="/clients/t6m">
              <ChevronLeft className="mr-2 h-5 w-5" />
              Back to T6M
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="md:flex-1">
            <a href="https://github.com/harbourproductions/t6m" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Follow Development
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

