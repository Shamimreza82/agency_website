'use client'

import { X, LayoutGrid, BarChart3, Settings, Users, Zap, Shield } from 'lucide-react'

interface SidebarProps {
  open: boolean
  onClose: () => void
  activeTab: string
  onTabChange: (tab: string) => void
}

export function Sidebar({ open, onClose, activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { icon: LayoutGrid, label: 'Overview' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Zap, label: 'Performance' },
    { icon: Users, label: 'Teams' },
    { icon: Shield, label: 'Security' },
    { icon: Settings, label: 'Settings' },
  ]

  const handleMenuItemClick = (label: string) => {
    onTabChange(label)
    onClose()
  }

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-in-out z-50 lg:z-0 ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="h-16 border-b border-sidebar-border flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
              <span className="text-sidebar-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-sidebar-foreground hidden sm:inline">Dashboard</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-sidebar-foreground hover:bg-sidebar-accent rounded-md p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleMenuItemClick(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.label
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}
