'use client'

import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'


export function ChartsGrid() {
  const revenueData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5500 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5200 },
  ]

  const usageData = [
    { name: 'Mon', usage: 2400, target: 2210 },
    { name: 'Tue', usage: 1398, target: 2290 },
    { name: 'Wed', usage: 9800, target: 2000 },
    { name: 'Thu', usage: 3908, target: 2108 },
    { name: 'Fri', usage: 4800, target: 2700 },
    { name: 'Sat', usage: 3800, target: 2500 },
  ]

  const performanceData = [
    { name: 'Week 1', rate: 65 },
    { name: 'Week 2', rate: 72 },
    { name: 'Week 3', rate: 58 },
    { name: 'Week 4', rate: 81 },
  ]

  return (
    <div className="space-y-6">
      {/* Revenue Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-6">Revenue Overview</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="name" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-card)',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '8px',
                }}
                labelStyle={{ color: 'var(--color-foreground)' }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="var(--color-accent)"
                fill="url(#colorValue)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Usage Chart */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-6">Usage Analytics</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={usageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="name" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-card)',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '8px',
                }}
                labelStyle={{ color: 'var(--color-foreground)' }}
              />
              <Line
                type="monotone"
                dataKey="usage"
                stroke="var(--color-accent)"
                strokeWidth={2}
                dot={{ fill: 'var(--color-accent)', r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="var(--color-primary)"
                strokeWidth={2}
                dot={{ fill: 'var(--color-primary)', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">Performance Metrics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="name" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: `1px solid var(--color-border)`,
                borderRadius: '8px',
              }}
              labelStyle={{ color: 'var(--color-foreground)' }}
            />
            <Bar dataKey="rate" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
