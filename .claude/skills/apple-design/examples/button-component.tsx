/**
 * Apple-styled Button Component
 *
 * A comprehensive button component following Apple's HIG with multiple variants,
 * sizes, and full accessibility support.
 */

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-apple font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled:
          "bg-apple-blue-500 text-white hover:bg-apple-blue-600 active:scale-95",
        tinted:
          "bg-apple-blue-500/10 text-apple-blue-500 hover:bg-apple-blue-500/20 active:scale-95",
        bordered:
          "border-2 border-apple-gray-300 dark:border-apple-gray-700 text-label-primary hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800 active:scale-95",
        plain:
          "text-apple-blue-500 hover:bg-apple-blue-500/10 active:scale-95",
        destructive:
          "bg-apple-red-500 text-white hover:bg-apple-red-600 active:scale-95",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6 text-body",
        lg: "h-14 px-8 text-headline",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

/**
 * Usage Examples:
 *
 * // Primary action
 * <Button variant="filled">Save Changes</Button>
 *
 * // Secondary action
 * <Button variant="tinted">Learn More</Button>
 *
 * // Tertiary action
 * <Button variant="bordered">Cancel</Button>
 *
 * // Text button
 * <Button variant="plain">Skip</Button>
 *
 * // Destructive action
 * <Button variant="destructive">Delete Account</Button>
 *
 * // Small button
 * <Button size="sm">Small</Button>
 *
 * // Large button
 * <Button size="lg">Large Button</Button>
 *
 * // Icon button
 * <Button size="icon" aria-label="Settings">
 *   <Settings className="w-5 h-5" />
 * </Button>
 *
 * // Button with icon
 * <Button>
 *   <Plus className="w-5 h-5 mr-2" />
 *   Add Item
 * </Button>
 *
 * // Disabled button
 * <Button disabled>Disabled</Button>
 */
