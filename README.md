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

### `generatePrefixedId`

Generates UUID with a prefix

**Usage:**

```typescript
import { generatePrefixedId } from "largs-utils";

generatePrefixedId("usr"); // usr_<uuid>
generatePrefixedId("kyl"); // kyl_<uuid>
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

### `isValidHttpUrl`

Validates if a given string is a valid URL

**Usage:**

```typescript
import { isValidHttpUrl } from "largs-utils";

isValidHttpUrl("https://google.com"); // true
isValidHttpUrl("http://example.com"); // true
isValidHttpUrl("ftp://fileserver.com"); // false
isValidHttpUrl("javascript:alert(1)"); // false
isValidHttpUrl("random-string"); // false
```

### `isValidGoogleMapsUrl`

Detect if a URL is a valid Google Maps link

**Usage:**

```typescript
import { isValidGoogleMapsUrl } from "largs-utils";

isValidGoogleMapsUrl(
  "https://www.google.com/maps/place/Metrotent+Convention+Center/@14.58631,121.06406,17z"
); // true
isValidGoogleMapsUrl("https://maps.google.com/maps?q=place"); // true
isValidGoogleMapsUrl("https://www.example.com/maps/place"); // false
isValidGoogleMapsUrl("not a url"); // false
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

#### Support my enthusiasm

If you like this util, feel free to buy me a coffee ☕!

[![Buy Me A Coffee](https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=☕&slug=yourusername&button_colour=FF813F&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=ffffff)](https://www.buymeacoffee.com/devlargs)
