export const blogPosts = [
  {
    slug: "getting-started-with-react-hooks",
    title: "Getting Started with React Hooks",
    author: "Tallha Waheed",
    date: "2024-11-15",
    description:
      "Learn the basics of React Hooks and how to use them in your functional components.",
    thumbnail: "",
    content: `# Getting Started with React Hooks

React Hooks have revolutionized the way we write React components. In this post, we'll explore the fundamentals of Hooks and how they can simplify your code.

## What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don't work inside classes — they let you use React without classes.

## The useState Hook

The \`useState\` Hook is one of the most commonly used hooks. It allows you to add state to functional components:

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

## The useEffect Hook

The \`useEffect\` Hook lets you perform side effects in function components. It serves the same purpose as \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` combined.

\`\`\`javascript
import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return <div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
\`\`\`

## Benefits of Hooks

- **Easier code reuse**: Extract stateful logic and reuse it across components
- **Simpler components**: Break complex components into smaller, manageable pieces
- **Better performance**: Optimize rendering by specifying dependencies

## Conclusion

React Hooks provide a powerful way to write cleaner, more maintainable React code. Start with \`useState\` and \`useEffect\`, and explore other hooks as you become more comfortable.

Happy coding!`,
  },
  {
    slug: "web-performance-optimization-tips",
    title: "Web Performance Optimization Tips",
    author: "Tallha Waheed",
    date: "2024-11-10",
    description:
      "Essential techniques to improve your website's performance and user experience.",
    thumbnail: "",
    content: `# Web Performance Optimization Tips

Website performance is crucial for user experience and SEO. In this post, we'll cover essential optimization techniques.

## Why Performance Matters

- Users expect websites to load in **2 seconds or less**
- Every second delay can result in a 7% loss of conversions
- Google uses page speed as a ranking factor

## 1. Minimize HTTP Requests

Reduce the number of HTTP requests by:
- Combining CSS files
- Using CSS sprites for icons
- Lazy loading images

## 2. Enable Compression

Use gzip compression to reduce file sizes:

\`\`\`bash
# In Nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
\`\`\`

## 3. Optimize Images

- Use modern formats like WebP
- Compress images without losing quality
- Implement responsive images with srcset

\`\`\`html
<img 
  src="image.jpg" 
  srcset="image-small.jpg 480w, image-large.jpg 1200w"
  alt="Description"
/>
\`\`\`

## 4. Leverage Browser Caching

Set appropriate cache headers:

\`\`\`
Cache-Control: public, max-age=31536000
\`\`\`

## 5. Code Splitting

Split your JavaScript bundles to load only what's needed:

\`\`\`javascript
// Using dynamic imports
const HeavyComponent = lazy(() => import('./HeavyComponent'));
\`\`\`

## 6. CDN Usage

Use a Content Delivery Network to serve static assets closer to users.

## Measuring Performance

Use tools like:
- Google PageSpeed Insights
- WebPageTest
- Lighthouse
- GTmetrix

## Conclusion

Performance optimization is an ongoing process. Start with the most impactful changes and monitor results using real user monitoring tools.`,
  },
  {
    slug: "building-responsive-layouts-with-bootstrap",
    title: "Building Responsive Layouts with Bootstrap",
    author: "Tallha Waheed",
    date: "2024-11-05",
    description:
      "Master Bootstrap's grid system and create beautiful responsive layouts.",
    thumbnail: "",
    content: `# Building Responsive Layouts with Bootstrap

Bootstrap's grid system is one of the most powerful features for creating responsive layouts. Let's explore how to use it effectively.

## Understanding the Grid System

Bootstrap uses a 12-column grid system. Every row should sum to 12 columns.

\`\`\`html
<div class="container">
  <div class="row">
    <div class="col-md-6">Half width on medium screens</div>
    <div class="col-md-6">Half width on medium screens</div>
  </div>
</div>
\`\`\`

## Responsive Breakpoints

Bootstrap defines several breakpoints:

| Device | Breakpoint | Class Prefix |
|--------|-----------|--------------|
| Extra Small | < 576px | \`.col-\` |
| Small | ≥ 576px | \`.col-sm-\` |
| Medium | ≥ 768px | \`.col-md-\` |
| Large | ≥ 992px | \`.col-lg-\` |
| Extra Large | ≥ 1200px | \`.col-xl-\` |

## Practical Examples

### Single Column Layout

\`\`\`html
<div class="container">
  <div class="row">
    <div class="col">Full width column</div>
  </div>
</div>
\`\`\`

### Two Column Layout

\`\`\`html
<div class="container">
  <div class="row">
    <div class="col-md-8">Main content</div>
    <div class="col-md-4">Sidebar</div>
  </div>
</div>
\`\`\`

### Three Column Layout

\`\`\`html
<div class="container">
  <div class="row">
    <div class="col-md-4">Column 1</div>
    <div class="col-md-4">Column 2</div>
    <div class="col-md-4">Column 3</div>
  </div>
</div>
\`\`\`

## Tips for Responsive Design

1. **Mobile First**: Start with mobile design and scale up
2. **Use Utility Classes**: Bootstrap provides helper classes like \`.d-flex\`, \`.justify-content-center\`
3. **Test Responsiveness**: Use browser DevTools to test different screen sizes
4. **Avoid Fixed Widths**: Use Bootstrap's column system instead of fixed pixel widths

## Advanced Features

### Offset Columns

\`\`\`html
<div class="col-md-4 offset-md-2">Offset by 2 columns</div>
\`\`\`

### Auto Layout

\`\`\`html
<div class="row">
  <div class="col">Auto width</div>
  <div class="col">Auto width</div>
  <div class="col">Auto width</div>
</div>
\`\`\`

## Conclusion

Bootstrap's grid system makes it easy to build responsive layouts. Master these concepts and you'll create beautiful, responsive websites that work on any device.`,
  },
  {
    slug: "introduction-to-machine-learning",
    title: "Introduction to Machine Learning",
    author: "Tallha Waheed",
    date: "2024-11-20",
    description:
      "A beginner's guide to understanding machine learning concepts, algorithms, and practical applications in web development.",
    thumbnail: "",
    content: `# Introduction to Machine Learning

Machine learning has become increasingly important in modern web development. In this post, we'll explore the fundamentals of machine learning and how you can integrate it into your applications.

## What is Machine Learning?

Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. Instead of following pre-defined rules, machine learning models learn patterns from data.

## Types of Machine Learning

### 1. Supervised Learning

Supervised learning uses labeled data to train models. The model learns from input-output pairs.

**Examples:**
- Classification (predicting categories)
- Regression (predicting continuous values)

\`\`\`python
# Simple classification example with scikit-learn
from sklearn.ensemble import RandomForestClassifier

clf = RandomForestClassifier(n_estimators=100)
clf.fit(X_train, y_train)
predictions = clf.predict(X_test)
\`\`\`

### 2. Unsupervised Learning

Unsupervised learning finds patterns in unlabeled data without predefined outputs.

**Examples:**
- Clustering (grouping similar data)
- Dimensionality reduction

### 3. Reinforcement Learning

Reinforcement learning trains agents to make decisions by rewarding desired behaviors and penalizing undesired ones.

## ML Libraries for JavaScript

If you're a JavaScript developer, there are great libraries available:

### TensorFlow.js

TensorFlow.js allows you to run machine learning models directly in the browser:

\`\`\`javascript
import * as tf from '@tensorflow/tfjs';

// Create a simple neural network
const model = tf.sequential({
  layers: [
    tf.layers.dense({ units: 64, activation: 'relu', inputShape: [10] }),
    tf.layers.dense({ units: 32, activation: 'relu' }),
    tf.layers.dense({ units: 1, activation: 'sigmoid' })
  ]
});

model.compile({
  optimizer: 'adam',
  loss: 'binaryCrossentropy',
  metrics: ['accuracy']
});
\`\`\`

### ML.js

ML.js is a simple machine learning library for JavaScript:

\`\`\`javascript
const ML = require('ml-lib');

// KNN classifier example
const knn = new ML.KNN([
  { x: [0, 0], y: 0 },
  { x: [1, 1], y: 1 },
]);

const prediction = knn.predict([0.1, 0.1]);
\`\`\`

## ML Applications in Web Development

### 1. Recommendation Systems

Suggest products, articles, or content based on user behavior and preferences.

### 2. Sentiment Analysis

Analyze user reviews, comments, and feedback to determine sentiment.

### 3. Image Recognition

Classify images, detect objects, or identify faces using computer vision models.

### 4. Natural Language Processing

Process and understand human language for chatbots, autocomplete, and text analysis.

### 5. Anomaly Detection

Detect unusual patterns in data for fraud detection and security monitoring.

## Getting Started with ML

1. **Learn the fundamentals**: Understand basic concepts like features, labels, and training/testing splits
2. **Choose a library**: Pick a framework suitable for your use case (TensorFlow, PyTorch, scikit-learn)
3. **Start with small projects**: Build simple classifiers or regressors to practice
4. **Experiment**: Try different algorithms and hyperparameters
5. **Optimize**: Focus on improving model accuracy and performance

## Common Challenges

- **Overfitting**: Model performs well on training data but poorly on new data
- **Data quality**: Poor quality data leads to poor models
- **Computational cost**: Training large models requires significant resources
- **Interpretability**: Understanding why a model makes specific predictions

## Conclusion

Machine learning is a powerful tool that can enhance your web applications with intelligent features. Start small, learn continuously, and gradually build expertise. The future of web development will increasingly involve machine learning!`,
  },
];


