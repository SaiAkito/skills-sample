# Apple Design System - Color Reference

Complete color system for web applications following Apple's Human Interface Guidelines.

## System Colors

### Primary System Colors

Apple's vibrant system colors with full tonal ranges for light and dark modes.

#### Blue (Primary Interactive Color)
```javascript
'apple-blue': {
  50: '#e6f2ff',   // Lightest tint
  100: '#cce5ff',
  200: '#99cbff',
  300: '#66b0ff',
  400: '#3396ff',
  500: '#007aff',  // Primary iOS blue
  600: '#0062cc',
  700: '#004999',
  800: '#003166',
  900: '#001933',  // Darkest shade
}
```
**Usage**: Primary actions, links, selected states, active elements

#### Green (Success)
```javascript
'apple-green': {
  50: '#e6f9ed',
  100: '#ccf4db',
  200: '#99e9b7',
  300: '#66de93',
  400: '#4dd97f',
  500: '#34c759',  // System green
  600: '#2a9f47',
  700: '#1f7735',
  800: '#155023',
  900: '#0a2812',
}
```
**Usage**: Success messages, confirmations, positive states, availability indicators

#### Red (Error/Destructive)
```javascript
'apple-red': {
  50: '#ffebeb',
  100: '#ffd6d6',
  200: '#ffadad',
  300: '#ff8585',
  400: '#ff5c5c',
  500: '#ff3b30',  // System red
  600: '#cc2f26',
  700: '#99231d',
  800: '#661813',
  900: '#330c0a',
}
```
**Usage**: Errors, destructive actions, warnings, alerts, deletion confirmations

#### Orange (Warning)
```javascript
'apple-orange': {
  50: '#fff3e6',
  100: '#ffe7cc',
  200: '#ffcf99',
  300: '#ffb766',
  400: '#ffa933',
  500: '#ff9500',  // System orange
  600: '#cc7700',
  700: '#995900',
  800: '#663c00',
  900: '#331e00',
}
```
**Usage**: Warnings, caution states, moderate alerts, pending actions

#### Yellow (Caution)
```javascript
'apple-yellow': {
  50: '#fffae6',
  100: '#fff5cc',
  200: '#ffeb99',
  300: '#ffe166',
  400: '#ffd633',
  500: '#ffcc00',  // System yellow
  600: '#cca300',
  700: '#997a00',
  800: '#665200',
  900: '#332900',
}
```
**Usage**: Highlights, notifications, starred items, premium features

### Gray Scale (Neutral Colors)

Apple's sophisticated gray palette for backgrounds, borders, and text.

#### Light Mode Grays
```javascript
'apple-gray': {
  50: '#f5f5f7',   // systemGray6Light - Lightest background
  100: '#e8e8ed',  // systemGray5Light - Secondary backgrounds
  200: '#d1d1d6',  // systemGray4Light - Tertiary backgrounds
  300: '#c7c7cc',  // systemGray3Light - Borders, dividers
  400: '#aeaeb2',  // systemGray2Light - Disabled elements
  500: '#8e8e93',  // systemGray - Placeholder text
  600: '#636366',  // Tertiary labels
  700: '#48484a',  // Secondary labels
  800: '#3a3a3c',  // Labels in light mode
  900: '#1c1c1e',  // Darkest backgrounds in dark mode
}
```

## Semantic Color Tokens

CSS variables that automatically adapt to light/dark mode.

### Background Colors

```css
/* Primary backgrounds - Main content areas */
--background-primary: #ffffff;        /* Light mode */
--background-primary-dark: #000000;   /* Dark mode */

/* Secondary backgrounds - Grouped content, cards */
--background-secondary: #f5f5f7;      /* Light mode */
--background-secondary-dark: #1c1c1e; /* Dark mode */

/* Tertiary backgrounds - Input fields, inline elements */
--background-tertiary: #ffffff;       /* Light mode */
--background-tertiary-dark: #2c2c2e;  /* Dark mode */
```

