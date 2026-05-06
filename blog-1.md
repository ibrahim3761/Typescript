# Why `any` is a Type Safety Hole and `unknown` is the Safer Alternative

## Introduction

TypeScript’s primary goal is to bring type safety to JavaScript. However, the `any` type completely bypasses this safety, which is why it is often called a "type safety hole". In contrast, `unknown` provides a safer way to handle uncertain data while still enforcing checks.

---

## What is `any` and Why is it Dangerous?

The `any` type disables type checking entirely. Once we use `any`, TypeScript stops helping us.

### Example:

```ts
let value: any = "Hello";

value = 42;        // No error
value.toUpperCase(); // Runtime error (as it is a number, it can't be tranfered to upper case)
```

### Problem:

* No compile-time errors
* Bugs appear at runtime
* Breaks TypeScript’s purpose

---

## What is `unknown`?

`unknown` is a safer alternative to `any`. It forces us to check the type before using it.

### Example:

```ts
let value: unknown = "Hello";

value = 42;

value.toUpperCase(); //Error (as it does not know it's type )

//To avoid
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

## Type Narrowing Explained

Type narrowing means reducing a variable’s type to a more specific one using checks.

### Common Type Narrowing Methods:

#### 1. `typeof`

```ts
if (typeof value === "number") {
  console.log(value + 10);
}
```

#### 2. `instanceof`

```ts
if (value instanceof Date) {
  console.log(value.getFullYear());
}
```

#### 3. Custom Type Guards

```ts
function isString(val: unknown): val is string {
  return typeof val === "string";
}

if (isString(value)) {
  console.log(value.toUpperCase());
}
```

---

## Conclusion

Using `any` is like turning off TypeScript entirely—it creates a type safety hole. On the other hand, `unknown` forces us to write safer, more predictable code through type narrowing.

Best Practice:

* Avoid `any` whenever possible
* Use `unknown` when dealing with uncertain data
