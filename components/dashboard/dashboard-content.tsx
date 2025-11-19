'use client'

import { StatsGrid } from './stats-grid'
import { ChartsGrid } from './charts-grid'

interface DashboardContentProps {
  activeTab: string
}

export function DashboardContent({ activeTab }: DashboardContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Welcome back</h2>
              <p className="text-muted-foreground mt-2">Heres whats happening with your business today.</p>
            </div>
            <StatsGrid />
            <ChartsGrid />
          </div>
        )
      case 'Analytics':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Analytics</h2>
              <p className="text-muted-foreground mt-2">Detailed metrics and insights about your performance.</p>
            </div>
            <ChartsGrid />
          </div>
        )
      case 'Performance':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Performance</h2>
              <p className="text-muted-foreground mt-2">System performance and optimization metrics.</p>
            </div>
            <StatsGrid />
          </div>
        )
      case 'Teams':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Teams</h2>
              <p className="text-muted-foreground mt-2">Manage your team members and their permissions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Team Lead', 'Developer', 'Designer', 'Manager'].map((role) => (
                <div key={role} className="bg-card rounded-lg border border-border p-6">
                  <p className="font-semibold text-foreground mb-2">{role}</p>
                  <p className="text-sm text-muted-foreground">Manage {role} access and permissions</p>
                </div>
              ))}
            </div>
          </div>
        )
      case 'Security':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Security</h2>
              <p className="text-muted-foreground mt-2">Configure security settings and access controls.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Two-Factor Authentication', 'API Keys', 'IP Whitelist', 'Activity Log'].map((item) => (
                <div key={item} className="bg-card rounded-lg border border-border p-6">
                  <p className="font-semibold text-foreground mb-2">{item}</p>
                  <p className="text-sm text-muted-foreground">Configure {item.toLowerCase()}</p>
                </div>
              ))}
            </div>
          </div>
        )
      case 'Settings':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Settings</h2>
              <p className="text-muted-foreground mt-2">Customize your dashboard preferences.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Profile', 'Notifications', 'Integrations', 'Billing'].map((item) => (
                <div key={item} className="bg-card rounded-lg border border-border p-6">
                  <p className="font-semibold text-foreground mb-2">{item}</p>
                  <p className="text-sm text-muted-foreground">Update {item.toLowerCase()} settings</p>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <main className="flex-1 overflow-auto">
      <div className="p-4 sm:p-8">
        {renderContent()}
      </div>
    </main>
  )
}
