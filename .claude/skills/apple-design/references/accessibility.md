# Apple Design System - Accessibility Reference

Comprehensive accessibility guidelines for building inclusive web applications following WCAG 2.1 standards and Apple's commitment to universal design.

## Core Principles

Apple's accessibility philosophy:
1. **Everyone can use** - Design for all abilities from the start
2. **Built-in, not bolted on** - Accessibility is integral, not an afterthought
3. **Works with assistive tech** - Compatible with screen readers, switches, voice control
4. **Exceeds standards** - Meet WCAG AAA where possible, minimum AA

## Color Contrast

### WCAG Standards

| Content Type | Normal (AA) | Enhanced (AAA) |
|-------------|-------------|----------------|
| Normal text (< 18pt / 24px) | 4.5:1 | 7:1 |
| Large text (≥ 18pt / 24px bold or ≥ 24pt / 32px) | 3:1 | 4.5:1 |
| UI components & graphics | 3:1 | - |
| Inactive/disabled elements | No requirement | - |

### Testing Contrast

**Tools**:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools (Inspect > Accessibility tab)
- [Stark Plugin](https://www.getstark.co/) for Figma/Sketch

**Good Examples**:
```tsx
// ✅ AA Compliant: Primary text on primary background
<p className="text-label-primary bg-background-primary">
  High contrast text (WCAG AA: ~13:1)
</p>

// ✅ AA Compliant: White on blue
<button className="bg-apple-blue-500 text-white">
  Button text (WCAG AA: 4.5:1)
</button>

// ✅ AAA Compliant: Dark text on light background
<div className="bg-apple-gray-50 text-apple-gray-900">
  Maximum contrast (WCAG AAA: 16:1)
</div>
```

**Bad Examples**:
```tsx
// ❌ Insufficient: Quaternary text on tertiary background
<span className="text-label-quaternary bg-background-tertiary">
  Low contrast (~1.5:1) - fails WCAG
</span>

// ❌ Insufficient: Light gray on white
<p className="text-apple-gray-300 bg-white">
  Barely visible (~2:1) - fails WCAG
</p>
```

### Color Contrast in Dark Mode

Maintain proper contrast ratios in dark mode:

```tsx
// ✅ Good: Adjusts for both modes
<button className="bg-apple-blue-500 dark:bg-apple-blue-600 text-white">
  Accessible in both modes
</button>

// ✅ Good: Semantic colors auto-adjust
<p className="text-label-primary bg-background-primary">
  Automatically maintains contrast
</p>
```

## Semantic HTML

Use proper HTML elements for meaning and structure:

### Headings Hierarchy

```tsx
// ✅ Good: Proper hierarchy
<h1>Page Title</h1>
  <h2>Main Section</h2>
    <h3>Subsection</h3>
    <h3>Another Subsection</h3>
  <h2>Another Section</h2>

// ❌ Bad: Skipped levels
<h1>Page Title</h1>
  <h3>Section</h3> {/* Skipped h2 */}
  <h5>Subsection</h5> {/* Skipped h3 and h4 */}
```

### Semantic Elements

```tsx
// ✅ Good: Semantic HTML
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main id="main-content">
  <article>
    <h1>Article Title</h1>
    <section>
      <h2>Section</h2>
      <p>Content...</p>
    </section>
  </article>
</main>

<footer>
  <p>&copy; 2024 Company</p>
</footer>

// ❌ Bad: Divs for everything
<div id="header">
  <div id="nav">
    <div><div>Home</div></div>
  </div>
</div>
<div id="content">...</div>
<div id="footer">...</div>
```

## ARIA Attributes

Enhance HTML with ARIA when semantic elements aren't enough.

### ARIA Landmarks

```tsx
<nav aria-label="Main navigation">...</nav>
<nav aria-label="Footer navigation">...</nav>

<main aria-label="Main content">...</main>

<aside aria-label="Sidebar">...</aside>

<form role="search" aria-label="Site search">...</form>
```

### ARIA Labels

```tsx
// Icon-only buttons MUST have labels
<button aria-label="Close modal">
  <X className="w-5 h-5" />
</button>

<button aria-label="Search">
  <Search className="w-5 h-5" />
</button>

// Descriptive labels for ambiguous links
<a href="/profile" aria-label="View user profile">
  Profile
</a>
```

### ARIA States

```tsx
// Button states
<button
  aria-pressed={isActive}
  aria-expanded={isExpanded}
  aria-disabled={isDisabled}
>
  Toggle
</button>

// Form inputs
<input
  aria-required={true}
  aria-invalid={hasError}
  aria-describedby="email-error"
/>
{hasError && (
  <span id="email-error" role="alert">
    Invalid email address
  </span>
)}
```

### ARIA Live Regions

Announce dynamic content changes:

```tsx
// Polite: Announce when user is idle
<div role="status" aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>

// Assertive: Announce immediately (use sparingly)
<div role="alert" aria-live="assertive">
  {errorMessage}
</div>

// Loading state
<div role="status" aria-live="polite" aria-busy={isLoading}>
  {isLoading ? 'Loading...' : 'Content loaded'}
</div>
```

### ARIA Hidden

Hide decorative elements from screen readers:

```tsx
// Decorative icon
<span aria-hidden="true">
  <Star className="w-4 h-4" />
</span>

// Icon with text label
<button>
  <Save className="w-5 h-5" aria-hidden="true" />
  <span>Save</span>
</button>
```

## Keyboard Navigation

Ensure all interactive elements are keyboard accessible.

### Focus Management

```tsx
// Visible focus indicators
<button className="focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:ring-offset-2 rounded-apple">
  Focusable button
</button>

// Custom focus styles
<a
  href="/link"
  className="focus:outline-none focus:underline focus:text-apple-blue-600"
>
  Link with focus style
</a>
```

### Tab Order

```tsx
// Natural tab order (default)
<form>
  <input name="first" /> {/* Tab 1 */}
  <input name="second" /> {/* Tab 2 */}
  <button>Submit</button> {/* Tab 3 */}
</form>

// Custom tab order (use sparingly)
<div>
  <button tabIndex={2}>Second</button>
  <button tabIndex={1}>First</button>
  <button tabIndex={3}>Third</button>
</div>

// Remove from tab order
<button tabIndex={-1}>Not keyboard accessible</button>

// Hidden but announced by screen readers
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-apple-blue-500 text-white rounded-apple">
  Skip to main content
</a>
```

### Keyboard Shortcuts

Common keyboard interactions:

| Key | Action |
|-----|--------|
| Tab | Move focus forward |
| Shift + Tab | Move focus backward |
| Enter | Activate button/link |
| Space | Activate button, toggle checkbox |
| Escape | Close modal/dropdown |
| Arrow keys | Navigate within components |
| Home / End | Jump to start/end of list |

**Implementation**:
```tsx
function Modal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return

    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Modal content */}
    </Dialog>
  )
}
```

### Focus Trapping

Trap focus within modals and dialogs:

```tsx
import { Dialog } from '@headlessui/react'

function Modal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      {/* Focus automatically trapped within dialog */}
      <Dialog.Panel>
        <Dialog.Title>Modal Title</Dialog.Title>
        <button onClick={onClose}>Close</button>
      </Dialog.Panel>
    </Dialog>
  )
}
```

## Screen Reader Support

### Screen Reader Only Content

```tsx
// Visually hidden but accessible to screen readers
<span className="sr-only">
  Loading, please wait
</span>

// Show on focus (skip links)
<a
  href="#main"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
>
  Skip to main content
</a>
```

### Descriptive Text

```tsx
// ✅ Good: Descriptive link text
<a href="/products">View all products</a>

// ❌ Bad: Generic link text
<a href="/products">Click here</a>

// ✅ Good: Context for icon buttons
<button aria-label="Delete item 'Project Alpha'">
  <Trash className="w-5 h-5" />
</button>

// ✅ Good: Image alt text
<img src="chart.png" alt="Sales chart showing 25% increase in Q3" />

// ✅ Good: Decorative images
<img src="decoration.png" alt="" /> {/* Empty alt for decorative */}
```

### Form Labels

```tsx
// ✅ Good: Explicit label association
<label htmlFor="email">Email Address</label>
<input id="email" type="email" name="email" />

// ✅ Good: Wrapping label
<label>
  <span>Email Address</span>
  <input type="email" name="email" />
</label>

// ✅ Good: aria-label for custom inputs
<div role="slider" aria-label="Volume" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
  {/* Custom slider UI */}
</div>

// ❌ Bad: No label
<input type="email" placeholder="Email" /> {/* Placeholder is not a label */}
```

## Touch Targets

### Minimum Sizes

```tsx
// ✅ Good: 44×44px minimum (iOS guideline)
<button className="min-w-[44px] min-h-[44px] flex items-center justify-center">
  <Icon className="w-5 h-5" />
</button>

// ✅ Good: Proper padding for touch
<button className="h-11 px-6 rounded-apple">
  Text button
</button>

// ❌ Bad: Too small
<button className="w-6 h-6">
  <Icon className="w-4 h-4" />
</button>
```

### Touch Target Spacing

```tsx
// ✅ Good: Adequate spacing between interactive elements
<div className="flex gap-4">
  <button className="h-11 px-6">Button 1</button>
  <button className="h-11 px-6">Button 2</button>
</div>

// ❌ Bad: Too close together
<div className="flex gap-1">
  <button className="h-8 px-2">Btn 1</button>
  <button className="h-8 px-2">Btn 2</button>
</div>
```

## Motion & Animation

### Reduced Motion

Respect user preferences for reduced motion:

```css
/* globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**React Implementation**:
```tsx
import { useReducedMotion } from 'framer-motion'

function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
    >
      Content
    </motion.div>
  )
}
```

### Essential Motion Only

```tsx
// ✅ Good: Provide static alternative
<button className={shouldReduceMotion ? "" : "hover:scale-105 transition-transform"}>
  Interactive element
