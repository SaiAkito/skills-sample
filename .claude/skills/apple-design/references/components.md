# Apple Design System - Components Reference

Comprehensive component specifications for building Apple-styled web applications with React, Tailwind CSS, and shadcn/ui.

## Button Components

### Button Variants

Apple uses four primary button styles based on visual weight and context.

#### Filled Button (Primary)
Highest visual weight, used for primary actions.

```tsx
// components/ui/button.tsx
<button className="inline-flex items-center justify-center h-11 px-6 rounded-apple bg-apple-blue-500 text-white text-body font-medium hover:bg-apple-blue-600 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:ring-offset-2">
  Primary Action
</button>
```

**Properties**:
- Background: `bg-apple-blue-500`
- Hover: `hover:bg-apple-blue-600`
- Height: `h-11` (44px - minimum touch target)
- Padding: `px-6` (24px horizontal)
- Border radius: `rounded-apple` (10px)
- Active state: `active:scale-95` (subtle press effect)

#### Tinted Button (Secondary)
Medium visual weight, colorful but less prominent.

```tsx
<button className="inline-flex items-center justify-center h-11 px-6 rounded-apple bg-apple-blue-500/10 text-apple-blue-500 text-body font-medium hover:bg-apple-blue-500/20 active:scale-95 transition-all">
  Secondary Action
</button>
```

**Properties**:
- Background: `bg-apple-blue-500/10` (10% opacity)
- Text: `text-apple-blue-500`
- Hover: `hover:bg-apple-blue-500/20` (20% opacity)

#### Bordered Button (Tertiary)
Lower visual weight, neutral appearance.

```tsx
<button className="inline-flex items-center justify-center h-11 px-6 rounded-apple border-2 border-apple-gray-300 dark:border-apple-gray-700 text-label-primary bg-transparent hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800 active:scale-95 transition-all">
  Tertiary Action
</button>
```

**Properties**:
- Border: `border-2 border-apple-gray-300`
- Background: Transparent with hover effect
- Dark mode: `dark:border-apple-gray-700 dark:hover:bg-apple-gray-800`

#### Plain Button (Text Button)
Minimal visual weight, text-only appearance.

```tsx
<button className="inline-flex items-center justify-center h-11 px-4 rounded-apple text-apple-blue-500 text-body font-medium hover:bg-apple-blue-500/10 active:scale-95 transition-all">
  Text Button
</button>
```

**Properties**:
- No background by default
- Text color: `text-apple-blue-500`
- Hover: `hover:bg-apple-blue-500/10`
- Less horizontal padding: `px-4`

#### Destructive Button
For dangerous or irreversible actions.

```tsx
<button className="inline-flex items-center justify-center h-11 px-6 rounded-apple bg-apple-red-500 text-white text-body font-medium hover:bg-apple-red-600 active:scale-95 transition-all focus:ring-apple-red-500">
  Delete
</button>
```

### Button Sizes

```tsx
// Small (36px)
<button className="h-9 px-4 text-sm rounded-apple">
  Small Button
</button>

// Default (44px)
<button className="h-11 px-6 text-body rounded-apple">
  Default Button
</button>

// Large (56px)
<button className="h-14 px-8 text-headline rounded-apple">
  Large Button
</button>
```

### Icon Buttons

```tsx
import { Settings } from "lucide-react"

// Icon only
<button className="w-11 h-11 flex items-center justify-center rounded-apple hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800 transition-colors" aria-label="Settings">
  <Settings className="w-5 h-5" />
</button>

// Icon with text
<button className="h-11 px-6 flex items-center gap-2 rounded-apple bg-apple-blue-500 text-white hover:bg-apple-blue-600">
  <Plus className="w-5 h-5" />
  <span>Add Item</span>
</button>
```

### Button Groups

```tsx
<div className="inline-flex rounded-apple overflow-hidden border border-apple-gray-300 dark:border-apple-gray-700">
  <button className="px-4 h-9 border-r border-apple-gray-300 dark:border-apple-gray-700 hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800">
    Option 1
  </button>
  <button className="px-4 h-9 border-r border-apple-gray-300 dark:border-apple-gray-700 hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800">
    Option 2
  </button>
  <button className="px-4 h-9 hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800">
    Option 3
  </button>
</div>
```

## Input Components

### Text Input

```tsx
<input
  type="text"
  placeholder="Enter text..."
  className="w-full h-11 px-4 rounded-apple bg-background-tertiary border border-apple-gray-300 dark:border-apple-gray-700 text-body text-label-primary placeholder:text-label-tertiary focus:outline-none focus:ring-2 focus:ring-apple-blue-500 transition-all"
/>
```

### Text Area

