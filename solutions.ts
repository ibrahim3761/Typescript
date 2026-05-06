//Problem-1

const filterEvenNumbers = (arr: number[]): number[] => {
  const res: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//Problem-2

const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

console.log(reverseString("typescript"));

//Problem-3

type StringOrNumber = string | number;

const checkType = (val: StringOrNumber): string => {
  if (val === "String") {
    return "String";
  } else {
    return "Number";
  }
};

console.log(checkType("Hello"));

//Problem-4

const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "age"));

//Problem-5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface BookStat extends Book {
  isRead: boolean;
}

const toggleReadStatus = (mybook: Book): BookStat => {
  return {
    ...mybook,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
console.log(toggleReadStatus(myBook));

//Problem-6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number,grade:string) {
    super(name,age);
    this.grade = grade
  }

  getDetails(){
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

//Problem-7 