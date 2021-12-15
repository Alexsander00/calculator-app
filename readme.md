# Frontend Mentor - Calculator app

This project is based on the [calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).
You can see a live demo [here](https://alexsander00.github.io/calculator-app/).

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## The challenge

---

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathematical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- See the operation history

## My process

---

I started creating the design using html and css, following the BEM methodology. At some point i decided it was my chance to learn new things like **React**,
so i learned to integrate it into a project with **webpack** and **babel** using **typescript**, for the code formatting i used **eslint** and **prettier**,
**husky** to run scripts like **commitlint on commit-msg hook** and **lint-staged on pre-commit hook**, i like to follow conventions so i used **commitizen**
for write better commits. For the css i tried **styled-components** and fell in love with it.

Testing is always important that's why i learned about **jest** and **react-testing-library** for unit and integration tests.

I wanted to deploy it on some free hosting, so i created a **continuous integration and continuous deployment workflow** in github, to run all the tests and then
deploy the build in **github pages**.

### Built with

- HTML5
- CSS
- JavaScript
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Typed programming language
- [Styled Components](https://styled-components.com/) - CSS in js

### What I learned

- Build
  - Webpack
  - Babel
- Git
- Git hooks
- Husky
- Commitizen
- Eslint and prettier
- Github actions
- Typescript
- React
  - Hooks (useState, useEffect, useContext, etc)
  - Custom hooks
  - Context api
  - Redux
- Styled components
- Testing
  - Jest
  - React testing library
