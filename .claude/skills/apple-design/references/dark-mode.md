# Apple Design System - Dark Mode Reference

Comprehensive guide to implementing dark mode in web applications following Apple's design philosophy.

## Dark Mode Philosophy

Apple's approach to dark mode:
1. **Not just inverted colors** - Carefully crafted color palette
2. **Maintains hierarchy** - Contrast and relationships preserved
3. **Comfortable viewing** - Optimized for low-light environments
4. **True blacks sparingly** - Uses dark grays for less eye strain
5. **Content first** - UI recedes, content remains prominent

## Setup

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // Use class-based dark mode
  theme: {
    extend: {
      // Your theme extensions
    },
  },
}
```

### Next.js + next-themes Setup

```bash
npm install next-themes
```

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
```

```tsx
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

## Color System

### Background Colors

Dark mode uses elevated backgrounds for hierarchy:

```css
/* globals.css */
:root {
  /* Light mode */
  --background-primary: #ffffff;     /* Base background */
  --background-secondary: #f5f5f7;   /* Elevated cards */
  --background-tertiary: #ffffff;    /* Input fields */
}

.dark {
  /* Dark mode */
  --background-primary: #000000;     /* Base (true black for OLED) */
  --background-secondary: #1c1c1e;   /* Elevated cards */
  --background-tertiary: #2c2c2e;    /* Input fields, higher elevation */
}
```

**Usage**:
```tsx
// Automatically adapts
<div className="bg-background-primary">Base</div>
<div className="bg-background-secondary">Elevated</div>
<div className="bg-background-tertiary">Higher elevation</div>

// Manual dark mode override
<div className="bg-white dark:bg-black">Explicit colors</div>
```

### Text (Label) Colors

Opacity-based text colors maintain hierarchy:

```css
:root {
  /* Light mode */
  --label-primary: rgba(0, 0, 0, 0.85);       /* Main text */
  --label-secondary: rgba(0, 0, 0, 0.55);     /* Secondary text */
  --label-tertiary: rgba(0, 0, 0, 0.30);      /* Tertiary text */
  --label-quaternary: rgba(0, 0, 0, 0.18);    /* Placeholders */
}

.dark {
  /* Dark mode */
  --label-primary: rgba(255, 255, 255, 0.85);
  --label-secondary: rgba(255, 255, 255, 0.55);
  --label-tertiary: rgba(255, 255, 255, 0.30);
  --label-quaternary: rgba(255, 255, 255, 0.18);
}
```

**Usage**:
```tsx
<h1 className="text-label-primary">Main Heading</h1>
<p className="text-label-secondary">Description</p>
<span className="text-label-tertiary">Metadata</span>
```

### System Colors

Adjust vibrancy for dark mode:

```tsx
// Blue - slightly brighter in dark mode
<button className="bg-apple-blue-500 dark:bg-apple-blue-400 text-white">
  Primary Action
</button>

// Green - adjusted for dark backgrounds
<span className="text-apple-green-500 dark:text-apple-green-400">
  Success
</span>

// Red - more vibrant in dark mode
<div className="bg-apple-red-500 dark:bg-apple-red-400 text-white">
  Error
</div>
```

### Borders and Separators

```css
:root {
  --separator-opaque: #c6c6c8;
  --separator-nonOpaque: rgba(60, 60, 67, 0.36);
}

.dark {
  --separator-opaque: #38383a;
  --separator-nonOpaque: rgba(84, 84, 88, 0.65);
}
```

**Usage**:
```tsx
// Opaque separator
<hr className="border-t border-[var(--separator-opaque)]" />

// Semi-transparent separator
<div className="divide-y divide-[var(--separator-nonOpaque)]">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Tailwind utilities
<div className="border border-apple-gray-300 dark:border-apple-gray-800">
  Card with border
</div>
```

## Elevation and Depth

Dark mode uses subtle background changes instead of heavy shadows:

### Shadow Adjustments

```css
/* Light mode: Prominent shadows */
.shadow-apple {
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.08);
}

.dark .shadow-apple {
  /* Lighter shadow, more subtle in dark mode */
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.3);
}
```

### Elevation Layers

```tsx
// Base layer
<div className="bg-background-primary">
  Page background
</div>

// Elevated layer (cards)
<div className="bg-background-secondary shadow-apple">
  Card content
</div>

