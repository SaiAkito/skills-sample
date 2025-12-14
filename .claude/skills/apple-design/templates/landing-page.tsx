/**
 * Apple-styled Landing Page Template
 *
 * A complete landing page following Apple's design principles:
 * - Clean navigation with glassmorphism
 * - Hero section with gradient background
 * - Feature cards with icons
 * - Responsive grid layouts
 * - Dark mode support
 */

import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingPage() {
  const features = [
    {
      icon: Sparkles,
      title: "Beautiful Design",
      description: "Crafted with attention to detail, following Apple's design principles.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance with smooth 60fps animations.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with industry-leading security.",
    },
  ]

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-apple-gray-200 dark:border-apple-gray-800 bg-background-primary/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-8">
              <div className="text-headline font-semibold text-label-primary">
                Brand
              </div>
              <div className="hidden md:flex items-center gap-6">
                <a
                  href="#features"
                  className="text-body text-label-primary hover:text-apple-blue-500 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-body text-label-primary hover:text-apple-blue-500 transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-body text-label-primary hover:text-apple-blue-500 transition-colors"
                >
                  About
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button variant="tinted" size="sm">
                Sign In
              </Button>
              <Button size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-apple-blue-500/10 to-purple-500/10 dark:from-apple-blue-400/20 dark:to-purple-400/20" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-label-primary mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            Beautiful by design
          </h1>
          <p className="text-title-2 text-label-secondary mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Experience the power of simplicity with our Apple-inspired design system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="bordered" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-title-1 text-label-primary mb-4">
              Everything you need
            </h2>
            <p className="text-body text-label-secondary max-w-2xl mx-auto">
              Built with the best practices and modern technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-to-br from-apple-blue-500/5 to-purple-500/5 border-apple-gray-200 dark:border-apple-gray-800 hover:shadow-apple-md transition-all"
              >
                <div className="w-12 h-12 rounded-apple bg-apple-blue-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="mb-3">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-background-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-title-1 text-label-primary mb-4">
            Ready to get started?
          </h2>
          <p className="text-body text-label-secondary mb-8">
            Join thousands of users who have already made the switch
          </p>
          <Button size="lg">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-apple-gray-200 dark:border-apple-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-subheadline font-semibold text-label-primary mb-4">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-body text-label-secondary hover:text-apple-blue-500">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body text-label-secondary hover:text-apple-blue-500">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-subheadline font-semibold text-label-primary mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-body text-label-secondary hover:text-apple-blue-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body text-label-secondary hover:text-apple-blue-500">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-subheadline font-semibold text-label-primary mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-body text-label-secondary hover:text-apple-blue-500">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body text-label-secondary hover:text-apple-blue-500">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-subheadline font-semibold text-label-primary mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-body text-label-secondary hover:text-apple-blue-500">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body text-label-secondary hover:text-apple-blue-500">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-apple-gray-200 dark:border-apple-gray-800 text-center">
            <p className="text-footnote text-label-tertiary">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
