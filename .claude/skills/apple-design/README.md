# Apple Design System for Web Applications

A comprehensive design system bringing Apple's Human Interface Guidelines to web applications using React, TypeScript, Tailwind CSS, and shadcn/ui.

## Overview

This skill provides complete design resources for building Apple-inspired web applications with:
- Apple's color palette adapted for web
- SF Pro-inspired typography system
- 8-point spacing grid
- Apple-style components and patterns
- Full dark mode support
- Accessibility best practices (WCAG 2.1 AA+)
- Smooth animations following Apple's motion principles

## Quick Start

### 1. Install Dependencies

```bash
npm install tailwindcss postcss autoprefixer
npm install -D @tailwindcss/forms @tailwindcss/typography tailwindcss-animate
npm install next-themes framer-motion
npm install class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-slot
npm install lucide-react
```

### 2. Configure Tailwind CSS

Copy the complete Tailwind configuration:

```bash
# Use the configuration from templates/tailwind.config.js
cp ~/.claude/skills/apple-design/templates/tailwind.config.js ./tailwind.config.js
```

### 3. Setup Global Styles

Copy the global CSS file:

```bash
# Use the styles from templates/globals.css
cp ~/.claude/skills/apple-design/templates/globals.css ./app/globals.css
```

### 4. Add Theme Provider (Next.js)

```tsx
// app/providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}

// app/layout.tsx
import { Providers } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

## Structure

```
apple-design/
├── SKILL.md                          # Main skill file
├── README.md                         # This file
├── references/                       # Detailed design references
│   ├── colors.md                     # Color system and palette
│   ├── typography.md                 # Text styles and hierarchy
│   ├── spacing.md                    # Spacing, layout, and grid
│   ├── components.md                 # UI component specifications
│   ├── accessibility.md              # A11y guidelines
│   ├── dark-mode.md                  # Dark mode implementation
│   └── animations.md                 # Motion and transitions
├── examples/                         # Example components
│   ├── button-component.tsx          # Button variants
│   └── card-component.tsx            # Card component
└── templates/                        # Full page templates
    ├── landing-page.tsx              # Landing page example
    ├── dashboard.tsx                 # Dashboard layout
    ├── tailwind.config.js            # Complete Tailwind config
    └── globals.css                   # Global styles with CSS variables
```

## Design Foundations

### Colors

- **System Colors**: Blue, Green, Red, Orange, Yellow with full tonal ranges
- **Semantic Colors**: CSS variables that auto-adapt to light/dark mode
- **Gray Scale**: 10 shades from lightest (#f5f5f7) to darkest (#1c1c1e)

See [references/colors.md](references/colors.md) for complete color documentation.

### Typography

Apple-inspired text styles with proper hierarchy:
- Large Title: 34px (hero headings)
- Title 1-3: 28px, 22px, 20px (section headers)
- Headline: 17px semibold (content headings)
- Body: 17px (main content)
- Callout, Subheadline: 16px, 15px (secondary text)
- Footnote, Captions: 13px, 12px, 11px (auxiliary text)

See [references/typography.md](references/typography.md) for typography details.

### Spacing

8-point grid system with consistent spacing:
- Base unit: 4px (1 in Tailwind)
- Common values: 8px, 16px, 24px, 32px, 48px
- Touch targets: Minimum 44×44px on mobile

See [references/spacing.md](references/spacing.md) for spacing guidelines.

## Components

### Button Variants

- **Filled**: Primary actions (blue background, white text)
- **Tinted**: Secondary actions (10% blue background, blue text)
- **Bordered**: Tertiary actions (border outline, neutral)
- **Plain**: Text-only buttons (no background)
- **Destructive**: Dangerous actions (red background)

Example:
```tsx
import { Button } from "@/components/ui/button"

<Button variant="filled">Primary Action</Button>
<Button variant="tinted">Secondary Action</Button>
<Button variant="bordered">Tertiary Action</Button>
<Button variant="plain">Text Button</Button>
<Button variant="destructive">Delete</Button>
```

See [references/components.md](references/components.md) for all components.

## Dark Mode

Automatic dark mode support using semantic color variables:

```tsx
// Text automatically adapts
<p className="text-label-primary">Main text</p>
<p className="text-label-secondary">Secondary text</p>

// Backgrounds automatically adapt
<div className="bg-background-primary">Page background</div>
<div className="bg-background-secondary">Card background</div>

// Manual dark mode variants
<div className="bg-white dark:bg-black">Explicit colors</div>
```

See [references/dark-mode.md](references/dark-mode.md) for implementation details.

## Accessibility

Built-in accessibility features:
- WCAG 2.1 AA+ compliant color contrast
- Semantic HTML elements
- ARIA attributes for screen readers
- Keyboard navigation support
- Minimum 44×44px touch targets
- Reduced motion support

See [references/accessibility.md](references/accessibility.md) for guidelines.

## Animations

Smooth, purposeful animations following Apple's motion principles:

```tsx
// Hover effects
<button className="transition-transform duration-200 hover:scale-105 active:scale-95">
  Hover me
</button>

// Fade in
<div className="animate-in fade-in duration-300">
  Content
</div>

// Slide up (modals, sheets)
<div className="animate-in slide-in-from-bottom duration-300">
  Modal
</div>
```

See [references/animations.md](references/animations.md) for motion design.

## Examples

### Landing Page

See [templates/landing-page.tsx](templates/landing-page.tsx) for a complete landing page with:
- Glassmorphism navigation
- Hero section with gradient background
- Feature cards
- Responsive grid layouts
- Footer

### Dashboard

See [templates/dashboard.tsx](templates/dashboard.tsx) for a dashboard with:
- Sidebar navigation (macOS-style)
- Stats cards
- Charts and data visualization
- Activity feed
- Quick actions

## Best Practices

### Design
- Prioritize content over decorative elements
- Use consistent spacing from 8-point grid
- Apply subtle animations (300ms default)
- Maintain visual hierarchy with typography scale
- Keep interfaces clean and uncluttered

### Implementation
- Use Tailwind utility classes for consistency
- Leverage CSS variables for theme-able properties
- Implement mobile-first responsive design
- Optimize images and lazy load when possible
- Use semantic HTML elements

### Performance
- Lazy load heavy components
- Minimize layout shifts
- Optimize bundle size (tree-shaking, code splitting)
- Use CSS transforms for animations (GPU-accelerated)
- Implement proper caching strategies

### Accessibility
- Maintain 4.5:1 contrast ratios minimum
- Support keyboard navigation throughout
- Add proper ARIA labels and roles
- Test with screen readers
- Ensure focus indicators are visible

## Resources

### Official Apple Resources
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Apple Design Resources](https://developer.apple.com/design/resources/)
- [SF Symbols](https://developer.apple.com/sf-symbols/)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### shadcn/ui
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Component Examples](https://ui.shadcn.com/examples)

### Accessibility
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Resources](https://webaim.org/resources/)
- [A11y Project](https://www.a11yproject.com/)

## License

This design system is inspired by Apple's Human Interface Guidelines for educational and development purposes. Apple, macOS, iOS, watchOS, and tvOS are trademarks of Apple Inc.

## Contributing

This is a Claude Code skill. To customize or extend:

1. Edit files in `~/.claude/skills/apple-design/`
2. Modify references for specific needs
3. Add new examples or templates
4. Update SKILL.md with new patterns

## Support

For questions about using this skill with Claude Code, refer to the [Claude Code documentation](https://github.com/anthropics/claude-code).