```tsx
<textarea
  placeholder="Enter description..."
  rows={4}
  className="w-full px-4 py-3 rounded-apple bg-background-tertiary border border-apple-gray-300 dark:border-apple-gray-700 text-body text-label-primary placeholder:text-label-tertiary focus:outline-none focus:ring-2 focus:ring-apple-blue-500 resize-none transition-all"
/>
```

### Search Input

```tsx
import { Search } from "lucide-react"

<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-label-tertiary pointer-events-none" />
  <input
    type="search"
    placeholder="Search..."
    className="w-full h-11 pl-10 pr-4 rounded-apple bg-background-tertiary border border-apple-gray-300 dark:border-apple-gray-700 text-body text-label-primary placeholder:text-label-tertiary focus:outline-none focus:ring-2 focus:ring-apple-blue-500"
  />
</div>
```

### Select Dropdown

```tsx
<select className="w-full h-11 px-4 pr-10 rounded-apple bg-background-tertiary border border-apple-gray-300 dark:border-apple-gray-700 text-body text-label-primary focus:outline-none focus:ring-2 focus:ring-apple-blue-500 appearance-none bg-[url('data:image/svg+xml;base64,...')] bg-no-repeat bg-right">
  <option>Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### Checkbox

```tsx
<label className="inline-flex items-center gap-3 cursor-pointer">
  <input
    type="checkbox"
    className="w-5 h-5 rounded border-2 border-apple-gray-400 text-apple-blue-500 focus:ring-2 focus:ring-apple-blue-500 focus:ring-offset-0"
  />
  <span className="text-body text-label-primary">Accept terms</span>
</label>
```

### Radio Button

```tsx
<div className="space-y-3">
  <label className="inline-flex items-center gap-3 cursor-pointer">
    <input
      type="radio"
      name="option"
      value="1"
      className="w-5 h-5 text-apple-blue-500 focus:ring-2 focus:ring-apple-blue-500"
    />
    <span className="text-body text-label-primary">Option 1</span>
  </label>
  <label className="inline-flex items-center gap-3 cursor-pointer">
    <input
      type="radio"
      name="option"
      value="2"
      className="w-5 h-5 text-apple-blue-500 focus:ring-2 focus:ring-apple-blue-500"
    />
    <span className="text-body text-label-primary">Option 2</span>
  </label>
</div>
```

### Toggle Switch

```tsx
import { useState } from "react"

export function Toggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => setEnabled(!enabled)}
      className={cn(
        "relative inline-flex h-8 w-14 items-center rounded-full transition-colors",
        enabled ? "bg-apple-green-500" : "bg-apple-gray-300 dark:bg-apple-gray-700"
      )}
    >
      <span
        className={cn(
          "inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform",
          enabled ? "translate-x-7" : "translate-x-1"
        )}
      />
    </button>
  )
}
```

## Card Components

### Basic Card

```tsx
<div className="rounded-apple-lg bg-background-secondary p-6 shadow-apple">
  <h3 className="text-title-3 text-label-primary mb-2">Card Title</h3>
  <p className="text-body text-label-secondary mb-4">
    Card description and content goes here.
  </p>
  <button className="text-apple-blue-500 text-body font-medium">
    Learn More →
  </button>
</div>
```

### Product Card

```tsx
<div className="group rounded-apple-lg bg-background-secondary overflow-hidden shadow-apple hover:shadow-apple-md transition-all">
  <div className="aspect-square overflow-hidden bg-apple-gray-100 dark:bg-apple-gray-800">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>
  <div className="p-4">
    <h3 className="text-headline text-label-primary mb-1">{title}</h3>
    <p className="text-callout text-label-secondary mb-3">{description}</p>
    <div className="flex items-center justify-between">
      <span className="text-title-3 text-label-primary font-semibold">${price}</span>
      <button className="px-4 py-2 rounded-apple bg-apple-blue-500 text-white text-subheadline hover:bg-apple-blue-600">
        Add
      </button>
    </div>
  </div>
</div>
```

### Feature Card

```tsx
<div className="p-8 rounded-apple-xl bg-gradient-to-br from-apple-blue-500/10 to-purple-500/10 border border-apple-gray-200 dark:border-apple-gray-800">
  <div className="w-12 h-12 rounded-apple bg-apple-blue-500 flex items-center justify-center mb-4">
    <Icon className="w-6 h-6 text-white" />
  </div>
  <h3 className="text-title-2 text-label-primary mb-3">Feature Title</h3>
  <p className="text-body text-label-secondary">
    Description of the feature and its benefits.
  </p>
</div>
```

## List Components

### Simple List

```tsx
<ul className="rounded-apple-lg bg-background-secondary divide-y divide-apple-gray-200 dark:divide-apple-gray-800 overflow-hidden">
  {items.map((item) => (
    <li key={item.id} className="px-4 py-3 hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800 transition-colors">
      <span className="text-body text-label-primary">{item.title}</span>
    </li>
  ))}
