# JavaScript ES6+ Modern Features

## Destructuring

### Array Destructuring
```javascript
const colors = ['red', 'green', 'blue', 'yellow'];
const [primary, secondary, ...rest] = colors;

console.log(primary);    // 'red'
console.log(secondary);  // 'green'
console.log(rest);       // ['blue', 'yellow']
```

### Object Destructuring
```javascript
const user = {
  name: 'Alice',
  age: 28,
  email: 'alice@example.com',
  location: 'New York'
};

const { name, age, ...otherInfo } = user;
console.log(name);      // 'Alice'
console.log(otherInfo); // { email: '...', location: '...' }
```

## Arrow Functions
```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Multiple statements
const processUser = (user) => {
  const normalized = user.name.toLowerCase();
  return {
    ...user,
    name: normalized
  };
};

// No parameters
const getRandomNumber = () => Math.random();
```

## Template Literals
```javascript
const name = 'Developer';
const greeting = `Hello, ${name}!`;

// Multi-line strings
const html = `
  <div class="card">
    <h2>${name}</h2>
    <p>Welcome to the course!</p>
  </div>
`;

// Expression evaluation
const price = 100;
const message = `Total: $${price * 1.1}`;
```

## Async/Await
```javascript
// Fetching data from an API
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

// Multiple async operations
async function loadUserProfile(userId) {
  try {
    const [user, posts, comments] = await Promise.all([
      fetchUser(userId),
      fetchPosts(userId),
      fetchComments(userId)
    ]);
    
    return { user, posts, comments };
  } catch (error) {
    console.error('Error loading profile:', error);
  }
}
```

## Modern Array Methods

### map()
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]
```

### filter()
```javascript
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];

const adults = users.filter(user => user.age >= 21);
```

### reduce()
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
// 15

// Complex example: grouping
const products = [
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Shirt', category: 'Clothing' },
  { name: 'Phone', category: 'Electronics' }
];

const grouped = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {});
```

## Spread and Rest Operators

### Spread
```javascript
// Combine arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

// Copy and modify objects
const user = { name: 'Alice', age: 25 };
const updatedUser = { ...user, age: 26 };

// Function arguments
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers));
```

### Rest
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4, 5); // 15
```

## Optional Chaining
```javascript
const user = {
  name: 'Alice',
  address: {
    city: 'New York'
  }
};

// Safe navigation
const city = user?.address?.city;
const zip = user?.address?.zip; // undefined, no error

// With arrays
const firstItem = items?.[0];

// With functions
const result = obj.method?.();
```

## Nullish Coalescing
```javascript
const userInput = null;
const defaultValue = 'Default';

// Use ?? instead of ||
const value = userInput ?? defaultValue; // 'Default'

// Difference from ||
const zero = 0;
console.log(zero || 10);  // 10
console.log(zero ?? 10);  // 0
```

## Modules (ES6)

### Exporting
```javascript
// utils.js
export const PI = 3.14159;

export function calculateArea(radius) {
  return PI * radius * radius;
}

export default class Calculator {
  add(a, b) {
    return a + b;
  }
}
```

### Importing
```javascript
// app.js
import Calculator, { PI, calculateArea } from './utils.js';

const calc = new Calculator();
const area = calculateArea(5);
```

## Practice Exercises

1. **API Data Fetcher**: Create an async function that fetches user data and transforms it using map/filter
2. **Shopping Cart**: Use reduce to calculate total price with destructuring
3. **User Profile**: Build an object with spread/rest operators and optional chaining
4. **Module System**: Create a utility module with multiple exports

## Real-World Example

```javascript
// Modern user management system
class UserManager {
  constructor() {
    this.users = [];
  }

  async addUser(userData) {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      
      const newUser = await response.json();
      this.users = [...this.users, newUser];
      return newUser;
    } catch (error) {
      console.error('Failed to add user:', error);
      throw error;
    }
  }

  findUser(id) {
    return this.users.find(user => user.id === id);
  }

  filterByAge(minAge) {
    return this.users.filter(user => user.age >= minAge);
  }

  getUserStats() {
    return this.users.reduce((stats, user) => {
      const ageGroup = user.age < 30 ? 'young' : 'mature';
      stats[ageGroup] = (stats[ageGroup] || 0) + 1;
      return stats;
    }, {});
  }
}

// Usage
const manager = new UserManager();
await manager.addUser({ name: 'Alice', age: 25 });
const stats = manager.getUserStats();
```

## Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
