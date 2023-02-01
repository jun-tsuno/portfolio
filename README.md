# Project Title

My Portfolio Site

<p>
<img width="400" alt="Screenshot 2023-01-31 at 9 50 59 PM" src="https://user-images.githubusercontent.com/110567844/215962676-afbbdbd6-144d-4849-a7ed-953cce92da83.png">
<img width="400" alt="Screenshot 2023-01-31 at 9 51 18 PM" src="https://user-images.githubusercontent.com/110567844/215962672-19d49e18-9607-4504-86dd-d7e1d0aa1f56.png">
<img width="400" alt="Screenshot 2023-01-31 at 9 51 46 PM" src="https://user-images.githubusercontent.com/110567844/215962662-3242b077-e25e-43b8-adef-484920c076ab.png">
</p>

## Demo

https://jun-tsunokawa-portfolio.vercel.app/

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