</ul>
```

### List with Icons

```tsx
<ul className="rounded-apple-lg bg-background-secondary divide-y divide-separator-nonOpaque overflow-hidden">
  {items.map((item) => (
    <li key={item.id} className="flex items-center gap-3 px-4 py-3 hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800">
      <item.icon className="w-5 h-5 text-apple-blue-500" />
      <span className="flex-1 text-body text-label-primary">{item.title}</span>
      <ChevronRight className="w-5 h-5 text-label-quaternary" />
    </li>
  ))}
</ul>
```

### Settings List (iOS-style)

```tsx
<div className="space-y-8">
  <section>
    <h3 className="text-footnote text-label-secondary uppercase tracking-wide mb-2 px-4">
      Account
    </h3>
    <div className="rounded-apple-lg bg-background-secondary divide-y divide-separator-nonOpaque overflow-hidden">
      <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800">
        <User className="w-5 h-5 text-apple-blue-500" />
        <span className="flex-1 text-left text-body text-label-primary">Profile</span>
        <ChevronRight className="w-5 h-5 text-label-quaternary" />
      </button>
      <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800">
        <Shield className="w-5 h-5 text-apple-blue-500" />
        <span className="flex-1 text-left text-body text-label-primary">Privacy</span>
        <ChevronRight className="w-5 h-5 text-label-quaternary" />
      </button>
    </div>
  </section>

  <section>
    <h3 className="text-footnote text-label-secondary uppercase tracking-wide mb-2 px-4">
      Preferences
    </h3>
    <div className="rounded-apple-lg bg-background-secondary divide-y divide-separator-nonOpaque overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-body text-label-primary">Notifications</span>
        <Toggle />
      </div>
    </div>
  </section>
</div>
```

## Modal & Dialog Components

### Modal

```tsx
import { Dialog, DialogContent } from "@/components/ui/dialog"

<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent className="sm:max-w-[500px] rounded-apple-xl bg-background-primary border border-apple-gray-200 dark:border-apple-gray-800 shadow-apple-xl p-0">
    <div className="p-6">
      <h2 className="text-title-2 text-label-primary mb-4">Modal Title</h2>
      <p className="text-body text-label-secondary mb-6">
        Modal content goes here. Explain the action or provide information.
      </p>
      <div className="flex gap-3 justify-end">
        <button className="h-11 px-6 rounded-apple border-2 border-apple-gray-300 dark:border-apple-gray-700 text-body">
          Cancel
        </button>
        <button className="h-11 px-6 rounded-apple bg-apple-blue-500 text-white text-body hover:bg-apple-blue-600">
          Confirm
        </button>
      </div>
    </div>
  </DialogContent>
</Dialog>
```

### Alert Dialog

```tsx
<div className="rounded-apple-xl bg-background-primary p-6 shadow-apple-xl max-w-sm">
  <h3 className="text-headline text-label-primary mb-2 text-center">
    Delete Item?
  </h3>
  <p className="text-callout text-label-secondary mb-6 text-center">
    This action cannot be undone. Are you sure?
  </p>
  <div className="flex flex-col gap-2">
    <button className="h-11 rounded-apple bg-apple-red-500 text-white text-body font-medium hover:bg-apple-red-600">
      Delete
    </button>
    <button className="h-11 rounded-apple text-apple-blue-500 text-body font-medium hover:bg-apple-blue-500/10">
      Cancel
    </button>
  </div>
</div>
```

### Bottom Sheet

```tsx
<div className="fixed inset-x-0 bottom-0 z-50 animate-in slide-in-from-bottom duration-300">
  <div className="rounded-t-apple-xl bg-background-primary border-t border-apple-gray-200 dark:border-apple-gray-800 shadow-apple-xl p-6 safe-bottom">
    <div className="w-12 h-1 rounded-full bg-apple-gray-300 dark:bg-apple-gray-700 mx-auto mb-6" />
    <h3 className="text-title-2 text-label-primary mb-4">Sheet Title</h3>
    <div className="space-y-4">
      {/* Sheet content */}
    </div>
  </div>
</div>
```

## Navigation Components

### Top Navigation Bar

```tsx
<nav className="sticky top-0 z-50 w-full border-b border-apple-gray-200 dark:border-apple-gray-800 bg-background-primary/80 backdrop-blur-xl">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-14">
      <div className="flex items-center gap-8">
        <Logo />
        <div className="hidden md:flex items-center gap-6">
          <a href="/products" className="text-body text-label-primary hover:text-apple-blue-500">
            Products
          </a>
          <a href="/pricing" className="text-body text-label-primary hover:text-apple-blue-500">
            Pricing
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="h-9 px-4 rounded-apple bg-apple-blue-500 text-white text-subheadline hover:bg-apple-blue-600">
          Sign In
        </button>
      </div>
    </div>
  </div>
