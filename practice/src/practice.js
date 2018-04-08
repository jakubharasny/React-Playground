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
 if (place){
   return <p>Location: {place}</p>;
 }
}


var templateTWO = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age ? (user.age >= 18 && <p>AGE: {user.age}</p>) : "Nooooo"}
    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTWO, appRoot);
