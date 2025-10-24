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

### `extractLatLngFromGoogleMapsUrl`

Extracts the longitude and latitude to a valid google maps url link

**Usage:**

```typescript
import { extractLatLngFromGoogleMapsUrl } from "largs-utils";

extractLatLngFromGoogleMapsUrl(
  "https://www.google.com/maps/@40.7128,-74.0060,15z"
); // { latitude: 40.7128, longitude: -74.006 }

extractLatLngFromGoogleMapsUrl("https://googlemaps.com"); // null
```

### `extractYoutubeVideoId`

Extract a YouTube video ID from different kinds of YouTube URLs

```typescript
extractYouTubeVideoID("https://www.youtube.com/watch?v=JWJz_MS1-I8&t=1815s"); // JWJz_MS1-I8
extractYouTubeVideoID("https://youtu.be/JWJz_MS1-I8"); // JWJz_MS1-I8
```

### `formatNumber`

Formats numbers into human-readable strings with appropriate unit suffixes (k, m, b).

**Usage:**

```typescript
import { formatNumber } from "largs-utils";

// Thousands
formatNumber(1000); // "1k"
formatNumber(1500); // "1.5k"
formatNumber(45678); // "45.7k"

// Millions
formatNumber(1000000); // "1m"
formatNumber(2500000); // "2.5m"
formatNumber(1234567); // "1.2m"

// Billions
formatNumber(1000000000); // "1b"
formatNumber(5500000000); // "5.5b"

// Regular numbers (less than 1000)
formatNumber(999); // "999"
formatNumber(123); // "123"

// Custom decimal precision
formatNumber(1234, 0); // "1k"
formatNumber(1234, 1); // "1.2k"
formatNumber(1234, 2); // "1.23k"

// Negative numbers
formatNumber(-1500); // "-1.5k"
formatNumber(-2500000); // "-2.5m"
```

### `generatePrefixedId`

Generates UUID with a prefix

**Usage:**

```typescript
import { generatePrefixedId } from "largs-utils";

generatePrefixedId("usr"); // usr_<uuid>
generatePrefixedId("kyl"); // kyl_<uuid>
```

### `generateSlug`

Converts a string to a URL-friendly slug format.

**Usage:**

```typescript
import { generateSlug } from "largs-utils";

generateSlug("Hello World!"); // "hello-world"
generateSlug("My Awesome Title"); // "my-awesome-title"
```

### `getYoutubeThumbnail`

Returns a youtube thumbnail for a given youtube video

**Usage:**

```typescript
import { getYoutubeThumbnail } from "largs-utils";

getYoutubeThumbnail("dQw4w9WgXcQ"); // `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`
```

### `isFacebookUrl`

Validates if a given string is a valid Facebook URL.

**Usage:**

```typescript
import { isFacebookUrl } from "largs-utils";

isFacebookUrl("https://facebook.com/profile"); // true
isFacebookUrl("https://www.facebook.com/pages"); // true
isFacebookUrl("https://m.facebook.com/mobile"); // true
isFacebookUrl("https://fb.com/short"); // true
isFacebookUrl("https://business.facebook.com/business"); // true
isFacebookUrl("https://google.com"); // false
isFacebookUrl("ftp://facebook.com"); // false
isFacebookUrl("not-a-url"); // false
```

### `isInstagramUrl`

Validates if a given string is a valid Instagram URL.

**Usage:**

```typescript
import { isInstagramUrl } from "largs-utils";

isInstagramUrl("https://instagram.com/username"); // true
isInstagramUrl("https://www.instagram.com/p/ABC123"); // true
isInstagramUrl("https://mobile.instagram.com/username"); // true
isInstagramUrl("https://google.com"); // false
isInstagramUrl("ftp://instagram.com"); // false
isInstagramUrl("not-a-url"); // false
```

### `isSpotifyUrl`

Validates if a given string is a valid Spotify URL.

**Usage:**

```typescript
import { isSpotifyUrl } from "largs-utils";

isSpotifyUrl("https://spotify.com/track/123"); // true
isSpotifyUrl("https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh"); // true
isSpotifyUrl("https://www.spotify.com/artist/456"); // true
isSpotifyUrl("https://accounts.spotify.com"); // true
isSpotifyUrl("https://google.com"); // false
isSpotifyUrl("ftp://spotify.com"); // false
isSpotifyUrl("not-a-url"); // false
```

### `isTwitterUrl`

Validates if a given string is a valid Twitter/X URL.

**Usage:**

```typescript
import { isTwitterUrl } from "largs-utils";

isTwitterUrl("https://twitter.com/username"); // true
isTwitterUrl("https://www.twitter.com/status/123"); // true
isTwitterUrl("https://x.com/username"); // true
isTwitterUrl("https://www.x.com/status/123"); // true
isTwitterUrl("https://mobile.twitter.com/username"); // true
isTwitterUrl("https://google.com"); // false
isTwitterUrl("ftp://twitter.com"); // false
isTwitterUrl("not-a-url"); // false
```

### `isYoutubeUrl`

Validates if a given string is a valid YouTube URL.

**Usage:**

```typescript
import { isYoutubeUrl } from "largs-utils";

isYoutubeUrl("https://youtube.com/watch?v=dQw4w9WgXcQ"); // true
isYoutubeUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // true
isYoutubeUrl("https://youtu.be/dQw4w9WgXcQ"); // true
isYoutubeUrl("https://m.youtube.com/watch?v=dQw4w9WgXcQ"); // true
isYoutubeUrl("https://music.youtube.com"); // true
isYoutubeUrl("https://google.com"); // false
isYoutubeUrl("ftp://youtube.com"); // false
isYoutubeUrl("not-a-url"); // false
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

### `isValidSocialLink`

Validates if a given string is a valid social media URL for the specified platform.

**Usage:**

```typescript
import { isValidSocialLink } from "largs-utils";

// Facebook URLs
isValidSocialLink("https://facebook.com/profile", "facebook"); // true
isValidSocialLink("https://www.facebook.com/pages", "facebook"); // true
isValidSocialLink("https://fb.com/short", "facebook"); // true

// Instagram URLs
isValidSocialLink("https://instagram.com/username", "instagram"); // true
isValidSocialLink("https://www.instagram.com/p/ABC123", "instagram"); // true

// Spotify URLs
isValidSocialLink("https://open.spotify.com/track/123", "spotify"); // true
isValidSocialLink("https://www.spotify.com/artist/456", "spotify"); // true

// Twitter URLs
isValidSocialLink("https://twitter.com/username", "twitter"); // true
isValidSocialLink("https://www.twitter.com/status/123", "twitter"); // true

// YouTube URLs
isValidSocialLink("https://youtube.com/watch?v=123", "youtube"); // true
isValidSocialLink("https://youtu.be/dQw4w9WgXcQ", "youtube"); // true

// Invalid cases
isValidSocialLink("https://google.com", "facebook"); // false
isValidSocialLink("ftp://facebook.com", "facebook"); // false
isValidSocialLink("not-a-url", "instagram"); // false
```

### `shuffleArray`

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

### `unslugify`

Convert slugs to Sentence Case

**Usage:**

```typescript
import { unslugify } from "largs-utils";

unslugify("my-awesome-title"); // "My Awesome Title"
unslugify("hello_world"); // "Hello World"
unslugify("  spaced--out__slug "); // "Spaced Out Slug"
```

#### Support my enthusiasm

If you like this util, feel free to buy me a coffee ☕!

[![Buy Me A Coffee](https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=☕&slug=yourusername&button_colour=FF813F&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=ffffff)](https://www.buymeacoffee.com/devlargs)
