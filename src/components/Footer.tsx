import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">AuctionHub</h3>
            <p className="text-sm text-muted-foreground">최고의 온라인 경매 플랫폼</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">링크</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:underline">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:underline">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">고객센터</h4>
            <p className="text-sm">이메일: support@auctionhub.com</p>
            <p className="text-sm">전화: 02-1234-5678</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">뉴스레터 구독</h4>
            <p className="text-sm mb-2">최신 경매 정보를 받아보세요</p>
            <input type="email" placeholder="이메일 주소" className="w-full p-2 rounded border mb-2" />
            <button className="w-full bg-primary text-primary-foreground p-2 rounded">구독하기</button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 AuctionHub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

