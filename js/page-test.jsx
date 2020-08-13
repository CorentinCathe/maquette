const react = React.createElement;

class likeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    if (this.state.liked) {
      return "BOUH";
    }
    return (
      <button onClick={() => this.setState({ liked: true })}>J’aime</button>
    );
  }
}

const domContainer = document.querySelector("#like_component");
ReactDOM.render(e(LikeButton), domContainer);
