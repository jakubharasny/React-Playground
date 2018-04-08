'use strict';

// JSX
// yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
// babel src/practice.js --out-file=public/scripts/practice.js
//
var user = {
  name: 'Guybrush Threepwood2',
  age: "15",
  location: 'Cursed Island'
};

function getLocation(place) {
  if (place) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      place
    );
  }
}

var templateTWO = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age ? user.age >= 18 && React.createElement(
    'p',
    null,
    'AGE: ',
    user.age
  ) : "Nooooo",
  getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTWO, appRoot);
