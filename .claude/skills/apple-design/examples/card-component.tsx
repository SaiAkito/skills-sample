/**
 * Apple-styled Card Component
 *
 * Flexible card component with variants for different use cases,
 * following Apple's design principles for elevation and spacing.
 */

import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-apple-lg bg-background-secondary border border-apple-gray-200 dark:border-apple-gray-800 shadow-apple",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-title-3 font-semibold text-label-primary", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-callout text-label-secondary", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

/**
 * Usage Examples:
 *
 * // Basic card
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Card description goes here</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <p>Card content</p>
 *   </CardContent>
 *   <CardFooter>
 *     <Button>Action</Button>
 *   </CardFooter>
 * </Card>
 *
 * // Product card
 * <Card className="overflow-hidden">
 *   <div className="aspect-square bg-apple-gray-100 dark:bg-apple-gray-800">
 *     <img src="/product.jpg" alt="Product" className="w-full h-full object-cover" />
 *   </div>
 *   <CardHeader>
 *     <CardTitle>Product Name</CardTitle>
 *     <CardDescription>$99.99</CardDescription>
 *   </CardHeader>
 *   <CardFooter>
 *     <Button className="w-full">Add to Cart</Button>
 *   </CardFooter>
 * </Card>
 *
 * // Feature card
 * <Card className="p-8 bg-gradient-to-br from-apple-blue-500/10 to-purple-500/10">
 *   <div className="w-12 h-12 rounded-apple bg-apple-blue-500 flex items-center justify-center mb-4">
 *     <Icon className="w-6 h-6 text-white" />
 *   </div>
 *   <CardTitle className="mb-3">Feature Title</CardTitle>
 *   <CardDescription>
 *     Description of the feature and its benefits.
 *   </CardDescription>
 * </Card>
 *
 * // Hoverable card
 * <Card className="group transition-all hover:shadow-apple-md cursor-pointer">
 *   <CardHeader>
 *     <CardTitle className="group-hover:text-apple-blue-500 transition-colors">
 *       Interactive Card
 *     </CardTitle>
 *   </CardHeader>
 * </Card>
 */
