'use client'
import { useState } from 'react'

import { Sidebar } from '@/components/ui/Sidebar'
import { Header } from '@/components/ui/Header'

export function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSetSidebarOpen = (value: boolean) => {
    setSidebarOpen(value)
  }

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} handleOpenSidebar={handleSetSidebarOpen} />
      <div className="lg:pl-72">
        <Header handleOpenSidebar={handleSetSidebarOpen} />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  )
}
