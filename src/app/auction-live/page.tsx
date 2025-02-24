import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"
import { Volume2 } from "lucide-react"

export default function AuctionLive() {
  const bidButtons = [
    { value: 5, label: "+5" },
    { value: 10, label: "+10" },
    { value: 50, label: "+50" },
    { value: 100, label: "+100" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">실시간 경매</h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">현재 경매</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <div className="relative w-32 h-32">
                    <Image src="/cat.jpg" alt="Current player" fill className="object-cover rounded" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-white">해강고원팀</h2>
                    <p className="text-lg text-gray-300">입찰 대기</p>
                    <p className="text-xl font-semibold mt-2 text-blue-400">0 포인트</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">입찰하기</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {bidButtons.map((btn) => (
                      <Button
                        key={btn.value}
                        variant="outline"
                        className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
                      >
                        {btn.label}
                      </Button>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">입찰</Button>
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-5 h-5 text-gray-300" />
                      <Slider defaultValue={[50]} max={100} step={1} className="w-[100px]" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">경매 순서</CardTitle>
            </CardHeader>
            <CardContent className="h-[600px] overflow-y-auto">
              <div className="space-y-2 text-sm">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="p-2 rounded bg-gray-700 flex justify-between items-center">
                    <span className="text-white">{i + 1}번째 경매</span>
                    <span className="text-gray-400">대기중</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

