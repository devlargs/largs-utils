# largs-utils

A collection of personal utility functions that are reusable across various projects.

## Installation

```bash
npm install largs-utils
```

## Functions

### `camelToSentenceCase`

Converts a camelCase or PascalCase string into a readable sentence with spaces.

**Usage:**

```typescript
import { camelToSentenceCase } from "largs-utils";

console.log(camelToSentenceCase("helloWorld")); // "Hello World"
console.log(camelToSentenceCase("ThisIsATest")); // "This Is A Test"
console.log(camelToSentenceCase("JSONParser")); // "JSON Parser"
console.log(camelToSentenceCase("APITestCase")); // "API Test Case"
```

### `coercedGet`

Safely retrieves a value from an object with default handling.

**Usage:**

```typescript
import { coercedGet } from "largs-utils";

const obj = { a: { b: { c: 42 } } };
const value = coercedGet(obj, "a.b.c", 0);
console.log(value); // 42

const missingValue = coercedGet(obj, "a.b.x", 0);
console.log(missingValue); // 0
```

### `isValidEmail`

Validates if a given email address is in a proper format.

**Usage:**

```typescript
import { isValidEmail } from "largs-utils";

const email1 = "test@example.com";
const email2 = "invalid-email";

console.log(isValidEmail(email1)); // true
console.log(isValidEmail(email2)); // false
```

### `shuffleArray `

Randomly shuffles the elements of an array.

**Usage:**

```typescript
import { shuffleArray } from "largs-utils";

const array = [1, 2, 3, 4, 5];
const shuffled = shuffleArray(array);
console.log(shuffled); // e.g., [3, 1, 4, 5, 2]
```

### `toKebabCase`

Converts Sentence Case strings to kebab-case

**Usage:**

```typescript
import { toKebabCase } from "largs-utils";

console.log(toKebabCase("React Testing Library")); // react-testing-library
console.log(toKebabCase("Aliessa Dedase")); // aliessa-dedase
```
