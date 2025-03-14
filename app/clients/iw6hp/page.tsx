import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Github, FileDown, ExternalLink, Info } from "lucide-react"
import Image from "next/image"

export default function IW6hpPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter">IW6hp Client</h1>
          <p className="text-xl text-gray-400">Call of Duty: Ghosts (2013)</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <a href="#download">
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/clients/iw6hp/guide">
              <Info className="mr-2 h-4 w-4" />
              Installation Guide
            </Link>
          </Button>
        </div>
      </div>

      <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="IW6hp screenshot"
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-invert max-w-none mb-12">
        <h2>About IW6hp</h2>
        <p>
          IW6hp is an enhanced client for Call of Duty: Ghosts, offering LAN support, FOV slider, console unlocker, and
          other improvements. Our client allows you to play on LAN or with friends using direct connections, bypassing
          the limitations of the original game.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>
            <strong>LAN Support</strong> - Play locally with friends without internet connection
          </li>
          <li>
            <strong>FOV Slider</strong> - Adjust your field of view for better visibility
          </li>
          <li>
            <strong>Console Unlocker</strong> - Access to developer console for advanced configuration
          </li>
          <li>
            <strong>Direct Connect</strong> - Connect directly to friends&apos; games
          </li>
          <li>
            <strong>Controller Support</strong> - Improved controller support and customization
          </li>
          <li>
            <strong>Performance Improvements</strong> - Better optimization for modern systems
          </li>
          <li>
            <strong>Mod Support</strong> - Basic support for custom mods
          </li>
          <li>
            <strong>Widescreen Support</strong> - Better support for widescreen and ultrawide monitors
          </li>
        </ul>

        <h3>System Requirements</h3>
        <ul>
          <li>
            <strong>OS:</strong> Windows 7/8/10/11 (64-bit recommended)
          </li>
          <li>
            <strong>CPU:</strong> Intel Core i3-3220 or AMD Equivalent
          </li>
          <li>
            <strong>RAM:</strong> 6GB
          </li>
          <li>
            <strong>GPU:</strong> NVIDIA GeForce GTX 550 Ti or AMD Radeon HD 7850
          </li>
          <li>
            <strong>Storage:</strong> 40GB available space
          </li>
          <li>
            <strong>Internet:</strong> Broadband connection for online features
          </li>
        </ul>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <p className="text-yellow-300 font-semibold">Important Note:</p>
          <p>
            IW6hp requires a legitimate copy of Call of Duty: Ghosts. Our client does not include the base game files,
            which must be obtained separately through legal means such as Steam or a physical copy.
          </p>
        </div>
      </div>

      <div id="download" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Download IW6hp</h2>

        <Tabs defaultValue="full">
          <TabsList className="mb-4">
            <TabsTrigger value="full">Full Client</TabsTrigger>
            <TabsTrigger value="update">Update Only</TabsTrigger>
            <TabsTrigger value="torrent">Torrent</TabsTrigger>
          </TabsList>

          <TabsContent value="full">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>IW6hp Full Client</CardTitle>
                <CardDescription>
                  Complete package including the client and all necessary files (does not include base game)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <div>
                    <p className="font-medium">IW6hp-Full.zip</p>
                    <p className="text-sm text-gray-400">Latest Version | 350MB</p>
                  </div>
                  <Button asChild>
                    <a href="https://github.com/harbourproductions/iw6x/releases/latest/download/IW6hp-Full.zip">
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
                    href="https://github.com/harbourproductions/iw6hp/releases"
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
                <CardTitle>IW6hp Update Only</CardTitle>
                <CardDescription>Update files only for existing installations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <div>
                    <p className="font-medium">IW6hp-Update.zip</p>
                    <p className="text-sm text-gray-400">Latest Version | 75MB</p>
                  </div>
                  <Button asChild>
                    <a href="https://github.com/harbourproductions/iw6x/releases/latest/download/IW6x-Update.zip">
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
                    href="https://github.com/harbourproductions/iw6x/releases"
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
                <CardTitle>IW6hp Torrent Downloads</CardTitle>
                <CardDescription>Torrent files for peer-to-peer downloading</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <div>
                    <p className="font-medium">IW6hp-Full.torrent</p>
                    <p className="text-sm text-gray-400">Latest Version | 350MB</p>
                  </div>
                  <Button asChild>
                    <a href="https://github.com/harbourproductions/iw6hp/releases/latest/download/IW6hp-Full.torrent">
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
          <Link href="/clients/iw6hp/guide">
            <Info className="mr-2 h-5 w-5" />
            Installation Guide
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="md:flex-1">
          <a href="https://github.com/harbourproductions/iw6hp" target="_blank" rel="noopener noreferrer">
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
        <h3 className="text-xl font-bold mb-4">Latest Changes</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• Added FOV slider in options menu</li>
          <li>• Improved LAN connectivity</li>
          <li>• Fixed crash when using certain graphics settings</li>
          <li>• Added support for custom controller bindings</li>
          <li>• Improved compatibility with Windows 11</li>
          <li>• Fixed memory leaks in multiplayer</li>
          <li>• Added support for ultrawide resolutions</li>
          <li>• Various bug fixes and performance improvements</li>
        </ul>
        <div className="mt-4">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/harbourproductions/iw6hp/blob/main/CHANGELOG.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Changelog
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

