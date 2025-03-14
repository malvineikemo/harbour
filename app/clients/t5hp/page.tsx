import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Github, FileDown, ExternalLink, Info } from "lucide-react"
import Image from "next/image"

export default function T5hpPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter">T5M Client</h1>
          <p className="text-xl text-gray-400">Call of Duty: Black Ops (2010)</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <a href="#download">
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/clients/t5m/guide">
              <Info className="mr-2 h-4 w-4" />
              Installation Guide
            </Link>
          </Button>
        </div>
      </div>

      <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="T5M screenshot"
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-invert max-w-none mb-12">
        <h2>About T5M</h2>
        <p>
          T5M is an enhanced client for Call of Duty: Black Ops, offering dedicated server support, custom content
          capabilities, and various quality-of-life improvements. Our client is currently in alpha stage but already
          provides significant enhancements over the original game.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>
            <strong>Dedicated Servers</strong> - Play on community-hosted servers
          </li>
          <li>
            <strong>Server Browser</strong> - Find and filter available servers
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
            <strong>Widescreen Support</strong> - Better support for widescreen and ultrawide monitors
          </li>
          <li>
            <strong>Enhanced Security</strong> - Basic protection against common exploits
          </li>
        </ul>

        <h3>System Requirements</h3>
        <ul>
          <li>
            <strong>OS:</strong> Windows 7/8/10/11
          </li>
          <li>
            <strong>CPU:</strong> Intel Core 2 Duo E6600 or AMD Phenom X3 8750
          </li>
          <li>
            <strong>RAM:</strong> 4GB
          </li>
          <li>
            <strong>GPU:</strong> NVIDIA GeForce 8800GT or ATI Radeon HD 3870
          </li>
          <li>
            <strong>Storage:</strong> 12GB available space
          </li>
          <li>
            <strong>Internet:</strong> Broadband connection for multiplayer
          </li>
        </ul>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <p className="text-yellow-300 font-semibold">Alpha Status Notice:</p>
          <p>
            T5M is currently in alpha stage. While it&apos;s functional, you may encounter bugs or incomplete features.
            We&apos;re actively working on improvements and welcome your feedback.
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mt-4">
          <p className="text-yellow-300 font-semibold">Important Note:</p>
          <p>
            T5M requires a legitimate copy of Call of Duty: Black Ops. Our client does not include the base game files,
            which must be obtained separately through legal means such as Steam or a physical copy.
          </p>
        </div>
      </div>

      <div id="download" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Download T5M</h2>

        <Tabs defaultValue="full">
          <TabsList className="mb-4">
            <TabsTrigger value="full">Full Client</TabsTrigger>
            <TabsTrigger value="update">Update Only</TabsTrigger>
            <TabsTrigger value="torrent">Torrent</TabsTrigger>
          </TabsList>

          <TabsContent value="full">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>T5M Full Client</CardTitle>
                <CardDescription>
                  Complete package including the client and all necessary files (does not include base game)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <div>
                    <p className="font-medium">T5M-Full-Alpha.zip</p>
                    <p className="text-sm text-gray-400">Alpha Version | 200MB</p>
                  </div>
                  <Button asChild>
                    <a href="https://github.com/harbourproductions/t5m/releases/latest/download/T5M-Full-Alpha.zip">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-sm text-gray-400">Includes client and required files</p>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://github.com/harbourproductions/t5m/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    All Releases
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="update">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>T5M Update Only</CardTitle>
                <CardDescription>Update files only for existing installations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <div>
                    <p className="font-medium">T5M-Update-Alpha.zip</p>
                    <p className="text-sm text-gray-400">Alpha Version | 40MB</p>
                  </div>
                  <Button asChild>
                    <a href="https://github.com/harbourproductions/t5m/releases/latest/download/T5M-Update-Alpha.zip">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-sm text-gray-400">Only includes updated client files</p>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://github.com/harbourproductions/t5m/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    All Releases
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="torrent">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>T5M Torrent Downloads</CardTitle>
                <CardDescription>Torrent files for peer-to-peer downloading</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <div>
                    <p className="font-medium">T5M-Full-Alpha.torrent</p>
                    <p className="text-sm text-gray-400">Alpha Version | 200MB</p>
                  </div>
                  <Button asChild>
                    <a href="https://github.com/harbourproductions/t5m/releases/latest/download/T5M-Full-Alpha.torrent">
                      <FileDown className="mr-2 h-4 w-4" />
                      Download Torrent
                    </a>
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-400">
                  You&apos;ll need a BitTorrent client like{" "}
                  <a
                    href="https://www.qbittorrent.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    qBittorrent
                  </a>{" "}
                  to download these files.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <Button asChild size="lg" className="md:flex-1">
          <Link href="/clients/t5m/guide">
            <Info className="mr-2 h-5 w-5" />
            Installation Guide
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="md:flex-1">
          <a href="https://github.com/harbourproductions/t5m" target="_blank" rel="noopener noreferrer">
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
        <h3 className="text-xl font-bold mb-4">Alpha Development Progress</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• Basic dedicated server functionality implemented</li>
          <li>• Server browser partially working</li>
          <li>• Custom map loading support added</li>
          <li>• Console commands enabled</li>
          <li>• Windows 10/11 compatibility improvements</li>
          <li>• Widescreen resolution support</li>
          <li>• Basic mod support implemented</li>
          <li>• Working on improved networking and stability</li>
        </ul>
        <div className="mt-4">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/harbourproductions/t5m/blob/main/CHANGELOG.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Development Log
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

