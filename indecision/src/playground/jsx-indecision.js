
const app = {
  title:"Indecision App",
  subtitle:"Some subtitle",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    console.log(app.options);
    renderIndecision();
  };
};

const removeAll = () => {
  app.options = [];
  renderIndecision();
};

const


const appRoot = document.getElementById('app');

const renderIndecision = () => {
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are some options' : ' No options'}</p>
    <p>{app.options.length}</p>
    <button onClick={removeAll}>Remove All Options</button>
    <ol>
      {
        app.options.map((option) => <li key={option}>{option}</li>)

      }
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>

    </form>
  </div>
);

ReactDOM.render(template, appRoot);
};

renderIndecision();
