import { Button } from "@/components/ui/button"

export default function MainBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">최고의 경매에 참여하세요!</h1>
        <p className="text-xl mb-8">지금 바로 핫한 경매에 참여하고 특별한 아이템을 획득하세요.</p>
        <Button size="lg" variant="secondary">
          경매 참여하기
        </Button>
      </div>
    </section>
  )
}

