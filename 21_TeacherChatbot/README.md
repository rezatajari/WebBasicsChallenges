# Challenge 21 — Teacher Chatbot

**Responsive Web Design Certification – freeCodeCamp**

In this challenge, you create a **JavaScript program** where the bot teaches string manipulation concepts such as **template literals, string length, character access, and substring positions**. This project helps you practice dynamically building sentences and using string properties.

---

## Demo

When you run the program, the console outputs a series of explanations and examples:

```

Hi there!
My name is teacherBot.
Today, you will learn about strings in JavaScript.
Here is an example of using the length property on the word JavaScript.
10
Here is an example of using the length property on the word strings.
7
Here is an example of accessing the first letter in the word JavaScript.
J
Here is an example of accessing the second letter in the word JavaScript.
a
Here is an example of accessing the last letter in the word JavaScript.
t
Here are examples of finding the positions of substrings in the sentence.
0
13
-1
I hope you enjoyed learning today.

````

---

## Concepts Covered

- **Template literals** for dynamic string creation:  
  ```javascript
  const greeting = `My name is ${botName}.`;
````

**String length** with `.length`:

  ```javascript
  console.log(subject.length);
  ```

**Accessing characters** using bracket notation:

  ```javascript
  console.log(subject[0]);        // First character
  console.log(subject[subject.length - 1]); // Last character
  ```

**Finding substring positions** with `.indexOf()`:

  ```javascript
  console.log(learningIsFunSentence.indexOf("fun"));
  ```

---
## How It Works

1. Declare a `botName` and greet the user.
2. Introduce a `subject` and `topic` and create dynamic sentences using **template literals**.
3. Show examples of using the `.length` property on strings.
4. Demonstrate **accessing the first, second, and last characters** of a string.
5. Use `.indexOf()` to locate substrings within a sentence.
6. Conclude with a farewell message to the user.

---
## How to Run

1. Copy the code into a file named `stringBot.js`.
2. Open your terminal or command prompt and navigate to the file’s directory.
3. Run the script using Node.js:

```bash
node stringBot.js
```

4. Observe the output in the console.

---
## Technologies

* **JavaScript (ES6)**
* **Console output**
* **String properties and methods**
