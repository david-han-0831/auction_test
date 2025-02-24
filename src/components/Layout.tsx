import type React from "react"
import Header from "./Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        © 2024 AuctionHub. All rights reserved.
      </footer>
    </div>
  )
}

