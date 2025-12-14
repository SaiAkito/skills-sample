---
name: apple-design
description: Apple-inspired design system for web applications using React, TypeScript, Tailwind CSS, and shadcn/ui. Use when building Apple-like web interfaces, implementing HIG principles on web, working with React components, Tailwind styling, shadcn/ui customization, or creating clean, minimal, accessibility-focused web applications with Apple aesthetics.
---

# Apple Design System for Web

A comprehensive design system bringing Apple's Human Interface Guidelines principles to web applications using React, TypeScript, Tailwind CSS, and shadcn/ui. Create clean, accessible, and delightful user experiences with Apple's design philosophy.

## When to Use This Skill

Use this skill when:
- Building web applications with Apple-inspired aesthetics
- Implementing React components following HIG principles
- Customizing shadcn/ui components for Apple-like appearance
- Configuring Tailwind CSS with Apple design tokens
- Creating accessible, inclusive web interfaces
- Supporting light/dark mode with Apple color systems
- Implementing smooth animations and transitions
- Designing minimal, content-focused layouts
- Building responsive web applications with Apple design patterns
- Reviewing web designs for Apple design consistency

## Core Design Principles

Apple's design philosophy adapted for the web:

### 1. Clarity
- Typography is legible and hierarchical
- Interface elements are crisp and purposeful
- White space creates breathing room
- Visual hierarchy guides attention
- Minimal decoration, maximum function

### 2. Deference
- Content is the priority, UI supports it
- Subtle animations enhance understanding
- Transparency and blur suggest depth
- Interface fades when content is in focus

### 3. Depth
- Layering creates visual hierarchy
- Shadows and elevation establish relationships
- Motion reinforces spatial awareness
- Transitions maintain context

## Design System Foundations

### Color System

Apple-inspired color palette with semantic tokens for Tailwind CSS:

**Tailwind Config Colors**:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // System Blues
        'apple-blue': {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b0ff',
          400: '#3396ff',
          500: '#007aff', // Primary iOS blue
          600: '#0062cc',
          700: '#004999',
          800: '#003166',
          900: '#001933',
        },
        // System Grays (Light Mode)
        'apple-gray': {
          50: '#f5f5f7',   // systemGray6
          100: '#e8e8ed',  // systemGray5
          200: '#d1d1d6',  // systemGray4
          300: '#c7c7cc',  // systemGray3
          400: '#aeaeb2',  // systemGray2
          500: '#8e8e93',  // systemGray
          600: '#636366',
          700: '#48484a',
          800: '#3a3a3c',
          900: '#1c1c1e',
        },
        // Semantic Colors
        background: {
          primary: 'var(--background-primary)',
          secondary: 'var(--background-secondary)',
          tertiary: 'var(--background-tertiary)',
        },
        label: {
          primary: 'var(--label-primary)',
          secondary: 'var(--label-secondary)',
          tertiary: 'var(--label-tertiary)',
          quaternary: 'var(--label-quaternary)',
        },
      },
    },
  },
}
```

**CSS Variables** (for dark mode support):
```css
/* globals.css */
:root {
  /* Light mode backgrounds */
  --background-primary: #ffffff;
  --background-secondary: #f5f5f7;
  --background-tertiary: #ffffff;

  /* Light mode labels */
  --label-primary: rgba(0, 0, 0, 0.85);
  --label-secondary: rgba(0, 0, 0, 0.55);
  --label-tertiary: rgba(0, 0, 0, 0.30);
  --label-quaternary: rgba(0, 0, 0, 0.18);

  /* System colors */
  --system-blue: #007aff;
  --system-green: #34c759;
  --system-red: #ff3b30;
  --system-orange: #ff9500;
  --system-yellow: #ffcc00;
}

