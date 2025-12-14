# Apple Design System - Animations Reference

Comprehensive guide to implementing fluid, purposeful animations following Apple's motion design principles.

## Motion Philosophy

Apple's approach to animation:
1. **Purposeful** - Every animation has a clear reason
2. **Subtle** - Enhances without distracting
3. **Fast** - Keeps pace with user thought
4. **Natural** - Follows physics and real-world motion
5. **Accessible** - Respects motion preferences

## Timing and Duration

### Standard Durations

Apple uses consistent timing for predictable, harmonious motion:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        'apple-fast': '200ms',     // Quick interactions (hover, focus)
        'apple': '300ms',           // Default (most animations)
        'apple-slow': '400ms',      // Complex/larger movements
      },
    },
  },
}
```

**Usage Guidelines**:

| Duration | Use For | Examples |
|----------|---------|----------|
| 150-200ms | Instant feedback | Hover states, button press |
| 250-300ms | Standard transitions | Page transitions, modals |
| 350-400ms | Complex animations | Sheet presentations, multi-step |

### Easing Curves

Apple's signature easing creates natural, physics-based motion:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0.0, 0.2, 1)',        // Standard ease
        'apple-ease-in': 'cubic-bezier(0.42, 0, 1, 1)',   // Accelerating
        'apple-ease-out': 'cubic-bezier(0, 0, 0.58, 1)',  // Decelerating
        'apple-spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Spring effect
      },
    },
  },
}
```

**Choosing the Right Curve**:

- **Standard** (`apple`): General purpose, most common
- **Ease In** (`apple-ease-in`): Elements leaving the screen
- **Ease Out** (`apple-ease-out`): Elements entering the screen
- **Spring** (`apple-spring`): Playful, bouncy effects (use sparingly)

## Core Animation Patterns

### Fade Animations

```tsx
// Fade in
<div className="animate-in fade-in duration-300">
  Content fades in
</div>

// Fade out
<div className="animate-out fade-out duration-300">
  Content fades out
</div>

// Fade with custom timing
<div className="transition-opacity duration-apple ease-apple opacity-0 hover:opacity-100">
  Hover to reveal
</div>
```

### Slide Animations

```tsx
// Slide in from bottom (sheets, modals)
<div className="animate-in slide-in-from-bottom duration-300 ease-apple">
  Modal content
</div>

// Slide in from right (side panels)
<div className="animate-in slide-in-from-right duration-300">
  Side panel
</div>

// Slide in from top (notifications)
<div className="animate-in slide-in-from-top duration-300">
  Notification
</div>

// Custom slide distance
<div className="transition-transform duration-apple translate-y-4 hover:translate-y-0">
  Lifts on hover
</div>
```

### Scale Animations

```tsx
// Button press effect
<button className="transition-transform duration-200 active:scale-95">
  Press me
</button>

// Card hover effect
<div className="transition-transform duration-apple hover:scale-[1.02]">
  Card content
</div>

// Zoom in entrance
<div className="animate-in zoom-in-95 duration-300">
  Appears with zoom
</div>
```

### Combined Animations

```tsx
// Fade + Slide (common for modals)
<div className="animate-in fade-in slide-in-from-bottom duration-300">
  Modal appears with fade and slide
</div>

// Fade + Scale
<div className="animate-in fade-in zoom-in-95 duration-300">
  Gentle pop-in effect
</div>

// Fade + Slide with stagger
<div className="animate-in fade-in slide-in-from-bottom duration-300 delay-100">
  Second element (staggered)
</div>
```

## Hover & Interactive States

### Button Hover

```tsx
// Filled button
<button className="bg-apple-blue-500 hover:bg-apple-blue-600 transition-colors duration-200">
  Hover for color change
</button>

// Scale on hover
<button className="transition-transform duration-200 hover:scale-105 active:scale-95">
  Hover to grow, press to shrink
</button>

// Tinted button
<button className="bg-apple-blue-500/10 hover:bg-apple-blue-500/20 transition-colors duration-200">
  Tinted hover
</button>
```

### Card Hover

```tsx
<div className="group rounded-apple-lg bg-background-secondary shadow-apple hover:shadow-apple-md transition-all duration-apple">
  <img className="group-hover:scale-105 transition-transform duration-300" src="..." alt="..." />
  <div className="p-4">
    <h3 className="group-hover:text-apple-blue-500 transition-colors duration-200">
      Card title
    </h3>
  </div>
</div>
```

### Link Hover

```tsx
// Underline expansion
<a
  href="#"
  className="relative text-apple-blue-500 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-apple-blue-500 after:transition-all after:duration-300 hover:after:w-full"
>
  Link with expanding underline
</a>

// Color transition
<a href="#" className="text-label-primary hover:text-apple-blue-500 transition-colors duration-200">
  Color changing link
</a>
```

## Page Transitions

### Framer Motion Setup

```bash
npm install framer-motion
```

### Page Fade Transition

```tsx
// app/template.tsx (Next.js App Router)
'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

### Slide Transition

```tsx
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

<motion.div
  custom={direction}
  variants={slideVariants}
  initial="enter"
  animate="center"
  exit="exit"
  transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
>
  {children}
