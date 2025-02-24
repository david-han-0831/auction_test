import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export default function LiveAuctions() {
  const auctions = [
    { id: 1, name: "빈티지 시계", image: "/placeholder.svg", currentBid: 150000, timeLeft: "2시간 30분" },
    { id: 2, name: "희귀 우표 컬렉션", image: "/placeholder.svg", currentBid: 500000, timeLeft: "1시간 15분" },
    { id: 3, name: "사인된 LP 레코드", image: "/placeholder.svg", currentBid: 300000, timeLeft: "3시간 45분" },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">진행 중인 경매</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <Card key={auction.id}>
              <CardHeader>
                <CardTitle>{auction.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={auction.image || "/placeholder.svg"}
                  alt={auction.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <p className="text-lg font-semibold">현재 최고 입찰가: {auction.currentBid.toLocaleString()}원</p>
                <p className="flex items-center text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" /> 남은 시간: {auction.timeLeft}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">입찰하기</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

