# JS Object Oriented Programming

![](https://i.ytimg.com/vi/GEuS0tfLfEY/maxresdefault.jpg)

## Getting Started

- Fork and Clone
- `npm install` in this directory

## Overview

In this exercise, you'll use object oriented programming to create a school system. There are **32** tests that you have to pass. We'll utilize `inheritance` to create a blueprint for several schools. **You should be running the tests after each step with `npm test`.**

## Instructions

### Step 1

In the `School` class:

- set up a constructor that accepts a `schoolName` and `level`.
- store these in the constructor as class properties.
- set up a property called `students`. Set this to an empty array.
- create an `enrollStudent` method. It should accept a `student` as an argument.
- create a method called `listEnrollmentNumbers`. This method will not accept any arguments.

### Step 2

In the `High` class:

- inherit the `School` class:
- Set up a constructor that accepts a `name` as an argument.
- Make sure to call `super` in the constructor.
- Pass the `name` and hard code in a level in the `super` method. (Order matters, name should go first)
- create a property called `sportsTeams`. Set this to an empty array.
- create a method called `addTeam`, this should accept 1 argument called `team`

### Step 3

In the `Middle` class:

- inherit the `School` class
- set up a constructor that accepts `name` as an argument
- make sure to call `super` in the constructor
- pass the `name` argument to super and hard code in a `level`. (Order Matters)

### Step 4

In the `Primary` class:

- inherit the `School` class
- set up a constructor that accepts `name` and `pickUpPolicy` as arguments
- make sure to call `super` in the constructor
- pass the `name` argument to super and hard code in a `level`. (Order Matters)
- store the `pickUpPolicy` as a class property and set it to the `pickUpPolicy` argument
- create a method called `listPickUpPolicy`

### Step 5

In the `Student` class:

- accept `name` and `email` as arguments in the constructor
- store these as class properties

### Step 6

In the `School` class:

- The `enrollStudent` method should add a `student` to our `students` array.
- `listEnrollmentNumbers` should return the number of students in our `students` array.

### Step 7

In the `High` class:

- the `addTeam` method should add a `team` to our `sportsTeams` array.

### Step 8

In the `Primary` class:

- `listPickUpPolicy` should return the following string: `You must pick up your child at <Whatever the pickup policy is>!`. Make sure to replace the contents in `<>` with your pickup policy property. **Make sure to remove the `<>`!**

### Step 9

In the `SportsTeam` class:

- set up a constructor with a `name`, `sport` and `numOfPlayers` property. These should be provided in the constructor arguments

### Step 10

Once all **32** tests have passed, open the `playground.js` file. Here you'll find:

```js
const { High, Middle, Primary, SportsTeam, Student } = require('.')
```

The classes you've built have been loaded into this file for you. **DO NOT MODIFY LINE 1.**

- Create a new instance of the `High` class.
- Create `5` new students with the `Student` class.
- Add the `5` new students to the `students` property in the new instance of the `High` class. \*We inherited from the `School` class which means we have access to the `enrollStudent` method.
- Create `2` new sports teams. Add these to the instance of the `High` class you created utilzing the `addTeam` method.
- `console.log` your instance of the `High` class.
- Run the `playground.js` file with `node playground.js` in your terminal.

## Additional Practice

Using the `playground.js` file, create a few more instances of the `Middle`, `Primary` and `Student` classes. Try mixing and matching which school the students are enrolled in.

## Resources

- [OOP For Beginners](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [What is OOP?](https://codeburst.io/learn-javascript-oop-a-primer-for-web-development-e8a8b5710664)
- [Class Inheritance](https://www.w3schools.com/js/js_class_inheritance.asp)
- [Super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
