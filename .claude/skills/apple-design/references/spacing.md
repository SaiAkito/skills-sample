# Apple Design System - Spacing & Layout Reference

Complete spacing system based on Apple's 8-point grid for consistent, harmonious layouts.

## Spacing Scale

Apple uses an 8-point base unit for all spacing, ensuring visual consistency across all screen sizes.

### Base Scale

| Token | Pixels | Rem | Tailwind Class | Usage |
|-------|--------|-----|----------------|-------|
| 0 | 0px | 0rem | `p-0`, `m-0` | Reset spacing |
| 0.5 | 2px | 0.125rem | `p-0.5`, `m-0.5` | Hairline spacing |
| 1 | 4px | 0.25rem | `p-1`, `m-1` | Minimal spacing |
| 2 | 8px | 0.5rem | `p-2`, `m-2` | Tight spacing |
| 3 | 12px | 0.75rem | `p-3`, `m-3` | Small spacing |
| 4 | 16px | 1rem | `p-4`, `m-4` | **Base unit** (most common) |
| 5 | 20px | 1.25rem | `p-5`, `m-5` | Medium spacing |
| 6 | 24px | 1.5rem | `p-6`, `m-6` | Standard spacing |
| 8 | 32px | 2rem | `p-8`, `m-8` | Large spacing |
| 10 | 40px | 2.5rem | `p-10`, `m-10` | XL spacing |
| 12 | 48px | 3rem | `p-12`, `m-12` | 2XL spacing |
| 16 | 64px | 4rem | `p-16`, `m-16` | 3XL spacing |
| 20 | 80px | 5rem | `p-20`, `m-20` | Section spacing |
| 24 | 96px | 6rem | `p-24`, `m-24` | Large sections |

### Extended Spacing (Custom)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '4.5': '18px',  // 4.5 * 4 = 18px (between 4 and 5)
        '18': '72px',   // Large section breaks
        '22': '88px',   // Extra large sections
        '88': '352px',  // Hero sections, special layouts
      },
    },
  },
}
```

## Spacing Principles

### The 8-Point Grid

All spacing should be divisible by 8 for consistency:

**Preferred spacing values**:
- 8px (2), 16px (4), 24px (6), 32px (8), 40px (10), 48px (12)

**Use sparingly**:
- 4px (1), 12px (3), 20px (5) - only when 8pt increments are too large

**Avoid**:
- Arbitrary values like 7px, 13px, 19px
- Non-8pt-grid values except for hairline borders (1-2px)

### Component Spacing

| Component Type | Internal Padding | External Margin | Gap Between Items |
|---------------|------------------|-----------------|-------------------|
| Button | 16-24px (4-6) | 8-16px (2-4) | 12px (3) |
| Card | 20-24px (5-6) | 16px (4) | 16px (4) |
| Input Field | 12-16px (3-4) | 8px (2) | 8-12px (2-3) |
| List Item | 12-16px (3-4) | 0 | 1px border |
| Modal | 24-32px (6-8) | - | 16-24px (4-6) |
| Section | 32-48px (8-12) | 32-64px (8-16) | 24-32px (6-8) |

## Layout Patterns

### Container Widths

Apple uses max-width constraints for readability:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        'readable': '672px',  // Optimal reading width
        'content': '1120px',  // Content container
        'wide': '1440px',     // Wide layouts
      },
    },
  },
}
```

**Usage**:
```tsx
// Readable content (articles, documentation)
<div className="max-w-readable mx-auto">
  <article>...</article>
</div>

// Standard content container
<div className="max-w-content mx-auto px-4">
  <main>...</main>
</div>

// Wide layout (dashboards, tables)
<div className="max-w-wide mx-auto">
  <div>...</div>
</div>
```

### Touch Targets

**Minimum interactive element size**:
- Mobile: 44×44px (iOS guideline)
- Desktop: 32×32px minimum, 44×44px preferred

```tsx
// Mobile-first button with proper touch target
<button className="min-h-[44px] px-6 rounded-apple">
  Click me
</button>

// Icon button with proper hit area
<button className="w-11 h-11 flex items-center justify-center rounded-apple">
  <Icon className="w-5 h-5" />
</button>
```

### Responsive Spacing

Adjust spacing for different screen sizes:

```tsx
// Padding that increases with screen size
<div className="p-4 sm:p-6 lg:p-8">
  Content
</div>

// Margin that adjusts for mobile vs desktop
<section className="my-12 sm:my-16 lg:my-24">
  Section content
</section>

// Gap in flex/grid layouts
<div className="flex gap-4 sm:gap-6 lg:gap-8">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Common Spacing Patterns

### Card Spacing

```tsx
<div className="rounded-apple-lg bg-background-secondary p-6 space-y-4">
  {/* 24px padding, 16px gap between children */}
  <h3 className="text-title-3">Card Title</h3>
  <p className="text-body">Card content</p>
  <button className="mt-2">Action</button>