</nav>
```

### Sidebar Navigation

```tsx
<aside className="w-64 border-r border-apple-gray-200 dark:border-apple-gray-800 bg-background-secondary h-screen">
  <div className="p-4">
    <Logo className="mb-8" />
    <nav className="space-y-1">
      <a
        href="/dashboard"
        className="flex items-center gap-3 px-3 py-2 rounded-apple text-body text-label-primary hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800 transition-colors"
      >
        <Home className="w-5 h-5" />
        <span>Dashboard</span>
      </a>
      <a
        href="/projects"
        className="flex items-center gap-3 px-3 py-2 rounded-apple bg-apple-blue-500/10 text-apple-blue-500"
      >
        <Folder className="w-5 h-5" />
        <span>Projects</span>
      </a>
      {/* More nav items */}
    </nav>
  </div>
</aside>
```

### Tab Bar (Bottom Navigation)

```tsx
<div className="fixed bottom-0 inset-x-0 z-50 border-t border-apple-gray-200 dark:border-apple-gray-800 bg-background-primary/80 backdrop-blur-xl safe-bottom">
  <div className="grid grid-cols-4 gap-1 px-2 py-2">
    <button className="flex flex-col items-center gap-1 py-2 text-apple-blue-500">
      <Home className="w-6 h-6" />
      <span className="text-caption-2">Home</span>
    </button>
    <button className="flex flex-col items-center gap-1 py-2 text-label-secondary">
      <Search className="w-6 h-6" />
      <span className="text-caption-2">Search</span>
    </button>
    <button className="flex flex-col items-center gap-1 py-2 text-label-secondary">
      <Heart className="w-6 h-6" />
      <span className="text-caption-2">Favorites</span>
    </button>
    <button className="flex flex-col items-center gap-1 py-2 text-label-secondary">
      <User className="w-6 h-6" />
      <span className="text-caption-2">Profile</span>
    </button>
  </div>
</div>
```

## Feedback Components

### Toast Notification

```tsx
<div className="fixed top-4 right-4 z-80 rounded-apple-lg bg-background-secondary shadow-apple-xl border border-apple-gray-200 dark:border-apple-gray-800 p-4 min-w-[300px] animate-in slide-in-from-top duration-300">
  <div className="flex items-start gap-3">
    <CheckCircle className="w-5 h-5 text-apple-green-500 mt-0.5" />
    <div className="flex-1">
      <h4 className="text-headline text-label-primary mb-1">Success</h4>
      <p className="text-callout text-label-secondary">Your changes have been saved.</p>
    </div>
    <button className="text-label-tertiary hover:text-label-primary">
      <X className="w-5 h-5" />
    </button>
  </div>
</div>
```

### Loading Spinner

```tsx
<div className="w-6 h-6 border-2 border-apple-gray-300 dark:border-apple-gray-700 border-t-apple-blue-500 rounded-full animate-spin" />
```

### Progress Bar

```tsx
<div className="w-full h-1 rounded-full bg-apple-gray-200 dark:bg-apple-gray-800 overflow-hidden">
  <div
    className="h-full bg-apple-blue-500 transition-all duration-300"
    style={{ width: `${progress}%` }}
  />
</div>
```

### Badge

```tsx
// Numerical badge
<span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-apple-red-500 text-white text-caption-2 font-medium">
  3
</span>

// Status badge
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-apple-sm bg-apple-green-500/10 text-apple-green-500 text-caption-1 font-medium">
  <div className="w-1.5 h-1.5 rounded-full bg-apple-green-500" />
  Active
</span>
```

## Best Practices

### Component Composition
- Build complex components from simple primitives
- Use shadcn/ui as foundation, customize for Apple aesthetics
- Maintain consistency across similar components

### Accessibility
- Always include `aria-label` for icon-only buttons
- Use semantic HTML (`button`, `nav`, `header`, etc.)
- Ensure proper focus indicators
- Support keyboard navigation

### Responsiveness
- Test components at all breakpoints
- Use responsive padding/spacing
- Hide/show elements appropriately (md:hidden, md:flex)
- Ensure touch targets are 44×44px minimum on mobile

### Performance
- Optimize images and lazy load when possible
- Use CSS transitions over JavaScript animations
- Minimize re-renders with proper React patterns
- Keep component trees shallow

## Component Checklist

When creating/reviewing components:

- [ ] Uses Apple design tokens (colors, spacing, typography)
- [ ] Supports both light and dark modes
- [ ] Has proper hover/active/focus states
- [ ] Meets accessibility requirements (ARIA, keyboard nav)
- [ ] Responsive across all breakpoints
- [ ] Minimum 44×44px touch targets on mobile
- [ ] Uses Apple-style animations (300ms, ease-apple)
- [ ] Proper z-index for layering
- [ ] Tested in Safari, Chrome, Firefox
- [ ] No console errors or warnings
