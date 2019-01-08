import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';
import './index.css';

const ShowSummary = (props) => (
  <p> {props.summary.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "")} </p>
)


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
      <div className="single-show">
        { show == null && <Loader /> }
        {
          show !== null &&
          <template className="seriesInfo">

            <div className="show-name">
              <h2>{show.name}</h2>
            </div>


            <div className="show-img">
              {
                show.image !== null && show.image.medium &&
                <img alt="show" src={show.image.medium} />
              }
              {
                show.image == null && <i>NO IMAGE</i>
              }
            </div>



            <div className="show-details">
              <p> <span className="info"> Rating: </span> {show.rating.average || 'N/A'}</p>
              <p> <span className="info"> Premeiered: </span> {show.premiered}</p>
              <p> <span className="info"> Status:</span> {show.status} </p>
              <p> <span className="info"> Episodes: </span>  {show._embedded.episodes.length}</p>
              <p><span className="info"> Episode runtime <span><small>(mins)</small></span> </span> : {show.runtime || 'N/A'}</p>
              { show.generes && <p>{show.generes + ' '}</p> }
              
              {
                show.externals.imdb &&
                <a
                  href={`http://www.imdb.com/title/${show.externals.imdb}`}
                  target="_blank"
                  className="series-imdb"
                  rel="noopener noreferrer"
                  id="imdb_link" >
                  View IMDb
                </a>
              }

              {
                show.officialSite &&
                <a 
                  className="series-offLink" 
                  href={show.officialSite}>
                  View Official Site
                </a>
              }

            </div>

            <div className="show-summary">
              { show.summary && <ShowSummary summary={show.summary} /> }
              { !show.summary && <p>No reference to show description available</p> }
            </div>

            <div className="link">
             <Link to={'/'}> Go Back </Link>
            </div>

          </template>

        }
      </div>
    )
  }

}

export default SingleSeries;
