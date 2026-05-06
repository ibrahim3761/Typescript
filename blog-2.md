# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Introduction

In TypeScript, one of the biggest challenges is writing reusable code without losing type safety. Without proper abstraction, developers often duplicate logic for different data types.

This is where `Generics` come in. Generics allow you to write flexible, reusable code while keeping strict type checking intact.

---

## What Are Generics?

Generics let you define a placeholder type that is determined when the function, type, or interface is used.

Instead of hardcoding types like `string` or `number`, we write code that works with **any type safely**.

---

## Generic Type Example :

```ts
type GenericArraay<T> = Array<T>;

const friends: GenericArraay<string> = ["Alice", "Bob", "Charlie"];
const rollNumbers: GenericArraay<number> = [1, 2, 3];
const isEligibleList: GenericArraay<boolean> = [true, false, true];

type User = {
  name: string;
  age: number;
};

const userList: GenericArraay<User> = [
  { name: "John Doe", age: 30 },
  { name: "Jane Smith", age: 25 },
];
```

## Generics with Tuples:

```ts
type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];
```

## Generic Functions (Eliminating Duplication)

### Without Generics:

```ts
const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: number) => [value];
```

This creates **duplicate logic**.

---

### With Generics:

```ts
const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("Hello");
const arrNumber = createArrayWithGeneric(42);
const arrUserObj = createArrayWithGeneric({
  id: 1,
  name: "Alice",
});
```

## Generic Tuple Function:

```ts
const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2
];

const res1 = createArrayTupleWithGeneric("Hello", false);
```

This allows:

* Multiple dynamic types
* Clean and reusable tuple creation

---


## Generics with Interfaces

```ts
interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releaseYear: string;
  };
  smartWatch: T;
  bike?: X;
}
```

---

### Example 1: Poor Developer

```ts
interface BrandcharaWatch {
  heartRate: string;
  stopWatch: boolean;
}

const poorDeveloper: Developer<
  BrandcharaWatch,
  { brand: "Yamaha"; engineCapacity: "200cc" }
> = {
  name: "John Doe",
  salary: 500,
  device: {
    brand: "Lenovo",
    model: "ThinkPad X1 Carbon",
    releaseYear: "2020",
  },
  smartWatch: {
    heartRate: "80 bpm",
    stopWatch: true,
  },
};
```

---

### Example 2: Rich Developer

```ts
interface RichDeveloperWatch {
  heartRate: string;
  stopWatch: boolean;
  callSupport: boolean;
  calculator: boolean;
  aiFeatures: boolean;
}

const richDeveloper: Developer<RichDeveloperWatch> = {
  name: "Jane Smith",
  salary: 50000,
  device: {
    brand: "Hp",
    model: "Envy 15",
    releaseYear: "2021",
  },
  smartWatch: {
    heartRate: "80 bpm",
    stopWatch: true,
    callSupport: true,
    calculator: true,
    aiFeatures: true,
  },
  bike: null,
};
```

---

## Why Generics Matter?

Generics help us to:

* Avoid code duplication
* Maintain strict type safety
* Build scalable systems
* Write reusable logic

---

## Conclusion

Generics are one of the most powerful features in TypeScript. They allow us to write flexible yet type-safe code that adapts to different data structures without duplication.

Instead of rewriting logic for every type, you define it once and reuse it everywhere.

Best Practice:

* Keep functions reusable
* Combine generics with interfaces for scalable architecture

---
