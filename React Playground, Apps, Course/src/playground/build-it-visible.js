class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToogleVisibility = this.handleToogleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToogleVisibility(){
    this.setState((prevState) => {
      return {
        visibility : !prevState.visibility
      };
    });
  }
  render () {
    return (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToogleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

  ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