// Higher elevation (modals)
<div className="bg-background-tertiary shadow-apple-lg">
  Modal content
</div>
```

### Glassmorphism Effect

Apple's signature frosted glass effect:

```tsx
<div className="bg-background-primary/80 backdrop-blur-xl border border-apple-gray-200 dark:border-apple-gray-800">
  Translucent UI
</div>

// Navigation bar with blur
<nav className="sticky top-0 bg-background-primary/80 backdrop-blur-xl border-b border-apple-gray-200 dark:border-apple-gray-800">
  Navigation
</nav>
```

## Component Adaptations

### Buttons

```tsx
// Filled button
<button className="bg-apple-blue-500 dark:bg-apple-blue-600 text-white hover:bg-apple-blue-600 dark:hover:bg-apple-blue-700">
  Primary
</button>

// Tinted button
<button className="bg-apple-blue-500/10 dark:bg-apple-blue-400/20 text-apple-blue-500 dark:text-apple-blue-400 hover:bg-apple-blue-500/20 dark:hover:bg-apple-blue-400/30">
  Secondary
</button>

// Bordered button
<button className="border-2 border-apple-gray-300 dark:border-apple-gray-700 text-label-primary hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800">
  Tertiary
</button>
```

### Inputs

```tsx
<input
  type="text"
  placeholder="Enter text..."
  className="w-full h-11 px-4 rounded-apple bg-background-tertiary border border-apple-gray-300 dark:border-apple-gray-700 text-label-primary placeholder:text-label-tertiary focus:ring-2 focus:ring-apple-blue-500"
/>
```

### Cards

```tsx
<div className="rounded-apple-lg bg-background-secondary border border-apple-gray-200 dark:border-apple-gray-800 p-6 shadow-apple">
  <h3 className="text-title-3 text-label-primary mb-2">Card Title</h3>
  <p className="text-body text-label-secondary">Card content with proper dark mode support.</p>
</div>
```

### Lists

```tsx
<ul className="rounded-apple-lg bg-background-secondary divide-y divide-separator-nonOpaque overflow-hidden">
  {items.map((item) => (
    <li
      key={item.id}
      className="px-4 py-3 hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800 transition-colors"
    >
      <span className="text-body text-label-primary">{item.name}</span>
    </li>
  ))}
