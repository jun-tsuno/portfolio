# Project Title

Portfolio site

## Demo

## Built With

- `React` : 18.2.0
- `TypeScript`: 4.9.3
- `ReactRouter`: 6.8.0
- `styled-components`: 5.3.6
- `framer-motion`: 8.5.0
- `vite`: 4.0.0

## Feature

- Because the portfolio site does not have many complex features, I felt it would be good practise to utilise TypeScript for the type safety.
- I split modules and layouts into components as much as possible to make maintenance easier.
- Fully responsive design, and simple UI. Dynamically change the content using framer motion animation.

## Challenge

- The most difficult aspect for me was maintaining consistency and making components reusable. All header tags or buttons should share the same fundamental structure and behave the same in responsive layout, yet it's inefficient to format each time I add a component. So, in the globalStyles file, I declare the font size, color, and other basic styling of each tag. This allows me to write code faster as I go.
- I was also concerned about the structure of the styled-component file. It is simpler to see the structure of each component when the style and JS are separated.

## Getting Started

```
npm install
npm run dev
```
