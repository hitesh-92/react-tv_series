import React, {Component} from 'react';
import 'whatwg-fetch';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader/';
import Intro from '../../components/Intro';
import './index.css';

class Series extends Component {

  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  onSeriesInputChange = e => {
    this.setState({seriesName: e.target.value, isFetching: true});

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
     .then((res) => {
       return res.json()
     }).then((json) => {
       this.setState({series: json, isFetching: false})
     }).catch((err) => {
       console.log(err);
     });

    console.log(e);
    console.log(e.target.value);
  };

  render(){

    const {series, seriesName, isFetching} = this.state;

    return(

      <div className="home-body">

        <Intro message="Here you can find info about every series"/>

        <div className="search-bar">
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange}
            placeholder="Enter show name"
            autoFocus
          />
        </div>

        {
          !isFetching && series.length === 0 && seriesName.trim() === ''
          &&
          <p className="search-message">Please enter series name into input</p>
        }
        {
          !isFetching && series.length === 0 && seriesName.trim() !== ''
          &&
          <p className="search-message red">NOT FOUND!</p>
        }
        {
          isFetching && <Loader />
        }
        {
          !isFetching && <SeriesList list={this.state.series} />
        }

      </div>

    )

  }
}

export default Series;
