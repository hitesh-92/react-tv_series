import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {

  state = {
    show: null
  }

  componentDidMount(){
    const { id } = this.props.match.params;

    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
     .then((res) => {
       return res.json()
     }).then((json) => {
       this.setState({show: json})
     }).catch((err) => {
       console.log(err);
     });
  }

  render(){
    // console.log(this.props);
    const { show } = this.state;
    console.log(show);



    return(
      <div>
        {
          show == null && <Loader />
        }
        {
          show !== null &&
          <div>
            <h2>{show.name}</h2>
            <p>Premeiered: {show.premiered}</p>
            <p>Rating: {show.rating.average}</p>
            <p>Episodes: {show._embedded.episodes.length}</p>

              <img alt="show" src={show.image.medium} />

          </div>

        }
      </div>
    )
  }

}

export default SingleSeries;