</div>
```

### Form Spacing

```tsx
<form className="space-y-6">
  {/* 24px gap between form groups */}
  <div className="space-y-2">
    {/* 8px gap within a form group */}
    <label className="text-subheadline">Email</label>
    <input className="w-full h-11 px-4" />
    <p className="text-footnote text-label-tertiary">Help text</p>
  </div>

  <div className="space-y-2">
    <label className="text-subheadline">Password</label>
    <input type="password" className="w-full h-11 px-4" />
  </div>

  <button className="w-full h-11 mt-8">
    {/* Extra spacing before submit button */}
    Submit
  </button>
</form>
```

### List Spacing

```tsx
<ul className="divide-y divide-separator-nonOpaque">
  {items.map(item => (
    <li key={item.id} className="py-3 first:pt-0 last:pb-0">
      {/* 12px vertical padding per item */}
      <div className="flex items-center gap-3">
        {/* 12px gap between elements */}
        <Icon />
        <span>{item.name}</span>
      </div>
    </li>
  ))}
</ul>
```

### Navigation Spacing

```tsx
<nav className="h-14 px-4 flex items-center justify-between">
  {/* 56px height, 16px horizontal padding */}
  <div className="flex items-center gap-8">
    {/* 32px gap between nav items */}
    <Logo />
    <NavLinks />
  </div>
  <div className="flex items-center gap-4">
    {/* 16px gap between actions */}
    <SearchButton />
    <UserMenu />
  </div>
</nav>
```

### Grid Layouts

```tsx
// 2-column grid with 16px gap
<div className="grid grid-cols-2 gap-4">
  <Card />
  <Card />
</div>

// Responsive grid: 1 col mobile, 2 tablet, 3 desktop
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>

// Grid with different row/column gaps
<div className="grid grid-cols-3 gap-x-4 gap-y-8">
  {/* 16px horizontal gap, 32px vertical gap */}
  <Card />
</div>
```

## Safe Areas and Insets

Handle device-specific safe areas (notches, home indicators):

```css
/* globals.css */
@supports (padding: env(safe-area-inset-top)) {
  .safe-top {
    padding-top: env(safe-area-inset-top);
  }

  .safe-bottom {
    padding-bottom: env(safe-area-inset-bottom);
  }

  .safe-left {
    padding-left: env(safe-area-inset-left);
  }

  .safe-right {
    padding-right: env(safe-area-inset-right);
  }
}
```

**Usage**:
```tsx
<nav className="sticky top-0 safe-top">
  Navigation
</nav>

<div className="fixed bottom-0 w-full safe-bottom">
  Bottom sheet
</div>
```

## Padding vs Margin

### When to Use Padding

Use padding for:
- Internal spacing within components
- Creating clickable/tappable areas
- Background color that extends to edges
- Preventing content from touching borders

```tsx
// ✅ Good: Padding keeps content away from edges
<button className="px-6 py-3 bg-apple-blue-500">
  Click me
</button>

// ✅ Good: Padding creates inner spacing
<div className="p-6 bg-background-secondary rounded-apple-lg">
  Card content
</div>
```

### When to Use Margin

Use margin for:
- Spacing between sibling elements
- Offsetting elements from their container
- Creating vertical rhythm in content
- Separating sections

```tsx
// ✅ Good: Margin separates sections
<section className="mb-12">
  Section 1
</section>
<section>
  Section 2
</section>

// ✅ Good: Margin for vertical rhythm
<h2 className="mb-4">Heading</h2>
<p className="mb-4">Paragraph 1</p>
<p>Paragraph 2</p>
```

### Use Gap Instead

For flex and grid layouts, prefer `gap` over margin:

```tsx
// ✅ Better: Use gap for consistent spacing
<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// ❌ Avoid: Margin on children can be inconsistent
<div className="flex">
  <div className="mr-4">Item 1</div>
  <div className="mr-4">Item 2</div>
  <div>Item 3</div>
</div>
```

## Vertical Rhythm

Maintain consistent vertical spacing throughout your page:

```tsx
<article className="prose prose-apple">
  {/* Heading spacing */}
  <h1 className="mb-6">Article Title</h1>

  {/* Paragraph spacing */}
  <p className="mb-4">First paragraph...</p>
  <p className="mb-4">Second paragraph...</p>

  {/* Section spacing */}
  <h2 className="mt-12 mb-4">Section Heading</h2>
  <p className="mb-4">Section content...</p>

  {/* List spacing */}
  <ul className="mb-6 space-y-2">
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</article>
```

### Prose Utilities (Optional)

Create custom prose styles:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      typography: {
        apple: {
          css: {
            '--tw-prose-body': 'var(--label-primary)',
            '--tw-prose-headings': 'var(--label-primary)',
            '--tw-prose-links': 'var(--system-blue)',
            h1: {
              fontSize: '28px',
              fontWeight: '700',
              marginBottom: '24px',
            },
            h2: {
              fontSize: '22px',
              fontWeight: '700',
              marginTop: '48px',
              marginBottom: '16px',
            },
            p: {
              marginBottom: '16px',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

## Border Radius

Consistent corner rounding for visual harmony:

```javascript
// tailwind.config.js
module.exports: {
  theme: {
    extend: {
      borderRadius: {
        'apple-sm': '6px',    // Small elements (badges, pills)
        'apple': '10px',       // Default (buttons, inputs, small cards)
        'apple-lg': '14px',    // Large cards, panels
        'apple-xl': '20px',    // Modals, sheets, large containers
        'apple-2xl': '28px',   // Hero sections, feature cards
      },
    },
  },
}
```

**Usage Guide**:

| Element Type | Border Radius | Class |
|-------------|---------------|-------|
| Badge, Pill, Tag | 6px | `rounded-apple-sm` |
| Button, Input | 10px | `rounded-apple` |
| Card (small) | 10-14px | `rounded-apple` or `rounded-apple-lg` |
| Card (large) | 14px | `rounded-apple-lg` |
| Modal, Dialog | 20px | `rounded-apple-xl` |
| Hero Section | 28px | `rounded-apple-2xl` |

```tsx
// Small elements
<span className="px-2 py-1 rounded-apple-sm bg-apple-blue-500 text-white text-caption-1">
  Badge