</button>

// ✅ Good: Reduce but don't eliminate important animations
<div className={shouldReduceMotion ? "animate-none" : "animate-pulse"}>
  Loading indicator
</div>
```

## Form Accessibility

### Error Handling

```tsx
function FormField({ error }) {
  const errorId = useId()

  return (
    <div>
      <label htmlFor="email" className="text-subheadline text-label-secondary">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "w-full h-11 px-4 rounded-apple",
          error
            ? "border-apple-red-500 focus:ring-apple-red-500"
            : "border-apple-gray-300 focus:ring-apple-blue-500"
        )}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-1 text-footnote text-apple-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
```

### Required Fields

```tsx
<label htmlFor="name">
  Name <span className="text-apple-red-500" aria-label="required">*</span>
</label>
<input
  id="name"
  type="text"
  required
  aria-required="true"
/>
```

### Fieldset and Legend

```tsx
<fieldset>
  <legend className="text-headline text-label-primary mb-4">
    Shipping Address
  </legend>
  <div className="space-y-4">
    <input type="text" placeholder="Street" />
    <input type="text" placeholder="City" />
  </div>
</fieldset>
```

## Testing Accessibility

### Automated Testing

```bash
# Install testing tools
npm install --save-dev @axe-core/react jest-axe

# Run tests
npm test
```

```tsx
// Example test with jest-axe
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Button } from './button'

