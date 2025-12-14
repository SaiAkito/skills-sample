/**
 * Apple-styled Dashboard Template
 *
 * A modern dashboard layout with:
 * - Sidebar navigation (macOS-inspired)
 * - Stats cards with metrics
 * - Data visualization area
 * - Responsive design
 */

import { Home, Folder, Settings, Users, TrendingUp, DollarSign, ShoppingCart } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Dashboard() {
  const navItems = [
    { icon: Home, label: "Dashboard", href: "/", active: true },
    { icon: Folder, label: "Projects", href: "/projects" },
    { icon: Users, label: "Team", href: "/team" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ]

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      icon: DollarSign,
      trend: "up",
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+12.5%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Sales",
      value: "+573",
      change: "+8.2%",
      icon: ShoppingCart,
      trend: "up",
    },
    {
      title: "Growth",
      value: "+24%",
      change: "+4.3%",
      icon: TrendingUp,
      trend: "up",
    },
  ]

  return (
    <div className="flex h-screen bg-background-primary">
      {/* Sidebar */}
      <aside className="w-64 border-r border-apple-gray-200 dark:border-apple-gray-800 bg-background-secondary">
        <div className="p-4">
          {/* Logo */}
          <div className="mb-8 px-3">
            <h1 className="text-headline font-semibold text-label-primary">
              Dashboard
            </h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-apple text-body transition-colors",
                  item.active
                    ? "bg-apple-blue-500/10 text-apple-blue-500"
                    : "text-label-primary hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* User profile at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-apple-gray-200 dark:border-apple-gray-800">
          <div className="flex items-center gap-3 px-3 py-2 rounded-apple hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800 cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-apple-blue-500 flex items-center justify-center text-white text-subheadline font-medium">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-subheadline font-medium text-label-primary truncate">
                John Doe
              </p>
              <p className="text-caption-1 text-label-tertiary truncate">
                john@example.com
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-apple-gray-200 dark:border-apple-gray-800 bg-background-primary/80 backdrop-blur-xl">
          <div className="flex items-center justify-between px-8 h-16">
            <div>
              <h2 className="text-title-2 text-label-primary">Overview</h2>
              <p className="text-footnote text-label-secondary">
                Welcome back, John
              </p>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button>
                New Project
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardDescription>{stat.title}</CardDescription>
                  <stat.icon className="w-4 h-4 text-label-tertiary" />
                </CardHeader>
                <CardContent>
                  <div className="text-title-2 font-bold text-label-primary">
                    {stat.value}
                  </div>
                  <p className={cn(
                    "text-footnote mt-1",
                    stat.trend === "up" ? "text-apple-green-500" : "text-apple-red-500"
                  )}>
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Chart Card */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>
                  Your revenue performance over the last 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Chart placeholder */}
                <div className="h-[300px] flex items-center justify-center bg-apple-gray-50 dark:bg-apple-gray-900 rounded-apple">
                  <p className="text-body text-label-tertiary">Chart goes here</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-3 pb-4 border-b border-separator-nonOpaque last:border-0 last:pb-0">
                      <div className="w-8 h-8 rounded-full bg-apple-blue-500/10 flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4 text-apple-blue-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-body text-label-primary">
                          New user joined the team
                        </p>
                        <p className="text-footnote text-label-tertiary mt-1">
                          2 hours ago
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="bordered" className="w-full justify-start">
                    <Folder className="w-4 h-4 mr-2" />
                    Create New Project
                  </Button>
                  <Button variant="bordered" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Invite Team Member
                  </Button>
                  <Button variant="bordered" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    Update Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

// Helper function for className concatenation
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
