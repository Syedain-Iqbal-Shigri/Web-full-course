# HTML5 Best Practices & Modern Structure

## Modern HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">
    
    <!-- Viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Your page description here (150-160 characters)">
    <meta name="keywords" content="relevant, keywords, here">
    <meta name="author" content="Your Name">
    
    <!-- Open Graph for Social Media -->
    <meta property="og:title" content="Your Page Title">
    <meta property="og:description" content="Your page description">
    <meta property="og:image" content="https://yoursite.com/image.jpg">
    <meta property="og:url" content="https://yoursite.com">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Your Page Title">
    <meta name="twitter:description" content="Your page description">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- Preconnect to external domains -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Stylesheet -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Page Title -->
    <title>Your Page Title - Site Name</title>
</head>
<body>
    <!-- Skip to main content for accessibility -->
    <a href="#main" class="skip-link">Skip to main content</a>
    
    <!-- Header -->
    <header role="banner">
        <nav role="navigation" aria-label="Main navigation">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Main Content -->
    <main id="main" role="main">
        <article>
            <h1>Main Heading</h1>
            <p>Content goes here...</p>
        </article>
    </main>
    
    <!-- Aside/Sidebar -->
    <aside role="complementary" aria-label="Related content">
        <h2>Related Content</h2>
        <p>Sidebar content...</p>
    </aside>
    
    <!-- Footer -->
    <footer role="contentinfo">
        <p>&copy; 2026 Your Name. All rights reserved.</p>
    </footer>
    
    <!-- Scripts at bottom for better performance -->
    <script src="script.js" defer></script>
</body>
</html>
```

## Semantic HTML5 Elements

### Structural Elements
```html
<header>    <!-- Page or section header -->
<nav>       <!-- Navigation links -->
<main>      <!-- Main content (only one per page) -->
<article>   <!-- Self-contained content -->
<section>   <!-- Thematic grouping of content -->
<aside>     <!-- Sidebar or tangentially related content -->
<footer>    <!-- Page or section footer -->
```

### Text Content
```html
<h1> to <h6>  <!-- Headings (use hierarchically) -->
<p>           <!-- Paragraphs -->
<blockquote>  <!-- Long quotations -->
<pre>         <!-- Preformatted text -->
<code>        <!-- Code snippets -->
```

### Lists
```html
<ul>          <!-- Unordered list -->
<ol>          <!-- Ordered list -->
<li>          <!-- List item -->
<dl>          <!-- Description list -->
<dt>          <!-- Term in description list -->
<dd>          <!-- Description in description list -->
```

## Accessibility Best Practices

### ARIA Landmarks
```html
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main role="main">
<aside role="complementary">
<footer role="contentinfo">
```

### Form Accessibility
```html
<form>
    <label for="username">Username:</label>
    <input 
        type="text" 
        id="username" 
        name="username" 
        required
        aria-required="true"
        aria-describedby="username-help"
    >
    <span id="username-help" class="help-text">
        Enter your username (3-20 characters)
    </span>
</form>
```

### Image Accessibility
```html
<!-- Decorative image -->
<img src="decoration.png" alt="" role="presentation">

<!-- Informative image -->
<img src="chart.png" alt="Sales increased by 45% in Q4 2025">

<!-- Complex image with longdesc -->
<img src="complex-chart.png" alt="Quarterly sales data" longdesc="#chart-details">
<div id="chart-details">
    <p>Detailed description of the chart...</p>
</div>
```

## Performance Optimization

### Lazy Loading Images
```html
<img 
    src="image.jpg" 
    alt="Description" 
    loading="lazy"
    width="800"
    height="600"
>
```

### Preloading Critical Resources
```html
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
```

### Async/Defer Scripts
```html
<!-- Defer: Execute after HTML parsing -->
<script src="script.js" defer></script>

<!-- Async: Execute as soon as available -->
<script src="analytics.js" async></script>
```

## SEO Best Practices

### Proper Heading Hierarchy
```html
<h1>Main Page Title</h1>
    <h2>Section Title</h2>
        <h3>Subsection Title</h3>
        <h3>Another Subsection</h3>
    <h2>Another Section</h2>
```

### Structured Data (JSON-LD)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2026-02-10"
}
</script>
```

## Common Mistakes to Avoid

❌ **Don't:**
- Skip heading levels (h1 → h3)
- Use `<div>` when semantic elements exist
- Forget alt text on images
- Use inline styles (use CSS instead)
- Nest `<button>` inside `<a>` or vice versa

✅ **Do:**
- Use semantic HTML5 elements
- Maintain proper heading hierarchy
- Include ARIA labels where needed
- Validate your HTML
- Test with screen readers

## HTML Validation

Always validate your HTML:
- [W3C Markup Validation Service](https://validator.w3.org/)
- Use browser DevTools
- Check accessibility with Lighthouse

## Resources

- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML5 Doctor](http://html5doctor.com/)
- [WebAIM Accessibility](https://webaim.org/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)
