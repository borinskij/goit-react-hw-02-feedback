import { Component } from 'react';
import { Title } from './SectionTitle/SectionTitle.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  hendelClick = event => {
    const { name } = event.target;
    return this.setState({ [name]: this.state[name] + 1 });
  };
  render() {
    return (
      <div style={{ margin: 50 }}>
        <Title state={this.state} hendelClick={this.hendelClick} />
      </div>
    );
  }
}
