import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Sword, Shield, Crosshair, Wand2, Heart } from "lucide-react"

const positions = [
  { id: "TOP", icon: <Sword className="w-5 h-5" />, players: ["진소동", "김봉준"] },
  { id: "JUG", icon: <Shield className="w-5 h-5" />, players: ["안병수야", "에필로그"] },
  { id: "MID", icon: <Crosshair className="w-5 h-5" />, players: ["김민교", "양여명"] },
  { id: "ADC", icon: <Wand2 className="w-5 h-5" />, players: ["레오", "트리키"] },
  { id: "SUP", icon: <Heart className="w-5 h-5" />, players: ["조디악", "명지"] },
]

export default function WaitingRoom() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">대기실</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">선수 선택</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <Card
                  key={i}
                  className={`aspect-square bg-gray-800/50 border-gray-700 ${i < 2 ? "ring-2 ring-blue-500" : ""}`}
                >
                  <CardContent className="flex items-center justify-center h-full">
                    {i < 2 ? (
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2">
                          <Image
                            src="/cat2.jpg"
                            alt="Selected player"
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-white">{i === 0 ? "김민교" : "안병수야"}</p>
                      </div>
                    ) : (
                      <span className="text-4xl text-gray-500">+</span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">경매 후보</h2>
            <Tabs defaultValue="TOP" className="w-full">
              <TabsList className="grid grid-cols-5 h-auto bg-gray-800 text-white">
                {positions.map((pos) => (
                  <TabsTrigger
                    key={pos.id}
                    value={pos.id}
                    className="flex flex-col gap-1 py-2 data-[state=active]:bg-gray-700 text-white"
                  >
                    {pos.icon}
                    <span>{pos.id}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {positions.map((pos) => (
                <TabsContent key={pos.id} value={pos.id}>
                  <div className="grid grid-cols-2 gap-4 text-white">
                    {pos.players.map((player, i) => (
                      <Card key={i} className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-4 flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <Image
                              src="/cat.jpg"
                              alt={player}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                          <span className="font-medium text-white">{player}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" className="px-12 py-6 text-lg" asChild>
            <Link href="/auction-order">READY</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

