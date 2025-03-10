import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"
import Image from "next/image"

const clients = [
  {
    id: "iw4x",
    title: "IW4x",
    game: "Call of Duty: Modern Warfare 2",
    year: "2009",
    description: "Enhanced client for Modern Warfare 2 with dedicated servers, mod support, and improved security.",
    image: "/placeholder.svg?height=200&width=350",
    status: "Stable",
  },
  {
    id: "iw6x",
    title: "IW6x",
    game: "Call of Duty: Ghosts",
    year: "2013",
    description: "Enhanced client for Ghosts with LAN support, FOV slider, and console unlocker.",
    image: "/placeholder.svg?height=200&width=350",
    status: "Stable",
  },
  {
    id: "s1x",
    title: "S1x",
    game: "Call of Duty: Advanced Warfare",
    year: "2014",
    description: "Enhanced client for Advanced Warfare with dedicated servers and improved features.",
    image: "/placeholder.svg?height=200&width=350",
    status: "Beta",
  },
  {
    id: "t4m",
    title: "T4M",
    game: "Call of Duty: World at War",
    year: "2008",
    description: "Enhanced client for World at War with modern OS compatibility and improved security.",
    image: "/placeholder.svg?height=200&width=350",
    status: "Stable",
  },
  {
    id: "t5m",
    title: "T5M",
    game: "Call of Duty: Black Ops",
    year: "2010",
    description: "Enhanced client for Black Ops with dedicated servers and custom content support.",
    image: "/placeholder.svg?height=200&width=350",
    status: "Alpha",
  },
  {
    id: "t6m",
    title: "T6M",
    game: "Call of Duty: Black Ops II",
    year: "2012",
    description: "Enhanced client for Black Ops II with improved networking and security features.",
    image: "/placeholder.svg?height=200&width=350",
    status: "Development",
  },
]

export default function ClientsPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Game Clients</h1>
        <p className="text-gray-300 max-w-3xl">
          Browse our collection of enhanced game clients for classic Call of Duty titles. All clients are free and
          regularly updated with new features and improvements.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <Card key={client.id} className="overflow-hidden bg-gray-900 border-gray-800 flex flex-col">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={client.image || "/placeholder.svg"}
                alt={`${client.title} screenshot`}
                width={350}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{client.title}</CardTitle>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    client.status === "Stable"
                      ? "bg-green-900 text-green-300"
                      : client.status === "Beta"
                        ? "bg-blue-900 text-blue-300"
                        : client.status === "Alpha"
                          ? "bg-yellow-900 text-yellow-300"
                          : "bg-purple-900 text-purple-300"
                  }`}
                >
                  {client.status}
                </span>
              </div>
              <CardDescription className="text-gray-400">
                {client.game} ({client.year})
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-300">{client.description}</p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild className="flex-1">
                <Link href={`/clients/${client.id}`}>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/clients/${client.id}/guide`}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Guide
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