</motion.div>
```

## Modal & Dialog Animations

### Modal Entry

```tsx
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function Modal({ isOpen, onClose }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog onClose={onClose}>
        {/* Backdrop fade */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        {/* Modal slide + fade */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="...">
            Modal content
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
```

### Bottom Sheet

```tsx
<motion.div
  initial={{ y: '100%' }}
  animate={{ y: 0 }}
  exit={{ y: '100%' }}
  transition={{
    type: 'spring',
    damping: 30,
    stiffness: 300,
  }}
  className="fixed inset-x-0 bottom-0 rounded-t-apple-xl bg-background-primary"
>
  Sheet content
</motion.div>
```

## List Animations

### Staggered Entry

```tsx
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms delay between children
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function List({ items }) {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {items.map((item) => (
        <motion.li
          key={item.id}
          variants={itemVariants}
          transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
        >
          {item.content}
        </motion.li>
      ))}
    </motion.ul>
  )
}
```

### Reordering Animation

```tsx
import { Reorder } from 'framer-motion'

function ReorderableList({ items, setItems }) {
  return (
    <Reorder.Group values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item
          key={item.id}
          value={item}
          transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
        >
          {item.content}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}
```

## Loading States

### Spinner

```tsx
// Pure CSS spinner
<div className="w-6 h-6 border-2 border-apple-gray-300 dark:border-apple-gray-700 border-t-apple-blue-500 rounded-full animate-spin" />

// Framer Motion spinner
<motion.div
  className="w-6 h-6 border-2 border-apple-gray-300 border-t-apple-blue-500 rounded-full"
  animate={{ rotate: 360 }}
  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
/>
```

### Pulse Animation

```tsx
<div className="w-16 h-16 rounded-full bg-apple-blue-500 animate-pulse" />

// Custom pulse
<motion.div
  animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
  className="w-16 h-16 rounded-full bg-apple-blue-500"
/>
```

### Skeleton Loading

```tsx
function Skeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-apple-gray-200 dark:bg-apple-gray-800 rounded w-3/4" />
      <div className="h-4 bg-apple-gray-200 dark:bg-apple-gray-800 rounded w-1/2" />
      <div className="h-4 bg-apple-gray-200 dark:bg-apple-gray-800 rounded w-5/6" />
    </div>
  )
}

// Advanced shimmer effect
<div className="relative overflow-hidden bg-apple-gray-200 dark:bg-apple-gray-800 rounded">
  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
</div>

// Add to globals.css
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
```

### Progress Bar

```tsx
<motion.div
  className="h-1 bg-apple-blue-500 rounded-full"
  initial={{ width: 0 }}
  animate={{ width: `${progress}%` }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
/>
```

## Micro-interactions

### Checkbox

```tsx
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

function AnimatedCheckbox({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={cn(
        "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200",
        checked
          ? "bg-apple-blue-500 border-apple-blue-500"
          : "border-apple-gray-400 dark:border-apple-gray-600"
      )}
    >
      <motion.div
        initial={false}
        animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        <Check className="w-3 h-3 text-white" strokeWidth={3} />
      </motion.div>
    </button>
  )
}
```

### Toggle Switch

```tsx
function AnimatedToggle({ enabled, setEnabled }) {
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={cn(
        "relative w-14 h-8 rounded-full transition-colors duration-300",
        enabled ? "bg-apple-green-500" : "bg-apple-gray-300 dark:bg-apple-gray-700"
      )}
    >
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-sm"
        animate={{ x: enabled ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  )
}
```

### Counter Badge

```tsx
<motion.span
  key={count}
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  exit={{ scale: 0 }}
  className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-apple-red-500 text-white text-caption-2"
>
  {count}
</motion.span>
```

## Scroll Animations

### Fade In On Scroll

```tsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeInOnScroll({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

### Parallax Effect

```tsx
import { useScroll, useTransform, motion } from 'framer-motion'

function ParallaxSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <motion.div style={{ y }} className="...">
      Parallax content
    </motion.div>
  )
}
```

## Accessibility Considerations

### Respecting Motion Preferences

```tsx
import { useReducedMotion } from 'framer-motion'

function ResponsiveAnimation() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
    >
      Respects user preferences
    </motion.div>
  )
}
```

### CSS Media Query

```css
/* globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Best Practices

### Do's
- ✅ Keep animations under 400ms for responsiveness
- ✅ Use consistent easing curves (Apple easing)
- ✅ Respect `prefers-reduced-motion`
- ✅ Provide instant feedback (hover, active states)
- ✅ Use GPU-accelerated properties (transform, opacity)
- ✅ Test on actual devices (60fps minimum)
- ✅ Stagger list items for clarity (50-100ms delay)
- ✅ Use spring physics for natural feel

### Don'ts
- ❌ Don't animate layout properties (width, height, top, left)
- ❌ Don't overuse bouncy/spring effects
- ❌ Don't create motion sickness (excessive parallax)
- ❌ Don't animate everything - be purposeful
- ❌ Don't ignore reduced motion preferences
- ❌ Don't use animations longer than 500ms
- ❌ Don't animate too many elements simultaneously
- ❌ Don't sacrifice performance for fancy effects

## Performance Tips

### Use CSS Transforms

```tsx
// ✅ Good: GPU-accelerated
<div className="transform translate-x-4 transition-transform">Fast</div>

// ❌ Bad: CPU-bound
<div className="left-4 transition-all">Slow</div>
```

### Will-Change for Complex Animations

```css
.animated-element {
  will-change: transform, opacity;
}

/* Remove after animation completes */
.animated-element.animation-done {
  will-change: auto;
}
```

### Lazy Load Animations

```tsx
// Only load Framer Motion when needed
const MotionComponent = lazy(() => import('./motion-component'))

<Suspense fallback={<StaticVersion />}>
  <MotionComponent />
</Suspense>
```

## Testing Animations

### Visual Regression Testing

```bash
npm install --save-dev @storybook/addon-interactions
```

### Performance Testing

1. Open Chrome DevTools
2. Performance tab > Record
3. Trigger animation
4. Check for 60fps (16.67ms per frame)
5. Look for dropped frames

## Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Headless UI Transitions](https://headlessui.com/react/transition)
- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [CSS Easing Functions](https://easings.net/)
- [Apple Design Resources](https://developer.apple.com/design/resources/)
