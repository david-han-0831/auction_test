import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AuctionOrder() {
  const players = [
    { id: 1, name: "김봉준", image: "/cat.jpg" },
    { id: 2, name: "저라뎃", image: "/dog.jpg" },
    { id: 3, name: "이상호", image: "/cat2.jpg" },
    { id: 4, name: "듀단", image: "/dog.jpg" },
    { id: 5, name: "김민교", image: "/cat.jpg" },
    { id: 6, name: "박두신", image: "/cat2.jpg" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">랜덤 경매 순서</h1>
          <div className="flex items-center justify-center gap-2">
            <Switch id="order-visibility" />
            <label htmlFor="order-visibility" className="text-gray-300">
              순서 공개
            </label>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          {players.map((player, index) => (
            <div key={player.id} className="flex items-center">
              <Card className="bg-gray-800/50 border-gray-700 w-[180px]">
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-3 rounded-lg overflow-hidden">
                    <Image src={player.image || "/placeholder.svg"} alt={player.name} fill className="object-cover" />
                  </div>
                  <p className="text-center font-medium text-white">{player.name}</p>
                  <p className="text-center text-sm text-gray-400">{index + 1}번째</p>
                </CardContent>
              </Card>
              {index < players.length - 1 && <ArrowRight className="w-6 h-6 mx-4 text-gray-500" />}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button size="lg" variant="outline" className="text-black">
            순서 재배치
          </Button>
          <Button size="lg" asChild>
            <Link href="/auction-live">경매 시작</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