</ul>
```

## Theme Toggle Component

### Simple Toggle

```tsx
'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-11 h-11 flex items-center justify-center rounded-apple hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}
```

### Advanced Toggle with System Option

```tsx
'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Menu } from '@headlessui/react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const themes = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ]

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="w-11 h-11 flex items-center justify-center rounded-apple hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800">
        {theme === 'light' && <Sun className="h-5 w-5" />}
        {theme === 'dark' && <Moon className="h-5 w-5" />}
        {theme === 'system' && <Monitor className="h-5 w-5" />}
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-48 rounded-apple-lg bg-background-primary shadow-apple-md border border-apple-gray-200 dark:border-apple-gray-800 py-1 focus:outline-none">
        {themes.map(({ value, label, icon: Icon }) => (
          <Menu.Item key={value}>
            {({ active }) => (
              <button
                onClick={() => setTheme(value)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2 text-body text-label-primary",
                  active && "bg-apple-gray-100 dark:bg-apple-gray-800",
                  theme === value && "text-apple-blue-500"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
                {theme === value && <Check className="w-4 h-4 ml-auto" />}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}
```

## Images and Media

### Image Adaptation

```tsx
// Filter images in dark mode for better integration
<img
  src="/photo.jpg"
  alt="Description"
  className="rounded-apple-lg dark:brightness-90 dark:contrast-95"
/>

// Provide different images for light/dark
<picture>
  <source srcSet="/hero-dark.jpg" media="(prefers-color-scheme: dark)" />
  <img src="/hero-light.jpg" alt="Hero image" />
</picture>
```

### Icon Colors

```tsx
// Adapt icon colors
<Icon className="text-apple-gray-600 dark:text-apple-gray-400" />

// System blue that works in both modes
<Icon className="text-apple-blue-500" />
```

## Gradients

```tsx
// Gradient that adapts to dark mode
<div className="bg-gradient-to-br from-apple-blue-500/20 to-purple-500/20 dark:from-apple-blue-400/30 dark:to-purple-400/30">
  Gradient background
</div>

// Light mode only gradient, solid in dark mode
<div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:bg-apple-gray-900">
  Conditional gradient
</div>
```

## Testing Dark Mode

### Manual Testing

1. **Toggle between modes** - Ensure smooth transitions
2. **Check contrast** - Text remains readable
3. **Verify colors** - System colors adapt appropriately
4. **Test images** - Media integrates well
5. **Check shadows** - Not too harsh in dark mode

### Automated Testing

```tsx
import { render } from '@testing-library/react'

test('Component renders correctly in dark mode', () => {
  document.documentElement.classList.add('dark')

  const { container } = render(<MyComponent />)

  // Assert dark mode styles are applied
  expect(container.firstChild).toHaveClass('dark:bg-background-primary')

  document.documentElement.classList.remove('dark')
})
```

### Contrast Verification

Use browser DevTools:
1. Inspect element
2. Accessibility tab
3. Check contrast ratios in both modes
4. Ensure minimum 4.5:1 for text

## Common Patterns

### Hero Section

```tsx
<section className="relative min-h-screen flex items-center justify-center bg-background-primary">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-apple-blue-500/10 to-purple-500/10 dark:from-apple-blue-400/20 dark:to-purple-400/20" />

  {/* Content */}
  <div className="relative z-10 text-center">
    <h1 className="text-6xl font-bold text-label-primary mb-4">
      Hero Title
    </h1>
    <p className="text-title-2 text-label-secondary">
      Subtitle text
    </p>
  </div>
</section>
```

### Navigation

```tsx
<nav className="sticky top-0 z-50 bg-background-primary/80 backdrop-blur-xl border-b border-apple-gray-200 dark:border-apple-gray-800">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-14">
      <Logo className="text-label-primary" />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="h-9 px-4 rounded-apple bg-apple-blue-500 text-white">
          Sign In
        </button>
      </div>
    </div>
  </div>
</nav>
```

### Form

```tsx
<form className="max-w-md mx-auto p-8 rounded-apple-xl bg-background-secondary border border-apple-gray-200 dark:border-apple-gray-800 shadow-apple-lg">
  <h2 className="text-title-2 text-label-primary mb-6">Sign In</h2>

  <div className="space-y-4">
    <div>
      <label className="block text-subheadline text-label-secondary mb-2">
        Email
      </label>
      <input
        type="email"
        className="w-full h-11 px-4 rounded-apple bg-background-tertiary border border-apple-gray-300 dark:border-apple-gray-700 text-label-primary"
      />
    </div>

    <button className="w-full h-11 rounded-apple bg-apple-blue-500 text-white hover:bg-apple-blue-600">
      Submit
    </button>
  </div>
</form>
```

## Best Practices

### Do's
- ✅ Use semantic color variables (CSS custom properties)
- ✅ Test all components in both modes
- ✅ Maintain proper contrast ratios (WCAG AA minimum)
- ✅ Use subtle shadows in dark mode
- ✅ Adjust image brightness/contrast for dark mode
- ✅ Provide system theme option
- ✅ Use `dark:` variants for all color utilities
- ✅ Test with real content (not just placeholders)

### Don'ts
- ❌ Don't just invert colors
- ❌ Don't use pure black (#000) for everything
- ❌ Don't forget to test contrast
- ❌ Don't use heavy shadows in dark mode
- ❌ Don't ignore images and media
- ❌ Don't hard-code colors
- ❌ Don't forget focus indicators in dark mode
- ❌ Don't assume all users want auto-detect

## Debugging Dark Mode

### Common Issues

**Issue**: Flickering on page load (FOUC)
```tsx
// Solution: Add suppressHydrationWarning to html tag
<html lang="en" suppressHydrationWarning>
```

**Issue**: Colors don't switch
```tsx
// Check: Is darkMode: 'class' in tailwind.config.js?
// Check: Is ThemeProvider wrapping your app?
// Check: Are you using dark: variants?
```

**Issue**: Poor contrast in dark mode
```tsx
// Solution: Adjust color values
<p className="text-apple-gray-700 dark:text-apple-gray-300">
  Now has proper contrast in both modes
</p>
```

## Resources

- [next-themes Documentation](https://github.com/pacocoursey/next-themes)
- [Tailwind Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Apple Human Interface Guidelines - Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode)
- [Material Design - Dark Theme](https://material.io/design/color/dark-theme.html)
