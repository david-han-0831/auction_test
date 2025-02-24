import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

export default function UpcomingAuctions() {
  const auctions = [
    { id: 1, name: "명품 가방", image: "/placeholder.svg", startTime: "2024-03-01 14:00" },
    { id: 2, name: "한정판 스니커즈", image: "/placeholder.svg", startTime: "2024-03-02 10:00" },
    { id: 3, name: "골동품 가구", image: "/placeholder.svg", startTime: "2024-03-03 16:00" },
  ]

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">곧 시작할 경매</h2>
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
                <p className="text-lg">시작 시간: {auction.startTime}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Bell className="mr-2 h-4 w-4" /> 알림 설정
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