**Usage**:
```tsx
<div className="bg-[var(--background-primary)]">Primary background</div>
<div className="bg-background-secondary">Secondary background (with Tailwind)</div>
```

### Label (Text) Colors

```css
/* Primary labels - Main text content */
--label-primary: rgba(0, 0, 0, 0.85);       /* Light mode */
--label-primary-dark: rgba(255, 255, 255, 0.85); /* Dark mode */

/* Secondary labels - Descriptive text */
--label-secondary: rgba(0, 0, 0, 0.55);     /* Light mode */
--label-secondary-dark: rgba(255, 255, 255, 0.55); /* Dark mode */

/* Tertiary labels - Supporting text */
--label-tertiary: rgba(0, 0, 0, 0.30);      /* Light mode */
--label-tertiary-dark: rgba(255, 255, 255, 0.30); /* Dark mode */

/* Quaternary labels - Watermarks, placeholders */
--label-quaternary: rgba(0, 0, 0, 0.18);    /* Light mode */
--label-quaternary-dark: rgba(255, 255, 255, 0.18); /* Dark mode */
```

**Usage**:
```tsx
<h1 className="text-[var(--label-primary)]">Main Heading</h1>
<p className="text-label-secondary">Descriptive text</p>
<span className="text-label-tertiary">Supporting info</span>
```

### Fill Colors (UI Elements)

```css
/* For buttons, sliders, switches */
--fill-primary: rgba(120, 120, 128, 0.36);
--fill-secondary: rgba(120, 120, 128, 0.32);
--fill-tertiary: rgba(118, 118, 128, 0.24);
--fill-quaternary: rgba(116, 116, 128, 0.18);
```

### Separator Colors

```css
/* For dividers, borders, rules */
--separator-opaque: #c6c6c8;        /* Light mode */
--separator-opaque-dark: #38383a;   /* Dark mode */

--separator-nonOpaque: rgba(60, 60, 67, 0.36);
--separator-nonOpaque-dark: rgba(84, 84, 88, 0.65);
```

**Usage**:
```tsx
<hr className="border-t border-[var(--separator-opaque)]" />
<div className="divide-y divide-[var(--separator-nonOpaque)]">...</div>
```

## Complete Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // System colors
        'apple-blue': {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b0ff',
          400: '#3396ff',
          500: '#007aff',
          600: '#0062cc',
          700: '#004999',
          800: '#003166',
          900: '#001933',
        },
        'apple-green': {
          50: '#e6f9ed',
          100: '#ccf4db',
          200: '#99e9b7',
          300: '#66de93',
          400: '#4dd97f',
          500: '#34c759',
          600: '#2a9f47',
          700: '#1f7735',
          800: '#155023',
          900: '#0a2812',
        },
        'apple-red': {
          50: '#ffebeb',
          100: '#ffd6d6',
          200: '#ffadad',
          300: '#ff8585',
          400: '#ff5c5c',
          500: '#ff3b30',
          600: '#cc2f26',
          700: '#99231d',
          800: '#661813',
          900: '#330c0a',
        },
        'apple-orange': {
          50: '#fff3e6',
          100: '#ffe7cc',
          200: '#ffcf99',
          300: '#ffb766',
          400: '#ffa933',
          500: '#ff9500',
          600: '#cc7700',
          700: '#995900',
          800: '#663c00',
          900: '#331e00',
        },
        'apple-yellow': {
          50: '#fffae6',
          100: '#fff5cc',
          200: '#ffeb99',
          300: '#ffe166',
          400: '#ffd633',
          500: '#ffcc00',
          600: '#cca300',
          700: '#997a00',
          800: '#665200',
          900: '#332900',
        },
        'apple-gray': {
          50: '#f5f5f7',
          100: '#e8e8ed',
          200: '#d1d1d6',
          300: '#c7c7cc',
          400: '#aeaeb2',
          500: '#8e8e93',
          600: '#636366',
          700: '#48484a',
          800: '#3a3a3c',
          900: '#1c1c1e',
        },
        // Semantic tokens
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