expect.extend(toHaveNoViolations)

test('Button has no accessibility violations', async () => {
  const { container } = render(<Button>Click me</Button>)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

### Manual Testing

**Keyboard Navigation**:
1. Unplug mouse/trackpad
2. Navigate entire app using only keyboard
3. Verify all interactive elements are reachable
4. Check focus indicators are visible
5. Ensure logical tab order

**Screen Reader Testing**:
- **macOS**: VoiceOver (Cmd + F5)
- **Windows**: NVDA (free) or JAWS
- **iOS**: VoiceOver (Settings > Accessibility)
- **Android**: TalkBack (Settings > Accessibility)

**Test Checklist**:
- [ ] All images have alt text
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible
- [ ] Logical heading hierarchy
- [ ] Form labels associated with inputs
- [ ] Error messages announced
- [ ] Color contrast meets WCAG AA
- [ ] Works with 200% text zoom
- [ ] Respects prefers-reduced-motion
- [ ] No accessibility errors in browser console

### Browser Tools

**Chrome DevTools**:
1. Open DevTools (F12)
2. Lighthouse tab > Generate report
3. Review accessibility score and issues
4. Inspect > Accessibility pane for ARIA info

**Firefox Accessibility Inspector**:
1. Open DevTools (F12)
2. Accessibility tab
3. Shows ARIA roles, states, and tree

## Common Patterns

### Accessible Modal

```tsx
import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'

function AccessibleModal({ isOpen, onClose, title, children }) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded-apple-xl bg-background-primary p-6 shadow-apple-xl">
          <Dialog.Title className="text-title-2 text-label-primary mb-4">
            {title}
          </Dialog.Title>

          <div className="mb-6">{children}</div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-apple-gray-100 dark:hover:bg-apple-gray-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
```

### Accessible Dropdown

```tsx
import { Menu } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

function AccessibleDropdown() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="h-11 px-4 flex items-center gap-2 rounded-apple border border-apple-gray-300">
        Options
        <ChevronDown className="w-4 h-4" aria-hidden="true" />
      </Menu.Button>

      <Menu.Items className="absolute mt-2 w-56 rounded-apple-lg bg-background-primary shadow-apple-md border border-apple-gray-200 py-1 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <button
              className={cn(
                "w-full text-left px-4 py-2 text-body",
                active && "bg-apple-gray-100 dark:bg-apple-gray-800"
              )}
            >
              Edit
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={cn(
                "w-full text-left px-4 py-2 text-body text-apple-red-500",
                active && "bg-apple-gray-100 dark:bg-apple-gray-800"
              )}
            >
              Delete
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
```

## Resources

### Standards & Guidelines
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Apple Accessibility](https://www.apple.com/accessibility/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Testing Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Lighthouse (Chrome)](https://developers.google.com/web/tools/lighthouse)

### Learning Resources
- [A11y Project](https://www.a11yproject.com/)
- [WebAIM Articles](https://webaim.org/articles/)
- [Inclusive Components](https://inclusive-components.design/)
