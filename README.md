# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Architecture decisions](#architecture-decisions)
  - [Project structure](#project-structure)
  - [Getting started](#getting-started)
  - [Deployment](#deployment)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

Add a screenshot of the app here (for example `./screenshot.jpg`).



### Links

- Solution URL: [Solution](https://github.com/webifyCode/mymultistepform)
- Live Site URL: [Live site](https://webifyCode.github.io/mymultistepform)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Plain CSS, with one stylesheet per component and a shared `index.css`
- [React 19](https://react.dev/) - JS library (function components and hooks, `StrictMode`)
- [Vite 7](https://vite.dev/) - dev server and bundler, with [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) for Fast Refresh
- [ESLint 9](https://eslint.org/) with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` - linting
- [gh-pages](https://github.com/tschaub/gh-pages) - publishes the build to GitHub Pages
- Ubuntu font, self-hosted in `src/assets/fonts`

### Architecture decisions

- **Client-only, no backend.** The app collects data and shows a confirmation, but "Confirm" does not send anything anywhere. Hooking it up to an API would be done in `Form.jsx`.
- **One state owner.** `Form.jsx` holds all form data (`name`, `email`, `phone`, `plan`, `cycle`, `addOns`), the current step and the validation errors. Step components are mostly presentational and receive data and setters as props. For four small steps this is simpler than Context or a form library.
- **Steps as a state value, not a router.** The current step is a string (`personalInfo`, `selectPlan`, `addOns`, `finishingUp`, `thanks`) looked up in a `pages` map, and the order lives in `PAGE_ORDER`. This keeps dependencies low. The trade-off is that steps have no URLs and the browser Back button leaves the form.
- **Data-driven UI.** Plans, add-ons, prices and the sidebar steps are defined once in `src/data.js` and rendered with `.map()`, so adding a plan or add-on is a one-line change. Totals are computed from that data when rendering, not stored in state.
- **Validation in one place.** `src/validation.js` holds the rules (required fields, email format, phone format that accepts `+`, spaces and dashes). Fields validate as the user types, errors are kept per field, and clicking "Next step" re-checks everything before moving on. The plan step requires a selection and shows its own error.
- **Two button rows.** The Back and Next buttons are rendered inside the form on large screens and below it on mobile, with CSS showing one at a time. A shared `buttons()` helper in `Form.jsx` avoids duplicating the markup.
- **Accessibility.** Plan cards are keyboard-focusable buttons (Enter and Space) with `aria-pressed`. Add-ons use real checkboxes inside labels, the billing toggle uses real radio inputs, and errors on the plan step use `role="alert"`.
- **Plain CSS.** Chosen over a framework to keep dependencies minimal and match the design file closely.

### Project structure

```
src/
├── main.jsx                  # entry point, mounts <App /> in StrictMode
├── App.jsx                   # renders the form
├── data.js                   # plans, add-ons, prices and step definitions
├── validation.js             # field validation rules
├── components/
│   ├── Form.jsx              # state, step navigation and validation
│   ├── FormIndicator.jsx     # sidebar step indicator
│   ├── PersonalInfo.jsx      # step 1: name, email, phone
│   ├── SelectPlan.jsx        # step 2: plan and billing cycle
│   ├── AddOns.jsx            # step 3: add-ons
│   ├── FinishingUp.jsx       # step 4: summary and total
│   ├── Thanks.jsx            # confirmation
│   ├── Back.jsx              # back button
│   └── Continue.jsx          # next / confirm button
├── styles/                   # one stylesheet per step
└── assets/                   # fonts and images
```

### Getting started

```bash
npm install
npm run dev        # start the dev server
npm run build      # production build into dist/
npm run preview    # preview the production build
npm run lint       # run ESLint
```

### Deployment

The app is published to GitHub Pages with `npm run deploy`, which builds (`predeploy`) and publishes `dist` with `gh-pages`. `vite.config.js` sets `base: "/mymultistepform/"` so assets resolve under the Pages sub-path. If you rename the repo or host elsewhere, update `base` (use `"/"` for a root domain) and `homepage` in `package.json`.

### What I learned

I mainly learned more practically about the relationship between state and props.

### Continued development

I want more proficiency with useState and useEffect. Next steps for this project:

- Add tests (for example Vitest and React Testing Library) and consider TypeScript.
- Add routing so each step has its own URL.
- Move focus to the step heading when the step changes, for screen reader users.
- Send the confirmed order to a real API.

### Useful resources

-Bob Ziroll's scrimba react beginner course.

## Author

- Frontend Mentor - [@webifyCode](https://www.frontendmentor.io/profile/webifyCode)


## Acknowledgments

Special shout-out to Bob Ziroll. LOL.