.dark {
  /* Dark mode backgrounds */
  --background-primary: #000000;
  --background-secondary: #1c1c1e;
  --background-tertiary: #2c2c2e;

  /* Dark mode labels */
  --label-primary: rgba(255, 255, 255, 0.85);
  --label-secondary: rgba(255, 255, 255, 0.55);
  --label-tertiary: rgba(255, 255, 255, 0.30);
  --label-quaternary: rgba(255, 255, 255, 0.18);
}
```

**Reference**: [references/colors.md](references/colors.md)

### Typography

Apple uses the SF Pro family. For web, use system font stack with similar characteristics:

**Tailwind Config**:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'SF Pro Display',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        // Apple text styles
        'large-title': ['34px', { lineHeight: '41px', fontWeight: '700' }],
        'title-1': ['28px', { lineHeight: '34px', fontWeight: '700' }],
        'title-2': ['22px', { lineHeight: '28px', fontWeight: '700' }],
        'title-3': ['20px', { lineHeight: '25px', fontWeight: '600' }],
        'headline': ['17px', { lineHeight: '22px', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '22px', fontWeight: '400' }],
        'callout': ['16px', { lineHeight: '21px', fontWeight: '400' }],
        'subheadline': ['15px', { lineHeight: '20px', fontWeight: '400' }],
        'footnote': ['13px', { lineHeight: '18px', fontWeight: '400' }],
        'caption-1': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'caption-2': ['11px', { lineHeight: '13px', fontWeight: '400' }],
      },
    },
  },
}
```

**Usage in Components**:
```tsx
<h1 className="text-large-title text-label-primary">Page Title</h1>
<h2 className="text-title-1 text-label-primary">Section Header</h2>
<p className="text-body text-label-secondary">Body content goes here.</p>
<span className="text-footnote text-label-tertiary">Additional info</span>
```

**Reference**: [references/typography.md](references/typography.md)

### Spacing System

Apple uses an 8-point grid. Extend Tailwind's spacing:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '4.5': '18px',  // 4.5 * 4 = 18px
        '18': '72px',   // Custom large spacing
        '88': '352px',  // Custom extra large
      },
    },
  },
}
```

**Common Spacing Patterns**:
- Padding: `p-4` (16px), `p-6` (24px), `p-8` (32px)
- Gaps: `gap-2` (8px), `gap-4` (16px), `gap-6` (24px)
- Margins: `mt-8` (32px), `mb-12` (48px)

**Reference**: [references/spacing.md](references/spacing.md)

### Border Radius

Apple uses subtle, consistent corner rounding:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        'apple-sm': '6px',   // Small elements (badges, chips)
        'apple': '10px',      // Standard (buttons, cards)
        'apple-lg': '14px',   // Large cards
        'apple-xl': '20px',   // Modals, sheets
        'apple-2xl': '28px',  // Hero sections
      },
    },
  },
}
```

### Shadows and Elevation

Subtle shadows for depth:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'apple-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'apple': '0 1px 10px 0 rgba(0, 0, 0, 0.08)',
        'apple-md': '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
        'apple-lg': '0 8px 32px 0 rgba(0, 0, 0, 0.14)',
        'apple-xl': '0 12px 48px 0 rgba(0, 0, 0, 0.18)',
      },
    },
  },
}
```

## Customizing shadcn/ui for Apple Design

shadcn/ui components can be styled to match Apple aesthetics:

### Button Component

Customize `components/ui/button.tsx`:

```tsx
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-apple font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled: "bg-apple-blue-500 text-white hover:bg-apple-blue-600 active:scale-95",
        tinted: "bg-apple-blue-500/10 text-apple-blue-500 hover:bg-apple-blue-500/20",
        bordered: "border-2 border-apple-gray-300 dark:border-apple-gray-700 text-label-primary hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800",
        plain: "text-apple-blue-500 hover:bg-apple-blue-500/10",
        destructive: "bg-red-500 text-white hover:bg-red-600",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6 text-body",
        lg: "h-14 px-8 text-headline",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  }
)

export { buttonVariants }
```

**Usage**:
```tsx
<Button variant="filled">Primary Action</Button>
<Button variant="tinted">Secondary Action</Button>
<Button variant="bordered">Tertiary Action</Button>
<Button variant="plain">Text Button</Button>
```

### Card Component

Apple-style card with subtle elevation:

```tsx
// components/ui/card.tsx
<div className="rounded-apple-lg bg-background-secondary p-6 shadow-apple">
  <h3 className="text-title-3 text-label-primary mb-2">Card Title</h3>
  <p className="text-body text-label-secondary">Card content goes here.</p>
