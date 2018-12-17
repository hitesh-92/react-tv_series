import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';
import './index.css';

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
      <div class="single-show">
        {
          show == null && <Loader />
        }
        {
          show !== null &&
          <div>

            <h2>{show.name}</h2>

            {
              show.image.medium &&
              <img alt="show" src={show.image.medium} />
            }
            {
              !show.image.medium && show.image.original &&
              <img alt="show" src={show.image.original} />
            }

            <p>Rating: {show.rating.average || 'N/A'}</p>

            <p>Premeiered: {show.premiered}</p>

            <p>Episodes: {show._embedded.episodes.length}</p>

            <p>
              Episode runtime<span><small>(minutes)</small></span>: {show.runtime || 'N/A'}
            </p>


            {
              show.generes && <p>{show.generes + ' '}</p>
            }

            {
              show.externals.imdb &&
              <a
                href={`http://www.imdb.com/title/${show.externals.imdb}`}
                target="_blank"
                class="imdb_link"
              >
                View IMDb
              </a>
            }


            <p>
              <Link class="return" to={'/'}>
                Go Back
              </Link>
            </p>




          </div>

        }
      </div>
    )
  }

}

export default SingleSeries;
