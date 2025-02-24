import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          AuctionHub
        </Link>
        <nav className="flex space-x-4">
          <Link href="/" className="hover:text-primary">
            로비
          </Link>
          <Link href="/waiting-room" className="hover:text-primary">
            대기방
          </Link>
          <Link href="/auction-order" className="hover:text-primary">
            후보 순서
          </Link>
          <Link href="/auction-live" className="hover:text-primary">
            경매 진행
          </Link>
          <Link href="/auction-results" className="hover:text-primary">
            경매 결과
          </Link>
        </nav>
        <Button variant="outline">로그아웃</Button>
      </div>
    </header>
  )
}