</div>
```

### Input Component

Clean, minimal input styling:

```tsx
// components/ui/input.tsx
<input
  className="w-full h-11 px-4 rounded-apple bg-background-tertiary border border-apple-gray-300 dark:border-apple-gray-700 text-body text-label-primary placeholder:text-label-tertiary focus:outline-none focus:ring-2 focus:ring-apple-blue-500 transition-all"
  placeholder="Enter text..."
/>
```

**Reference**: [references/components.md](references/components.md)

## Layout Patterns

### Navigation Bar

Apple-style top navigation:

```tsx
// components/navigation/navbar.tsx
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-apple-gray-200 dark:border-apple-gray-800 bg-background-primary/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-8">
            <Logo />
            <NavLinks />
          </div>
          <div className="flex items-center gap-4">
            <SearchButton />
            <ThemeToggle />
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
```

### Sidebar Layout

macOS-inspired sidebar navigation:

```tsx
// components/layout/sidebar-layout.tsx
export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background-primary">
      {/* Sidebar */}
      <aside className="w-64 border-r border-apple-gray-200 dark:border-apple-gray-800 bg-background-secondary">
        <div className="p-4">
          <SidebarNav />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
```

### Modal/Sheet

Apple-style modal presentation:

```tsx
// components/ui/modal.tsx
export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] rounded-apple-xl bg-background-primary border border-apple-gray-200 dark:border-apple-gray-800 shadow-apple-xl">
        {children}
      </DialogContent>
    </Dialog>
  )
}
```

## Animations and Transitions

Apple interfaces feel fluid and responsive. Use these motion principles:

### Transition Timing

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        'apple': '300ms',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0.0, 0.2, 1)', // Apple's easing curve
      },
    },
  },
}
```

### Common Animations

```tsx
// Hover scale effect (buttons, cards)
<button className="transition-transform duration-apple ease-apple hover:scale-[1.02] active:scale-95">
  Click me
</button>

// Fade in animation
<div className="animate-in fade-in duration-apple">
  Content
</div>

// Slide up animation (modals)
<div className="animate-in slide-in-from-bottom duration-apple ease-apple">
  Modal content
</div>
```

**Framer Motion** for complex animations:

```tsx
import { motion } from "framer-motion"

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
>
  Animated content
</motion.div>
```

**Reference**: [references/animations.md](references/animations.md)

## Accessibility

Ensure inclusive design following WCAG standards:

### Color Contrast

- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text (18pt+)**: Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio

Test with browser DevTools or tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

### Keyboard Navigation

```tsx
// Proper focus management
<button
  className="focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:ring-offset-2 rounded-apple"
  aria-label="Submit form"
>
  Submit
</button>

// Skip to main content link
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50"
>
  Skip to main content
</a>
```

### ARIA Labels

```tsx
<button aria-label="Close modal" aria-pressed={isPressed}>
  <XIcon className="w-5 h-5" />
</button>

<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="/">Home</a></li>
  </ul>
</nav>
```

### Screen Reader Support

```tsx
// Announce dynamic content changes
<div role="status" aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>

// Hidden content for screen readers only
<span className="sr-only">Loading...</span>
```

**Reference**: [references/accessibility.md](references/accessibility.md)

## Dark Mode Implementation

Use Tailwind's dark mode with class strategy:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ... rest of config
}
```

**Theme Toggle Component**:

```tsx
// components/theme-toggle.tsx
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-apple hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}
```

**Reference**: [references/dark-mode.md](references/dark-mode.md)

## Instructions

When implementing Apple-inspired web designs:

1. **Setup Project Configuration**
   - Configure Tailwind with Apple design tokens
   - Install and configure shadcn/ui components
   - Setup CSS variables for semantic colors
   - Configure dark mode strategy

2. **Apply Design Foundations**
   - Use system font stack for typography
   - Implement 8-point spacing grid
   - Apply consistent border radius (rounded-apple)
   - Use subtle shadows for elevation

3. **Customize shadcn/ui Components**
   - Modify button variants for Apple styles
   - Adjust card, input, and dialog components
   - Ensure consistent styling across components
   - Reference [references/components.md](references/components.md)

4. **Implement Layouts**
   - Create responsive navigation patterns
   - Use semantic HTML structure
   - Implement proper spacing and hierarchy
   - Ensure mobile-first responsive design

5. **Add Motion and Interaction**
   - Use Apple's easing curves for transitions
   - Implement subtle hover and active states
   - Add loading and state change animations
   - Maintain 60fps performance

6. **Ensure Accessibility**
   - Add proper ARIA labels and roles
   - Implement keyboard navigation
   - Test color contrast ratios
   - Support screen readers

7. **Test Across Conditions**
   - Light and dark modes
   - Various viewport sizes
   - Keyboard-only navigation
   - Screen reader compatibility
   - Different browsers (Safari, Chrome, Firefox)

## Examples

### Example 1: Product Card Component

```tsx
// components/product-card.tsx
import { Star } from "lucide-react"

