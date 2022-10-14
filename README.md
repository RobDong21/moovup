# "Friend list - MOOVUP - Robert DONG"

## Deployed URL:

$$TBD$$

## Get started:

- Set node version to 16.17.1
- `yarn install` to install depedencies
- `yarn start` to run the app in local

---

## Commands:

- `yarn start` to run the web app locally
- `yarn build` to build production bundle
- `yarn test:watch` to run unit tests with watch mode
- `yarn test` to run all unit tests

---

## Technical Decision:

Note: since the project is small, I choose purposely to not overload the bundle with libraries.

- SPA: Create-React-App (https://github.com/facebook/create-react-app) seems to be an obvious choice to scaffold a Single Page Application with ReactJS
- State management: Since the React tree is small and prop drilling is not an issue here, it feels overkill to pull a state management such as Redux/Recoil/Zustang. I could have made use of the native Context but again I didnt see the need here.
- API call: In general, I would use react-query to handle api calls as it handles delicate tasks such as caching. Same reason as above, for this project it would be overkill. Same reason for preferring the native fetch api against axios.
- UI framework: Even though the instruction mentions the right to use a UI framework in order to speed up development, I choose to create components myself to keep the bundle light.
- Modal: react-modal (https://github.com/reactjs/react-modal) could have been a choice. But React has a way to make one in a simple and native way with Portal
- Mobile first: decide to support viewport start from 576px which correspond to Bootstrap XS breakpoint

---

## User requirements:

- [ ] Retrieve list of people from the API
- [ ] Display list of people.
- [ ] Show details when user select an item in the list.
- [ ] Add marker on the map based on the provided latitude/longitude in location.

## Technical requirements:

- [ ] Source code must be stored in a git repository (github /gitlab / bitbucket)
- [ ] Must be a single-page application (SPA)
- [ ] Candidates are free to use any libraries
- [ ] Expect the code is production ready

## Definition of production ready:

- [ ] Production bundle (minified)
- [ ] Separate .env file for development and production
- [ ] Responsiveness
- [ ] Unit tests (Jest and React Testing Library)
- [ ] Mock api call (MSW)
- [ ] E2E tests (Cypress)

---

## Code walkthrough:

### Written with

- typescript for type checking
- scalable folder structure
- responsiveness web design in mind
- a preview of unit testing

### Depedencies added:

- `typescript` for type checking
- `styled-components` for handling css in js
- `react-map-gl` and `mapbox-gl` for the map

### Dev Depedencies added:

- `eslint` for linting
- `prettier` for auto formatting on file save
- `msw` for mocking api call during unit testing

### robots.txt

Edited to ensure this temporary web app to not be crawled by search engine bot

### CSS

- Made use of reset css to remove unconsistency across browser ( https://meyerweb.com/eric/tools/css/reset/ )
- Added media query for a responsive web app with mobile first approach.

### JS

- Favor named export instead of default export to enforce naming.
- Define constant file for font size, spacing, color and breakpoint for consistency across the app

### Folder structure

- Grouped files by feature for easy file traversal
- reusable-component folder contains react component that could be reuse in any project
- component folder contains react component specific to this project
- design folder contains the design system use for this web app: font size, spacing, color and breakpoint
