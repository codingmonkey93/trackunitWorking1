import React from 'react';
import Image from './Image';
import ControlPanel from './ControlPanel';

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      offset: 0

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 fetchData() {
  //TODO: move this to api gateway folder
  fetch(`https://api.giphy.com/v1/stickers/search?q=cat&limit=3&rating=g&offset=${this.state.offset}&api_key=1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq`)
  .then(res => res.json())
  .then(
  (result) => {
      console.log(result);
      this.setState({
          isLoaded: true,
          data: result.data
        });        
      },

  (error) => {
      console.log(error);

this.setState({
      isLoaded: true,
      error
    });        }
  )
 }

  componentDidMount() {
    this.fetchData();
  }

  handleChange(event) {
    this.setState({offset: event.target.value});

  }

  handleSubmit(event) {
    this.fetchData();

    event.preventDefault();
  }
  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

        <div>
        <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.offset} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
            </div>

                {data.map((value, i) => {
                      return  <Image url={value.images.downsized_medium.url} />; 

                    })}
              </div>
      );
    }
  }
}

export default ImageContainer;