## CSS Variables Setup

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
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

    /* Separators */
    --separator-opaque: #c6c6c8;
    --separator-nonOpaque: rgba(60, 60, 67, 0.36);
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

    /* Separators */
    --separator-opaque: #38383a;
    --separator-nonOpaque: rgba(84, 84, 88, 0.65);
  }
}
```

## Color Usage Guidelines

### Contrast Requirements

Follow WCAG standards for accessibility:

| Text Size | Normal Contrast | Enhanced Contrast |
|-----------|----------------|-------------------|
| Small text (< 18pt) | 4.5:1 (AA) | 7:1 (AAA) |
| Large text (≥ 18pt) | 3:1 (AA) | 4.5:1 (AAA) |
| UI Components | 3:1 (AA) | - |

### Color Combinations

**Good contrast examples**:
```tsx
// Primary text on primary background
<p className="text-label-primary bg-background-primary">High contrast</p>

// White text on blue background
<button className="text-white bg-apple-blue-500">Action</button>

// Dark text on light background
<div className="text-apple-gray-900 bg-apple-gray-50">Card</div>
```

**Avoid these combinations**:
```tsx
// ❌ Poor contrast - quaternary text on tertiary background
<span className="text-label-quaternary bg-background-tertiary">Hard to read</span>

// ❌ Insufficient contrast
<button className="text-apple-blue-200 bg-apple-blue-100">Low contrast</button>
```

### Semantic Usage

**Do**:
- Use blue for primary actions and links
- Use green for success confirmations
- Use red for errors and destructive actions
- Use orange for warnings
- Use grays for neutral UI elements

**Don't**:
- Use color as the only indicator of state
- Mix semantic meanings (e.g., red for success)
- Use too many vibrant colors simultaneously
- Override system color semantics

### Dark Mode Considerations

**Principles**:
1. **Reduce brightness**: Use true blacks (#000000) sparingly, prefer dark grays
2. **Maintain hierarchy**: Use elevation through subtle backgrounds, not just shadows
3. **Adjust vibrancy**: System colors should be slightly desaturated in dark mode
4. **Test contrast**: Ensure text remains legible on dark backgrounds

**Example**:
```tsx
// Card with proper dark mode support
<div className="bg-background-secondary border border-apple-gray-200 dark:border-apple-gray-800 rounded-apple-lg">
  <h3 className="text-label-primary">Card Title</h3>
  <p className="text-label-secondary">Card description</p>
</div>
```

## Testing Colors

### Tools
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Chrome DevTools**: Inspect element > Accessibility > Contrast
- **Figma**: Built-in contrast checker plugin

### Checklist
- [ ] All text meets minimum 4.5:1 contrast
- [ ] Large text meets 3:1 contrast
- [ ] Interactive elements have 3:1 contrast with background
- [ ] Color is not the only indicator of state
- [ ] Colors work in both light and dark modes
- [ ] Tested with color blindness simulators

## Common Patterns

### Status Indicators
```tsx
const statusColors = {
  success: 'bg-apple-green-500 text-white',
  error: 'bg-apple-red-500 text-white',
  warning: 'bg-apple-orange-500 text-white',
  info: 'bg-apple-blue-500 text-white',
}

<span className={cn("px-3 py-1 rounded-full text-sm", statusColors.success)}>
  Active
</span>
```

### Hover States
```tsx
// Light background hover
<button className="bg-apple-gray-100 hover:bg-apple-gray-200 dark:bg-apple-gray-800 dark:hover:bg-apple-gray-700">
  Hover me
</button>

// Blue button hover
<button className="bg-apple-blue-500 hover:bg-apple-blue-600">
  Primary Action
</button>
```

### Focus Rings
```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:ring-offset-2">
  Focusable element
</button>
```
