import React, {Component} from 'react';
import 'whatwg-fetch';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader/';
import Intro from '../../components/Intro';


class Series extends Component {


  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  // componentDidMount(){
  //   const link = 'http://api.tvmaze.com/search/shows?q=girls';
  //   fetch(link)
  //    .then((res) => {
  //      return res.json()
  //    }).then((json) => {
  //      this.setState({series: json})
  //    }).catch((err) => console.log(err));
  // };//didMount


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
      <div>

      <Intro message="Here you can find all of the loved series"/>

      <div>

        <input
          value={seriesName}
          type="text"
          onChange={this.onSeriesInputChange} />

      </div>

      {
        !isFetching && series.length === 0 && seriesName.trim() === ''
        &&
        <p>Please enter series name into input</p>
      }
      {
        !isFetching && series.length === 0 && seriesName.trim() !== ''
        &&
        <p>No tv series has been found with this name</p>
      }
      {
        isFetching && <Loader />
      }
      {
        !isFetching && <SeriesList list={this.state.series} />
      }

      <SeriesList list={this.state.series}/>
      </div>
    )
  }
}

export default Series;