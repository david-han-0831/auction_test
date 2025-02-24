import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompletedAuctions() {
  const auctions = [
    { id: 1, name: "고급 와인", finalPrice: 1200000, winner: "user***" },
    { id: 2, name: "예술 작품", finalPrice: 5000000, winner: "art***" },
    { id: 3, name: "클래식 자동차", finalPrice: 50000000, winner: "car***" },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">완료된 경매</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <Card key={auction.id}>
              <CardHeader>
                <CardTitle>{auction.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">최종 낙찰가: {auction.finalPrice.toLocaleString()}원</p>
                <p className="text-muted-foreground">낙찰자: {auction.winner}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

