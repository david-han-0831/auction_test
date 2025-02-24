import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function Lobby() {
  const rooms = [
    {
      id: 1,
      leader: { name: "명지", image: "/cat.jpg" },
      status: "IN PROGRESS",
      count: "2/2",
    },
    {
      id: 2,
      leader: { name: "김민교", image: "/dog.jpg" },
      status: "COMPLETED",
      count: "2/2",
    },
    {
      id: 3,
      leader: { name: "안병수야", image: "/cat2.jpg" },
      status: "IN PROGRESS",
      count: "4/4",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">경매 로비</h1>
          <Button>방 만들기</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <Card key={room.id} className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={room.leader.image || "/placeholder.svg"}
                        alt={room.leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{room.leader.name}</p>
                      <p className="text-sm text-gray-400">{room.count}</p>
                    </div>
                  </div>
                  <Badge variant={room.status === "IN PROGRESS" ? "default" : "secondary"} className="bg-opacity-50">
                    {room.status}
                  </Badge>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/waiting-room">입장</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

