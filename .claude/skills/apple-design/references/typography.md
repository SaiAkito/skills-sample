# Apple Design System - Typography Reference

Complete typography system based on Apple's San Francisco font principles for web applications.

## Font Family

### System Font Stack

Apple's San Francisco font with fallbacks for cross-platform consistency:

```javascript
// tailwind.config.js
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
  mono: [
    'SF Mono',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
}
```

**Font Loading**:
```css
/* globals.css */
@layer base {
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
}
```

## Text Styles

Apple defines 11 standard text styles. Each has specific use cases and visual hierarchies.

### Large Title
**Size**: 34px (2.125rem)
**Line Height**: 41px (1.206)
**Weight**: 700 (Bold)
**Tracking**: 0.374px

```javascript
// Tailwind config
'large-title': ['34px', {
  lineHeight: '41px',
  letterSpacing: '0.011em',
  fontWeight: '700',
}],
```

**Usage**:
```tsx
<h1 className="text-large-title font-bold text-label-primary">
  Welcome to Your App
</h1>
```

**When to use**:
- Page titles in navigation bars
- Prominent hero headings
- Primary section headers
- Rarely used, maximum impact

---

### Title 1
**Size**: 28px (1.75rem)
**Line Height**: 34px (1.214)
**Weight**: 700 (Bold)
**Tracking**: 0.364px

```javascript
'title-1': ['28px', {
  lineHeight: '34px',
  letterSpacing: '0.013em',
  fontWeight: '700',
}],
```

**Usage**:
```tsx
<h2 className="text-title-1 font-bold text-label-primary">
  Section Title
</h2>
```

**When to use**:
- Primary content headings
- Modal titles
- Major section headers
- Card titles (large cards)

---

### Title 2
**Size**: 22px (1.375rem)
**Line Height**: 28px (1.273)
**Weight**: 700 (Bold)
**Tracking**: 0.352px

```javascript
'title-2': ['22px', {
  lineHeight: '28px',
  letterSpacing: '0.016em',
  fontWeight: '700',
}],
```

**Usage**:
```tsx
<h3 className="text-title-2 font-bold text-label-primary">
  Subsection Title
</h3>
```

**When to use**:
- Secondary headings
- List group headers
- Card titles (standard cards)
- Sheet/dialog headers

---

### Title 3
**Size**: 20px (1.25rem)
**Line Height**: 25px (1.25)
**Weight**: 600 (Semibold)
**Tracking**: 0.38px

```javascript
'title-3': ['20px', {
  lineHeight: '25px',
  letterSpacing: '0.019em',
  fontWeight: '600',
}],
```

**Usage**:
```tsx
<h4 className="text-title-3 font-semibold text-label-primary">
  Card Section
</h4>
```

**When to use**:
- Tertiary headings
- List item titles
- Small card headers
- Grouped content labels

---

### Headline
**Size**: 17px (1.063rem)
**Line Height**: 22px (1.294)
**Weight**: 600 (Semibold)
**Tracking**: -0.408px

```javascript
'headline': ['17px', {
  lineHeight: '22px',
  letterSpacing: '-0.024em',
  fontWeight: '600',
}],
```

**Usage**:
```tsx
<h5 className="text-headline font-semibold text-label-primary">
  Content Headline
</h5>
```

**When to use**:
- Emphasized content
- Table headers
- List item headlines
- Form section labels

---

### Body (Default Text)
**Size**: 17px (1.063rem)
**Line Height**: 22px (1.294)
**Weight**: 400 (Regular)
**Tracking**: -0.408px

```javascript
'body': ['17px', {
  lineHeight: '22px',
  letterSpacing: '-0.024em',
  fontWeight: '400',
}],
```

**Usage**:
```tsx
<p className="text-body text-label-primary">
  This is the primary body text used for main content throughout the application.
</p>
```

**When to use**:
- Main content paragraphs
- List item descriptions
- Article body text
- Default text style

---

### Callout
**Size**: 16px (1rem)
**Line Height**: 21px (1.313)
**Weight**: 400 (Regular)
**Tracking**: -0.32px

```javascript
'callout': ['16px', {
  lineHeight: '21px',
  letterSpacing: '-0.020em',
  fontWeight: '400',
}],
```

**Usage**:
```tsx
<p className="text-callout text-label-secondary">
  Supporting information or secondary content.
</p>
```

**When to use**:
- Secondary content
- Card descriptions
- Help text
- Auxiliary information

---

### Subheadline
**Size**: 15px (0.938rem)
**Line Height**: 20px (1.333)
**Weight**: 400 (Regular)
**Tracking**: -0.24px

```javascript
'subheadline': ['15px', {
  lineHeight: '20px',
  letterSpacing: '-0.016em',
  fontWeight: '400',
}],
```

**Usage**:
```tsx
<span className="text-subheadline text-label-secondary">
  Details or metadata
</span>
```

