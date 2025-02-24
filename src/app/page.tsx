import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Trophy, Users, Timer, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">경매시스템 TEST </h1>
          <p className="text-xl text-gray-300 mb-8">프로게이머 드래프트 경매 시스템</p>
          <div className="max-w-md mx-auto">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">로그인</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input type="text" placeholder="아이디" className="bg-gray-700 border-gray-600 text-white" />
                  <Input type="password" placeholder="비밀번호" className="bg-gray-700 border-gray-600 text-white" />
                  <Button asChild className="w-full">
                    <Link href="/lobby">로그인</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2 text-white">실시간 경매</h3>
              <p className="text-gray-400">실시간으로 진행되는 선수 경매에 참여하세요</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-white">팀 구성</h3>
              <p className="text-gray-400">최고의 팀을 구성하여 우승을 노려보세요</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6 text-center">
              <Timer className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2 text-white">실시간 순위</h3>
              <p className="text-gray-400">실시간으로 업데이트되는 순위를 확인하세요</p>
            </CardContent>
          </Card>
        </div>

        {/* How to Use Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">이용 방법</h2>
          <div className="space-y-6">
            {[
              { step: 1, text: "로그인 후 경매방에 입장하세요" },
              { step: 2, text: "팀장과 함께 경매 준비를 완료하세요" },
              { step: 3, text: "실시간 경매에 참여하여 선수를 선발하세요" },
              { step: 4, text: "최종 팀 구성을 확인하세요" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <p className="flex-1">{item.text}</p>
                <ArrowRight className="w-6 h-6 text-gray-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

