import React from 'react'


export default class GifSearch extends React.Component {
  constructor() {
      super();
      this.state = { searchTerm: ""};
  }

    handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
      };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.submitHandler(this.state.searchTerm)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}></input>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}