interface ProductCardProps {
  title: string
  price: number
  rating: number
  image: string
}

export function ProductCard({ title, price, rating, image }: ProductCardProps) {
  return (
    <div className="group rounded-apple-lg bg-background-secondary overflow-hidden shadow-apple transition-all hover:shadow-apple-md">
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-apple-gray-100 dark:bg-apple-gray-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-apple group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-headline text-label-primary mb-1 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-subheadline text-label-secondary">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-title-3 text-label-primary font-semibold">
            ${price.toFixed(2)}
          </span>
          <button className="px-4 py-2 rounded-apple bg-apple-blue-500 text-white text-subheadline font-medium hover:bg-apple-blue-600 active:scale-95 transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
```

### Example 2: Form with Apple Styling

```tsx
// components/auth-form.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AuthForm() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-apple-xl bg-background-secondary p-8 shadow-apple-lg">
        <h2 className="text-title-1 text-label-primary mb-6 text-center">
          Sign In
        </h2>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-subheadline text-label-secondary">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="h-11 rounded-apple bg-background-tertiary border-apple-gray-300 dark:border-apple-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-subheadline text-label-secondary">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="h-11 rounded-apple bg-background-tertiary border-apple-gray-300 dark:border-apple-gray-700"
            />
          </div>

          <Button
            type="submit"
            variant="filled"
            className="w-full h-11 mt-6"
          >
            Sign In
          </Button>

          <button
            type="button"
            className="w-full text-center text-subheadline text-apple-blue-500 hover:underline"
          >
            Forgot password?
          </button>
        </form>
      </div>
    </div>
  )
}
```

### Example 3: Settings List (iOS-inspired)

```tsx
// components/settings-list.tsx
import { ChevronRight } from "lucide-react"

interface SettingItem {
  icon: React.ReactNode
  label: string
  value?: string
  onClick: () => void
}

export function SettingsList({ items }: { items: SettingItem[] }) {
  return (
    <div className="rounded-apple-lg bg-background-secondary overflow-hidden divide-y divide-apple-gray-200 dark:divide-apple-gray-800">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800 transition-colors"
        >
          <div className="text-apple-blue-500">{item.icon}</div>
          <span className="flex-1 text-left text-body text-label-primary">
            {item.label}
          </span>
          {item.value && (
            <span className="text-body text-label-tertiary">{item.value}</span>
          )}
          <ChevronRight className="w-5 h-5 text-label-quaternary" />
        </button>
      ))}
    </div>
  )
}
```

### Example 4: Hero Section with Blur Effect

```tsx
// components/hero-section.tsx
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-apple-blue-500/20 to-purple-500/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-label-primary mb-6 animate-in fade-in slide-in-from-bottom duration-700">
          Beautiful by design
        </h1>
        <p className="text-title-2 text-label-secondary mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
          Experience the power of simplicity
        </p>
        <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <Button variant="filled" size="lg">
            Get Started
          </Button>
          <Button variant="bordered" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
