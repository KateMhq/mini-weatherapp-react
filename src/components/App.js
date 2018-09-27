// weatherapikey ba952ac5bba8a3501d9f27b84a1e7ed6
// Unsplashaccesskey b86a7bedd1b8ec0a69b8569aa17c9b1fa7c8377200e6c71c99d09e92da2c1a0d
// Unsplashsecretkey c29bb657094e575e87ea558c08a4ba9df69aaf030ee9dd595be2b8c959928b27
// api.openweathermap.org/data/2.5/weather?q={city name}
// api.openweathermap.org/data/2.5/weather?q={city name},{country code}
// api.openweathermap.org/data/2.5/weather?q=London&apiKey=ba952ac5bba8a3501d9f27b84a1e7ed6
// https://api.unsplash.com/search/photos?page=1&query=${cityweather}&client_id=b86a7bedd1b8ec0a69b8569aa17c9b1fa7c8377200e6c71c99d09e92da2c1a0d`

import React from 'react';
import Thumbs from './Thumbs';
import Info from './Info';
import Search from './Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [], 
      weather: ""
    }
    this.fetchWeather = this.fetchWeather.bind(this)
    this.fetchPhotos = this.fetchPhotos.bind(this)
    this.receivePhotos = this.receivePhotos.bind(this)
    this.receiveQuery = this.receiveQuery.bind(this)
  }

componentDidMount(){
  this.fetchWeather("London")
}  
fetchWeather(city) { 
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f00c57f47d08f6f24f76c9cd35a3fb1c`
  fetch(weatherUrl)
  .then(response => response.json())
  .then(content => {
    this.fetchPhotos(content.weather[0].description)
    this.setState({
      weather: content.weather[0].description
    })
  })
  }
fetchPhotos(desc) {
    const photoUrl = `https://api.unsplash.com/search/photos?page=1&query=${desc}&client_id=b86a7bedd1b8ec0a69b8569aa17c9b1fa7c8377200e6c71c99d09e92da2c1a0d`
  fetch(photoUrl)
  .then(response => response.json())
  .then(content => {
    this.setState({images: content.results})
    this.setState({currentImage: content.results[0]})
  })
}

receivePhotos(imgobj) {
this.setState({currentImage: imgobj})
}
receiveQuery(query) {
  this.fetchWeather(query)
  }

  render() {
    console.log(this.state)
    return (
      <main className="content">
        <header className="header">
          <h1 className="title">
            <i>Meteor</i>
            <i>opolis</i>
          </h1>
        </header>

        <figure className="photo" id="photo">
          {this.state.currentImage === undefined ? "Loading&hellip;": 
          <img src={this.state.currentImage.urls.regular} />}
        </figure>
        <Info currentImage={this.state.currentImage} weather={this.state.weather} />
        <Thumbs images={this.state.images} receivePhotos={this.receivePhotos} />
        <Search receiveQuery={this.receiveQuery} />
      </main>
    );
  }
}

export default App;
