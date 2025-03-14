import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Download } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function S1hpGuidePage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <Button variant="ghost" size="sm" className="mb-6" asChild>
        <Link href="/clients/s1x">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to S1x
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold tracking-tighter">S1x Installation Guide</h1>
        <p className="text-gray-400">Complete instructions for installing and using the S1x client</p>
      </div>

      <div className="prose prose-invert max-w-none">
        <Alert className="bg-blue-900/30 border-blue-800 mb-8">
          <AlertTitle className="text-blue-300">Prerequisites</AlertTitle>
          <AlertDescription>
            <p className="mt-2 text-gray-200">Before installing S1x, you&apos;ll need:</p>
            <ul className="mt-2 text-gray-200">
              <li>A legitimate copy of Call of Duty: Advanced Warfare (2014)</li>
              <li>At least 55GB of free disk space</li>
              <li>Administrator privileges on your computer</li>
              <li>An internet connection for multiplayer features</li>
            </ul>
          </AlertDescription>
        </Alert>

        <h2>Installation Methods</h2>
        <p>There are several ways to install S1x. Choose the method that works best for you:</p>

        <h3>Method 1: Full Client Installation</h3>
        <ol>
          <li>
            <p>
              <strong>Download the Full Client:</strong>
            </p>
            <p>
              Download the latest S1x full client package from our{" "}
              <Link href="/clients/s1x#download" className="text-blue-400 hover:underline">
                downloads page
              </Link>
              .
            </p>
          </li>
          <li>
            <p>
              <strong>Extract the Files:</strong>
            </p>
            <p>
              Extract the ZIP file to a location of your choice (e.g., <code>C:\Games\S1x</code>).
            </p>
          </li>
          <li>
            <p>
              <strong>Copy Game Files:</strong>
            </p>
            <p>Copy the following files from your Call of Duty: Advanced Warfare installation to the S1x folder:</p>
            <ul>
              <li>
                All <code>.ff</code> files from the main game folder
              </li>
              <li>
                The <code>zone</code> folder and its contents
              </li>
              <li>
                The <code>sound</code> folder and its contents
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Run the Client:</strong>
            </p>
            <p>
              Run <code>s1x.exe</code> as administrator.
            </p>
          </li>
        </ol>

        <h3>Method 2: Installing with Steam Version</h3>
        <ol>
          <li>
            <p>
              <strong>Install Base Game:</strong>
            </p>
            <p>Install Call of Duty: Advanced Warfare from Steam.</p>
          </li>
          <li>
            <p>
              <strong>Download the Update Package:</strong>
            </p>
            <p>
              Download the latest S1x update package from our{" "}
              <Link href="/clients/s1x#download" className="text-blue-400 hover:underline">
                downloads page
              </Link>
              .
            </p>
          </li>
          <li>
            <p>
              <strong>Extract to Game Directory:</strong>
            </p>
            <p>
              Extract the update files directly to your Call of Duty: Advanced Warfare installation directory (typically{" "}
              <code>C:\Program Files (x86)\Steam\steamapps\common\Call of Duty Advanced Warfare</code>).
            </p>
          </li>
          <li>
            <p>
              <strong>Run the Client:</strong>
            </p>
            <p>
              Run <code>s1x.exe</code> instead of the original game launcher.
            </p>
          </li>
        </ol>

        <h3>Method 3: Torrent Installation</h3>
        <ol>
          <li>
            <p>
              <strong>Download Torrent File:</strong>
            </p>
            <p>
              Download the torrent file for the latest S1x version from our{" "}
              <Link href="/clients/s1x#download" className="text-blue-400 hover:underline">
                downloads page
              </Link>
              .
            </p>
          </li>
          <li>
            <p>
              <strong>Open in BitTorrent Client:</strong>
            </p>
            <p>
              Open the torrent file with a BitTorrent client like{" "}
              <a
                href="https://www.qbittorrent.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                qBittorrent
              </a>
              .
            </p>
          </li>
          <li>
            <p>
              <strong>Complete Download:</strong>
            </p>
            <p>Wait for the download to complete.</p>
          </li>
          <li>
            <p>
              <strong>Run the Client:</strong>
            </p>
            <p>
              Once downloaded, navigate to the download location and run <code>s1x.exe</code>.
            </p>
          </li>
        </ol>

        <h2>Troubleshooting</h2>

        <h3>Common Issues</h3>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
          <h4 className="font-bold">Game Crashes on Startup</h4>
          <ul>
            <li>Run the game as administrator</li>
            <li>Verify you have all required game files</li>
            <li>Make sure your graphics drivers are up to date</li>
            <li>Try running in compatibility mode for Windows 7</li>
            <li>Disable any overlays (Discord, Steam, etc.)</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
          <h4 className="font-bold">Can&apos;t Connect to Servers</h4>
          <ul>
            <li>Check your internet connection</li>
            <li>Make sure your firewall isn&apos;t blocking the game</li>
            <li>Verify you&apos;re using the latest version of S1x</li>
            <li>Try restarting your router</li>
            <li>Check if the server you&apos;re trying to join is online</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
          <h4 className="font-bold">Missing Game Files</h4>
          <ul>
            <li>Ensure you&apos;ve copied all required files from your base game</li>
            <li>Verify your download isn&apos;t corrupted by checking file integrity</li>
            <li>Try downloading the full client package instead of the update</li>
          </ul>
        </div>

        <h2>Playing the Game</h2>

        <h3>Finding Servers</h3>
        <p>S1x includes a built-in server browser. To find and join a server:</p>
        <ol>
          <li>Launch S1x</li>
          <li>Click on &quot;Multiplayer&quot;</li>
          <li>Select &quot;Server Browser&quot;</li>
          <li>Browse the list of available servers</li>
          <li>Click on a server to join</li>
        </ol>
        <p>You can filter servers by game mode, map, player count, and ping.</p>

        <h3>Using Console Commands</h3>
        <p>S1x provides access to the developer console, which allows you to use various commands:</p>
        <ol>
          <li>Press the tilde key (~) to open the console</li>
          <li>Type commands to modify game settings or behavior</li>
        </ol>
        <p>Some useful commands include:</p>
        <ul>
          <li>
            <code>connect [IP:PORT]</code> - Connect to a specific server
          </li>
          <li>
            <code>map [mapname]</code> - Load a specific map
          </li>
          <li>
            <code>cg_fov [value]</code> - Change your field of view (default: 65)
          </li>
          <li>
            <code>r_fullscreen [0/1]</code> - Toggle fullscreen mode
          </li>
        </ul>

        <h3>Adjusting FOV</h3>
        <p>To adjust your field of view:</p>
        <ol>
          <li>Launch S1x</li>
          <li>Go to &quot;Options&quot; &gt; &quot;Video&quot;</li>
          <li>Use the FOV slider to adjust to your preference</li>
          <li>
            Alternatively, use the console command <code>cg_fov [value]</code>
          </li>
        </ol>

        <h2>Gettingg Help</h2>
        <p>If you encounter any issues not covered in this guide, you can get help through:</p>
        <ul>
          <li>Our Discord community</li>
          <li>The GitHub issues page</li>
          <li>Community forums</li>
        </ul>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Button asChild size="lg" className="md:flex-1">
            <Link href="/clients/s1x">
              <ChevronLeft className="mr-2 h-5 w-5" />
              Back to S1x
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="md:flex-1">
            <Link href="/clients/s1x#download">
              <Download className="mr-2 h-5 w-5" />
              Download S1x
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

