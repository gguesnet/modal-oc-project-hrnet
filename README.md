# Modal Library

> Project 14 for OpenClassrooms - Composant : Modal

## Technologies

[![Made-with-Javascript](https://img.shields.io/badge/Made%20with-Javascript-yellow?style=flat-square)](https://developer.mozilla.org/fr/docs/Web/JavaScript)

[![React-v_18.1.0](https://img.shields.io/badge/React-v_18.2.0-blue?style=flat-square)](https://fr.reactjs.org)

## Environments

https://github.com/gguesnet/HRnet

## Installation

### Prerequisites

- [![npm-v_7.0.0](https://img.shields.io/badge/npm-v_7.0.0-red?style=flat-square)](https://docs.npmjs.com/)
- [![Node.js-v_16.0.0](https://img.shields.io/badge/Node.js-v_16.0.0-brightgreen?style=flat-square)](https://nodejs.org/en/docs/)

### Installing and launching

Clone the repository :

`git clone https://github.com/gguesnet/modal-oc-project-hrnet.git`

Inside this repository, install dependencies:

`npm install`

Lauch on port 3000:

`npm start`

HRnet is now rendered at URL `http://localhost:3000`

### Use the library

Install in a project React :

`npm install modal-oc-project-hrnet`

To use the component, pass the right props :

```jsx
<Modal
  title="Success!"
  text="Employee has been successfully added!"
  button="Okay!"
  toggleOpen={handleClick}
  isOpen={modalShowing}
/>
```

Props Types must be like this :

```js
Modal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  toggleOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};
```

You must use useState() React Hook in the parent component to trigger the Modal like this :

```js
const [modalShowing, setModalShowing] = useState(false);

function handleClick() {
  setModalShowing(!modalShowing);
}
```
