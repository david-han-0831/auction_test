import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - 페이지를 찾을 수 없습니다</h1>
        <p className="text-gray-400 mb-8">요청하신 페이지가 존재하지 않습니다.</p>
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
} 