**When to use**:
- Labels and tags
- Metadata (dates, authors)
- Input field labels
- Secondary descriptions

---

### Footnote
**Size**: 13px (0.813rem)
**Line Height**: 18px (1.385)
**Weight**: 400 (Regular)
**Tracking**: -0.078px

```javascript
'footnote': ['13px', {
  lineHeight: '18px',
  letterSpacing: '-0.006em',
  fontWeight: '400',
}],
```

**Usage**:
```tsx
<small className="text-footnote text-label-tertiary">
  Auxiliary information or legal text
</small>
```

**When to use**:
- Fine print
- Legal disclaimers
- Timestamps
- Image captions

---

### Caption 1
**Size**: 12px (0.75rem)
**Line Height**: 16px (1.333)
**Weight**: 400 (Regular)
**Tracking**: 0px

```javascript
'caption-1': ['12px', {
  lineHeight: '16px',
  letterSpacing: '0em',
  fontWeight: '400',
}],
```

**Usage**:
```tsx
<figcaption className="text-caption-1 text-label-tertiary">
  Image caption or photo credit
</figcaption>
```

**When to use**:
- Image captions
- Small labels
- Badge text
- Minimal UI elements

---

### Caption 2
**Size**: 11px (0.688rem)
**Line Height**: 13px (1.182)
**Weight**: 400 (Regular)
**Tracking**: 0.066px

```javascript
'caption-2': ['11px', {
  lineHeight: '13px',
  letterSpacing: '0.006em',
  fontWeight: '400',
}],
```

**Usage**:
```tsx
<span className="text-caption-2 text-label-quaternary">
  Smallest readable text
</span>
```

**When to use**:
- Smallest UI labels
- Micro-copy
- Minimum readable size
- Use sparingly

---

## Font Weights

Apple uses specific font weights for hierarchy:

```javascript
// tailwind.config.js
fontWeight: {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
}
```

**Weight Guidelines**:
- **Regular (400)**: Body text, descriptions, content
- **Medium (500)**: Subtle emphasis, navigation items
- **Semibold (600)**: Subheadings, important labels
- **Bold (700)**: Headings, titles, primary emphasis

**Usage**:
```tsx
<p className="font-regular">Normal text</p>
<p className="font-medium">Medium weight</p>
<p className="font-semibold">Semibold text</p>
<p className="font-bold">Bold text</p>
```

