# React Todo App

A simple Todo App built with React as part of my Day 2 React learning project.

The purpose of this project is to practice working with lists, forms, React state, and browser localStorage.

## Features

- Add a new todo
- Display a list of todos
- Mark todos as completed
- Delete todos
- Store todos using localStorage
- Keep todos after refreshing the browser
- Simple and clean user interface

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Browser localStorage
- Git and GitHub

## React Concepts Practiced

### useState

`useState` is used to store:

- The list of todos
- The current text entered in the input

Example:

```javascript
const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");