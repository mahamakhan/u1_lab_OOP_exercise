# JS Object Oriented Programming

![](https://i.ytimg.com/vi/GEuS0tfLfEY/maxresdefault.jpg)

## Getting Started

- Fork and clone this repository
- `npm install` in this directory

## Overview

In this exercise, you will practice the principles object oriented programming to create a school system. There are **32** automated tests that you have to pass. You will also utilize the concept of `inheritance` to create a blueprint for several schools. **You should be running the tests after each step with `npm test`.**

## Instructions

**You will be writing all of your code in the `index.js` file.  The class names have already been provided for you.  You will be adding logic to the class definitions in this file**

### Step 1

In the `School` class:

- set up a constructor that accepts `schoolName` and `level` parameters.
- store these parameters in the constructor as class properties.
- set up a property called `students` and set it equal to an empty array.
- create an `enrollStudent` method. It should accept a `student` as a parameter.
- create a method called `listEnrollmentNumbers`. This method will not accept any parameters.

### Step 2

In the `High` class:

- inherit from the `School` class:
  - Make sure to call `super` in the constructor.
- Add a `name` parameter to the constructor.
- Pass the `name` and hard code in a level in the `super` method. (Order matters, name should go first)
- create a property called `sportsTeams`. Set this to an empty array.
- create a method called `addTeam`, this should have a parameter of `team`

### Step 3

In the `Middle` class:

- inherit from the `School` class
- set up a constructor that accepts `name` as an argument
- make sure to call `super` in the constructor
- pass the `name` parameter to super and hard code value for the `level` parameter. (Order Matters)

### Step 4

In the `Primary` class:

- inherit from the `School` class
- set up a constructor that accepts `name` and `pickUpPolicy` parameters
  - make sure to call `super` in the constructor
  - pass the `name` parameter to super and hard code a value for the `level` parameter. (Order Matters)
- store the `pickUpPolicy` as a class property and set it to the `pickUpPolicy` argument
- create a method called `listPickUpPolicy`

### Step 5

In the `Student` class:

- accept `name` and `email` as arguments in the constructor
- store these as class properties

### Step 6

Back in the `School` class:

- The `enrollStudent` method should add a `student` to our `students` array.
- `listEnrollmentNumbers` should return the number of students in our `students` array.

### Step 7

Back in the `High` class:

- the `addTeam` method should add a `team` to our `sportsTeams` array.

### Step 8

Back in the `Primary` class:

- `listPickUpPolicy` should return the following string: `You must pick up your child at <pickUpPolicy>!`. Make sure to replace the contents in `<>` with your pickup policy property. **Make sure to remove the `<>`!**

### Step 9

In the `SportsTeam` class:

- set up a constructor with a `name`, `sport` and `numOfPlayers` property. These should be provided in the constructor arguments

### Step 10

Once all **32** tests have passed, open the `playground.js` file. Here you'll find:

```js
const { High, Middle, Primary, SportsTeam, Student } = require('.')
```

The classes you've built have been loaded into this file for you. **DO NOT MODIFY LINE 1.**

- Create an instance of the `High` class.
- Create `5` new students with the `Student` class.
- Add the `5` students to the `students` property in the instance of the `High` class. \*We inherited from the `School` class which means we have access to the `enrollStudent` method.
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
