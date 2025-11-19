'use client'

import { TrendingUp, TrendingDown, Users, Activity, Target, Zap } from 'lucide-react'

export function StatsGrid() {
  const stats = [
    {
      label: 'Total Users',
      value: '12,584',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      label: 'Active Sessions',
      value: '3,847',
      change: '+8.2%',
      trend: 'up',
      icon: Activity,
      bgColor: 'bg-accent/10',
      iconColor: 'text-accent',
    },
    {
      label: 'Conversion Rate',
      value: '3.24%',
      change: '-2.1%',
      trend: 'down',
      icon: Target,
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-400',
    },
    {
      label: 'Performance',
      value: '94.2%',
      change: '+5.8%',
      trend: 'up',
      icon: Zap,
      bgColor: 'bg-emerald-500/10',
      iconColor: 'text-emerald-400',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card border border-border rounded-xl p-6 hover:border-border/50 transition-all hover:bg-card/80"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
            <div className={`${stat.bgColor} p-2 rounded-lg`}>
              <stat.icon size={20} className={stat.iconColor} />
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p
              className={`text-xs font-medium mt-2 flex items-center gap-1 ${
                stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
              }`}
            >
              {stat.trend === 'up' ? (
                <TrendingUp size={14} />
              ) : (
                <TrendingDown size={14} />
              )}
              {stat.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