```

## Best Practices

### Design
- Prioritize content over decorative elements
- Use consistent spacing from the 8-point grid
- Apply subtle animations (300ms duration)
- Maintain visual hierarchy with typography scale
- Keep interfaces clean and uncluttered

### Implementation
- Use Tailwind's utility classes for consistent styling
- Leverage CSS variables for theme-able properties
- Implement mobile-first responsive design
- Optimize images with next/image or similar
- Use semantic HTML elements

### Performance
- Lazy load images and heavy components
- Minimize layout shifts (use proper sizing)
- Optimize bundle size (tree-shaking, code splitting)
- Use CSS transforms for animations (GPU-accelerated)
- Implement proper caching strategies

### Accessibility
- Maintain 4.5:1 contrast ratios minimum
- Support keyboard navigation throughout
- Add proper ARIA labels and roles
- Test with screen readers (NVDA, VoiceOver)
- Ensure focus indicators are visible

### Dark Mode
- Use CSS variables for theme-able colors
- Test all components in both modes
- Avoid hard-coded color values
- Adjust shadows for dark backgrounds
- Maintain contrast in both themes

## Common Patterns

### List with Dividers (iOS-style)

```tsx
<ul className="rounded-apple-lg bg-background-secondary divide-y divide-apple-gray-200 dark:divide-apple-gray-800 overflow-hidden">
  {items.map((item) => (
    <li key={item.id} className="px-4 py-3 hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800">
      {item.content}
    </li>
  ))}
</ul>
```

### Toast Notification

```tsx
<div className="fixed top-4 right-4 z-50 rounded-apple-lg bg-background-secondary shadow-apple-xl border border-apple-gray-200 dark:border-apple-gray-800 p-4 animate-in slide-in-from-top duration-apple">
  <p className="text-body text-label-primary">Action completed successfully</p>
</div>
```

### Loading Spinner (Apple-style)

```tsx
<div className="w-6 h-6 border-2 border-apple-gray-300 border-t-apple-blue-500 rounded-full animate-spin" />
```

## Troubleshooting

**Issue**: Dark mode colors don't switch properly
**Solution**: Ensure `darkMode: 'class'` in tailwind.config.js and use CSS variables with dark: variants

**Issue**: Fonts don't look like Apple's
**Solution**: Verify system font stack is first in font-family array. Use `-apple-system, BlinkMacSystemFont` at the start

**Issue**: Animations feel janky or slow
**Solution**: Use CSS transforms instead of layout properties, check for 60fps in DevTools Performance tab

**Issue**: Buttons don't have proper touch targets on mobile
**Solution**: Ensure minimum 44px height (`h-11` = 44px) for interactive elements

**Issue**: Components don't match Apple aesthetic
**Solution**: Reduce visual complexity, increase white space, use subtle shadows, and softer border radius

## AI Assistant Instructions

When this skill is activated:

1. **Always use React + TypeScript** for component examples
2. **Use Tailwind CSS utility classes** with Apple design tokens
3. **Reference shadcn/ui components** as the foundation, customize for Apple styling
4. **Include dark mode support** using CSS variables and `dark:` variants
5. **Ensure accessibility** with proper ARIA attributes and keyboard support
6. **Use Apple's design language**: clean, minimal, content-focused
7. **Reference appropriate documentation**:
   - [references/colors.md](references/colors.md) for color systems
   - [references/typography.md](references/typography.md) for text styles
   - [references/spacing.md](references/spacing.md) for layout
   - [references/components.md](references/components.md) for UI components
   - [references/accessibility.md](references/accessibility.md) for a11y
   - [references/dark-mode.md](references/dark-mode.md) for theming
   - [references/animations.md](references/animations.md) for motion

Always:
- Use semantic color variables (CSS vars)
- Support both light and dark modes
- Implement proper TypeScript types
- Include accessibility attributes (aria-*, role)
- Use Apple's transition timing (300ms, ease-apple)
- Apply consistent border radius (rounded-apple)
- Maintain 8-point spacing grid
- Test responsive behavior

Never:
- Use hard-coded color hex values
- Skip dark mode variants
- Ignore accessibility requirements
- Over-animate (keep subtle and purposeful)
- Use non-semantic HTML elements
- Create overly complex designs
- Skip keyboard navigation support

## Additional Resources

### Official Apple Resources
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Apple Design Resources](https://developer.apple.com/design/resources/)
- [SF Symbols](https://developer.apple.com/sf-symbols/) (inspiration for icons)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### shadcn/ui
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Component Examples](https://ui.shadcn.com/examples)

### React & TypeScript
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Accessibility
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Resources](https://webaim.org/resources/)
- [A11y Project](https://www.a11yproject.com/)

### Design Inspiration
- [Apple.com](https://www.apple.com/) - Study their web design
- [Dribbble Apple Tag](https://dribbble.com/tags/apple) - Community designs