</span>

// Standard buttons and inputs
<button className="px-6 py-3 rounded-apple bg-apple-blue-500 text-white">
  Button
</button>

// Cards
<div className="p-6 rounded-apple-lg bg-background-secondary shadow-apple">
  Card content
</div>

// Modals
<div className="rounded-apple-xl bg-background-primary shadow-apple-xl">
  Modal content
</div>
```

## Shadows and Elevation

Subtle shadows create depth and hierarchy:

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

**Elevation Levels**:

| Level | Shadow | Usage |
|-------|--------|-------|
| 0 | None | Flat elements, inline content |
| 1 | `shadow-apple-sm` | Slight elevation, hover states |
| 2 | `shadow-apple` | Cards, panels |
| 3 | `shadow-apple-md` | Dropdowns, popovers |
| 4 | `shadow-apple-lg` | Modals, dialogs |
| 5 | `shadow-apple-xl` | Maximum elevation, overlays |

```tsx
// Card with subtle shadow
<div className="p-6 rounded-apple-lg bg-background-secondary shadow-apple">
  Card
</div>

// Dropdown with medium shadow
<div className="rounded-apple bg-background-primary shadow-apple-md">
  Dropdown content
</div>

// Modal with large shadow
<div className="rounded-apple-xl bg-background-primary shadow-apple-xl">
  Modal
</div>
```

## Z-Index Scale

Consistent layering for overlapping elements:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      zIndex: {
        '1': '1',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',      // Dropdowns, popovers
        '60': '60',      // Sticky headers
        '70': '70',      // Modals, dialogs
        '80': '80',      // Notifications, toasts
        '90': '90',      // Tooltips
        '100': '100',    // Maximum (loading overlays)
      },
    },
  },
}
```

**Usage**:
```tsx
<nav className="sticky top-0 z-60">Sticky header</nav>
<div className="fixed inset-0 z-70">Modal backdrop</div>
<div className="fixed top-4 right-4 z-80">Toast notification</div>
```

## Best Practices

### Do's
- ✅ Use the 8-point grid for all spacing
- ✅ Use Tailwind's spacing scale (0, 1, 2, 3, 4, 6, 8, 12, 16, 20, 24)
- ✅ Prefer `gap` for flex/grid layouts
- ✅ Use responsive spacing (sm:, md:, lg: breakpoints)
- ✅ Maintain consistent spacing within component types
- ✅ Apply appropriate shadows for elevation
- ✅ Ensure minimum 44×44px touch targets on mobile

### Don'ts
- ❌ Don't use arbitrary spacing values (avoid `p-[13px]`)
- ❌ Don't mix padding and margin haphazardly
- ❌ Don't skip the 8-point grid without good reason
- ❌ Don't use excessive shadow depth
- ❌ Don't create touch targets smaller than 44×44px on mobile
- ❌ Don't ignore safe area insets on mobile devices

## Responsive Breakpoints

Tailwind's default breakpoints align well with Apple devices:

| Breakpoint | Size | Devices |
|------------|------|---------|
| sm | 640px | Large phones (landscape), small tablets |
| md | 768px | Tablets (portrait) |
| lg | 1024px | Tablets (landscape), small laptops |
| xl | 1280px | Laptops, small desktops |
| 2xl | 1536px | Large desktops |

```tsx
// Responsive padding: mobile (16px) → tablet (24px) → desktop (32px)
<div className="p-4 md:p-6 lg:p-8">
  Content
</div>

// Responsive container
<div className="max-w-full sm:max-w-readable lg:max-w-content mx-auto px-4">
  Centered content
</div>
```

## Testing Checklist

- [ ] All spacing follows 8-point grid
- [ ] Touch targets are minimum 44×44px on mobile
- [ ] Responsive spacing adjusts appropriately
- [ ] Safe area insets respected on mobile
- [ ] Shadows are subtle and appropriate
- [ ] Border radius is consistent across similar elements
- [ ] Vertical rhythm maintained in content
- [ ] Z-index layering is logical
- [ ] No arbitrary spacing values used
- [ ] Layouts tested at all breakpoints
