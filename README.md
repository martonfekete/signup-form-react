# Simple Signup Form
This is a basic signup form built as a barebones React app.
The project was created in under 4 hours as part of a challenge. The aim was to use no dependency that's not provided in the bootstrapping.

## Dev notes
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The only external dependency is Bootstrap (CSS only).

The easiestwould've been building the form with [React Hook Forms](https://react-hook-form.com/). In case this was part of a larger project with multiple forms, that would've been the way to move forward.

There are _no meaningful unit tests_ included with the current code. The first improvement aim is to take care of that to ensure quality before this would go to production.\
The main reason behind missing UTs is the time constraint imposed on the development: the current bootstrapped React version (17) is not yet supported via enzyme, which would've streamlined granular tests.\
Instead of deep-diving into JEST tests, I concentrated my efforts on better readable code, separating smaller components and some basic UX. 

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
