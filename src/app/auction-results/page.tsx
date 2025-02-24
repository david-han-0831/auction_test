import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sword, Shield, Crosshair, Wand2, Heart } from "lucide-react"
import Image from "next/image"
import { ReactElement } from 'react'

// Position 타입 정의
type Position = 'TOP' | 'JUG' | 'MID' | 'ADC' | 'SUP';

type Player = {
  name: string;
  position: Position;
  points: number;
}

type Team = {
  name: string;
  players: Player[];
}

const teams: Team[] = [
  {
    name: "바밥바팀",
    players: [
      { name: "스맥", position: "TOP", points: 280 },
      { name: "도에", position: "JUG", points: 300 },
      { name: "윤코", position: "MID", points: 0 },
      { name: "바밥바", position: "ADC", points: 0 },
      { name: "추성훈", position: "SUP", points: 280 },
    ],
  },
  {
    name: "코똥잉팀",
    players: [
      { name: "마린", position: "TOP", points: 110 },
      { name: "강주연", position: "JUG", points: 40 },
      { name: "양여명", position: "MID", points: 320 },
      { name: "코똥잉", position: "ADC", points: 0 },
      { name: "기선", position: "SUP", points: 400 },
    ],
  },
]

const positionIcons: Record<Position, ReactElement> = {
  TOP: <Sword className="w-5 h-5" />,
  JUG: <Shield className="w-5 h-5" />,
  MID: <Crosshair className="w-5 h-5" />,
  ADC: <Wand2 className="w-5 h-5" />,
  SUP: <Heart className="w-5 h-5" />,
}

export default function AuctionResults() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">경매 결과</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.map((team) => (
          <Card key={team.name}>
            <CardHeader>
              <CardTitle>{team.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {team.players.map((player) => (
                  <div key={player.name} className="flex items-center justify-between p-2 rounded bg-muted">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center">{positionIcons[player.position]}</div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 relative rounded-full overflow-hidden">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-om0ZYFa1XR7ljxNBCaNA83rTXgoNXI.png"
                            alt={player.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="font-medium">{player.name}</span>
                      </div>
                    </div>
                    <span className="font-semibold">{player.points}P</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

