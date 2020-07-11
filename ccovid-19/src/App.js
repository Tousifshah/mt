import React from 'react';

import { Cards, CountryPicker, Chart, Navbar } from './components/Index';
import { fetchData } from './api/';
import styles from './App.css';

import image from './components/images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={image} alt="COVID-19"/>
        <div className="nav">   
          <Navbar />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} /> 
        </div>
      </div>
    );
  }
}

export default App;