## Complete Tailwind Configuration

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
        mono: [
          'SF Mono',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        'large-title': ['34px', { lineHeight: '41px', letterSpacing: '0.011em', fontWeight: '700' }],
        'title-1': ['28px', { lineHeight: '34px', letterSpacing: '0.013em', fontWeight: '700' }],
        'title-2': ['22px', { lineHeight: '28px', letterSpacing: '0.016em', fontWeight: '700' }],
        'title-3': ['20px', { lineHeight: '25px', letterSpacing: '0.019em', fontWeight: '600' }],
        'headline': ['17px', { lineHeight: '22px', letterSpacing: '-0.024em', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '22px', letterSpacing: '-0.024em', fontWeight: '400' }],
        'callout': ['16px', { lineHeight: '21px', letterSpacing: '-0.020em', fontWeight: '400' }],
        'subheadline': ['15px', { lineHeight: '20px', letterSpacing: '-0.016em', fontWeight: '400' }],
        'footnote': ['13px', { lineHeight: '18px', letterSpacing: '-0.006em', fontWeight: '400' }],
        'caption-1': ['12px', { lineHeight: '16px', letterSpacing: '0em', fontWeight: '400' }],
        'caption-2': ['11px', { lineHeight: '13px', letterSpacing: '0.006em', fontWeight: '400' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
}
```

## Typography Hierarchy Example

```tsx
export function TypographyShowcase() {
  return (
    <div className="space-y-6 p-8">
      <h1 className="text-large-title font-bold text-label-primary">
        Large Title - 34px Bold
      </h1>

      <h2 className="text-title-1 font-bold text-label-primary">
        Title 1 - 28px Bold
      </h2>

      <h3 className="text-title-2 font-bold text-label-primary">
        Title 2 - 22px Bold
      </h3>

      <h4 className="text-title-3 font-semibold text-label-primary">
        Title 3 - 20px Semibold
      </h4>

      <h5 className="text-headline font-semibold text-label-primary">
        Headline - 17px Semibold
      </h5>

      <p className="text-body text-label-primary">
        Body - 17px Regular. This is the default text style for main content.
        It provides excellent readability for longer paragraphs.
      </p>

      <p className="text-callout text-label-secondary">
        Callout - 16px Regular. Used for secondary information.
      </p>

      <span className="text-subheadline text-label-secondary block">
        Subheadline - 15px Regular. For labels and metadata.
      </span>

      <small className="text-footnote text-label-tertiary block">
        Footnote - 13px Regular. For auxiliary information.
      </small>

      <figcaption className="text-caption-1 text-label-tertiary">
        Caption 1 - 12px Regular. For captions and small labels.
      </figcaption>

      <span className="text-caption-2 text-label-quaternary block">
        Caption 2 - 11px Regular. Smallest readable text.
      </span>
    </div>
  )
}
```

## Best Practices

### Hierarchy
1. **Use only one Large Title per page** for maximum impact
2. **Establish clear levels** with consistent title sizes
3. **Limit to 3-4 heading levels** per page
4. **Use body text as default** for content
5. **Reserve smaller sizes** (footnote, captions) for truly secondary info

### Readability
1. **Line length**: Keep to 50-75 characters per line
2. **Line height**: Use default line heights provided
3. **Letter spacing**: Don't override tracking values
4. **Paragraph spacing**: Add margin between paragraphs (1rem)
5. **Alignment**: Prefer left-aligned for readability

### Contrast
```tsx
// Good: High contrast between text and background
<p className="text-label-primary bg-background-primary">Clear text</p>

// Better: Semantic hierarchy with color
<div>
  <h2 className="text-title-2 text-label-primary">Main Title</h2>
  <p className="text-body text-label-secondary">Supporting text</p>
  <small className="text-footnote text-label-tertiary">Fine print</small>
</div>
```

### Responsive Typography

Use responsive text sizes for mobile:

```tsx
<h1 className="text-title-2 sm:text-title-1 lg:text-large-title">
  Responsive Heading
</h1>

<p className="text-callout sm:text-body">
  Responsive body text
</p>
```

### Truncation

Handle long text gracefully:

```tsx
// Single line truncation
<p className="text-body text-label-primary truncate">
  Very long text that will be truncated with an ellipsis...
</p>

// Multi-line clamp (2 lines)
<p className="text-body text-label-secondary line-clamp-2">
  Longer text that spans multiple lines but will be clamped to two lines
  with an ellipsis at the end if it exceeds that length.
</p>

// Multi-line clamp (3 lines)
<p className="text-body line-clamp-3">
  Even longer content here...
</p>
```

## Common Patterns

### Article Header
```tsx
<header className="space-y-4 mb-8">
  <h1 className="text-large-title font-bold text-label-primary">
    Article Title Goes Here
  </h1>
  <div className="flex items-center gap-4 text-subheadline text-label-secondary">
    <span>John Doe</span>
    <span>•</span>
    <time>March 15, 2024</time>
    <span>•</span>
    <span>5 min read</span>
  </div>
</header>
```

### Card with Typography
```tsx
<div className="p-6 rounded-apple-lg bg-background-secondary">
  <h3 className="text-title-3 font-semibold text-label-primary mb-2">
    Card Title
  </h3>
  <p className="text-body text-label-secondary mb-4">
    Card description with supporting information about the content.
  </p>
  <span className="text-footnote text-label-tertiary">
    Last updated 2 hours ago
  </span>
</div>
```

### Form Label
```tsx
<div className="space-y-2">
  <label htmlFor="email" className="text-subheadline font-medium text-label-primary">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    placeholder="you@example.com"
    className="text-body text-label-primary placeholder:text-label-tertiary"
  />
  <p className="text-footnote text-label-tertiary">
    We'll never share your email with anyone else.
  </p>
</div>
```

### List Item
```tsx
<li className="py-3 border-b border-separator-opaque">
  <h4 className="text-headline font-semibold text-label-primary mb-1">
    Item Title
  </h4>
  <p className="text-callout text-label-secondary mb-2">
    Item description providing additional context.
  </p>
  <span className="text-footnote text-label-tertiary">
    2 days ago
  </span>
</li>
```

## Accessibility

### Semantic HTML
Always use proper heading hierarchy:

```tsx
// ✅ Good: Proper hierarchy
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>

// ❌ Bad: Skipped levels
<h1>Page Title</h1>
  <h3>Section</h3> {/* Skipped h2 */}
```

### Screen Readers
```tsx
// Visually hidden but readable by screen readers
<h2 className="sr-only">Navigation</h2>

// Aria labels for decorative text
<span aria-label="User rating: 4.5 out of 5 stars">
  ⭐⭐⭐⭐✨
</span>
```

### Minimum Sizes
- **Never use text smaller than 11px** (caption-2)
- **Prefer 13px+** for body content
- **Target 17px** for optimal readability

## Testing Checklist

- [ ] Text is readable at all sizes
- [ ] Hierarchy is clear and consistent
- [ ] Line lengths are 50-75 characters
- [ ] Proper contrast ratios maintained
- [ ] Works in light and dark modes
- [ ] No custom font weights outside system
- [ ] Proper semantic HTML heading structure
- [ ] Tested on various screen sizes
- [ ] Truncation handles long text gracefully
