# CSS Fundamentals - Modern CSS Techniques

## CSS Grid Layout

CSS Grid is a powerful two-dimensional layout system that makes creating complex layouts simple and maintainable.

### Basic Grid Example

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## CSS Custom Properties (Variables)

Create maintainable, theme-able designs with CSS variables.

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --spacing-unit: 8px;
  --border-radius: 12px;
}

.button {
  background: var(--primary-color);
  color: white;
  padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 4);
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
}
```

## Modern Selectors

### :has() Selector (Parent Selector)

```css
/* Style a card differently if it contains an image */
.card:has(img) {
  grid-column: span 2;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

/* Style form when it has invalid inputs */
form:has(:invalid) {
  border-color: red;
}
```

### :is() and :where() for Simplified Selectors

```css
/* Instead of repeating selectors */
:is(h1, h2, h3, h4) {
  font-family: 'Playfair Display', serif;
  line-height: 1.2;
}

:is(.primary-btn, .secondary-btn, .tertiary-btn):hover {
  transform: scale(1.05);
}
```

## Container Queries

Style elements based on their container size, not viewport size.

```css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 1rem;
  }
}
```

## Flexbox for Component Layout

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
```

## Responsive Typography

```css
h1 {
  /* Fluid typography that scales with viewport */
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.1;
}

p {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.6;
}
```

## Practice Exercise

Create a responsive card grid that:
- Uses CSS Grid with auto-fit columns
- Implements CSS custom properties for theming
- Has smooth hover animations
- Uses modern selectors like :has()
- Is fully responsive with container queries

## Resources

- [MDN CSS Grid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Modern CSS Solutions](https://moderncss.dev/)
