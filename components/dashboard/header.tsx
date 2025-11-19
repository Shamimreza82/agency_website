'use client'

import { Menu, Bell, User } from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 sticky top-0 z-40">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-foreground hover:text-accent transition-colors"
      >
        <Menu size={24} />
      </button>

      <h1 className="text-xl font-bold text-foreground hidden sm:block">Dashboard</h1>

      <div className="flex items-center gap-4">
        <button className="relative text-foreground hover:text-accent transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
        </button>
        <button className="w-9 h-9 rounded-lg bg-primary/20 text-primary flex items-center justify-center hover:bg-primary/30 transition-colors">
          <User size={18} />
        </button>
      </div>
    </header>
  )
}
