
# bala-string-utils

A simple string utilities package created for learning how to publish packages to npm.

---

## ✨ Description

This is a personal learning project to understand the process of:

- Creating a Node.js package
- Writing basic string manipulation utilities
- Publishing a package to npm
- Managing package versions and updates

It provides small string helper functions that can be easily reused.

---

## 🚀 Installation

```bash
npm install bala-string-utils
```

---

## 📦 Usage

### Import

```javascript
import { capitalize, reverse } from 'bala-string-utils';
```

Or if using CommonJS:

```javascript
const { capitalize, reverse } = require('bala-string-utils');
```

---

## 🔥 Features

### 📍 `capitalize(str)`
Capitalizes the **first letter of each word** in a string.

✅ Example:
```javascript
capitalize('hello world'); 
// Output: 'Hello World'
```

---

### 📍 `reverse(str)`
Reverses the string.

✅ Example:
```javascript
reverse('hello world'); 
// Output: 'dlrow olleh'
```

---

## 🚀 Examples

```javascript
import { capitalize, reverse } from 'bala-string-utils';

console.log(capitalize('this is a test string'));
// Output: 'This Is A Test String'

console.log(reverse('hello world'));
// Output: 'dlrow olleh'
```

---

## 🛠️ Development

This package is mainly for learning how to:

- Build reusable Node.js modules
- Publish to npm
- Automate publishing with GitHub Actions

Feel free to fork or clone for experimenting!

---

## 📌 Versioning

This project uses [Semantic Versioning](https://semver.org/).

Examples:

- `1.0.0` – Initial stable release
- `1.1.0` – Adds new feature like `reverse`
- `1.1.1` – Bug fixes

---

## 📑 License

MIT License.  
Created by [Balaprasad](https://github.com/balaprasad370).

---

🚀 **Happy coding!**
