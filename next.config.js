/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // Vercel 배포를 위한 설정
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'], // 이미지 도메인 허용
  },
}

module.exports = nextConfig 