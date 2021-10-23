
import './App.css';
import React from 'react';

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const getRandomColor = (colors) => {
  const ind = Math.floor(Math.random() * colors.length);
  return colors[ind];
}



class App extends React.Component {
  constructor(props){
    super(props);
    const color = getRandomColor(colors);
    this.state = {
      quote: '',
      author: '',
      color:{
        border: `1.5px solid ${color}`,
        color: color
      },
      background:{
        color: color
      },
      backgroundCor:{
          backgroundColor: color
      }
    }
  }

  componentDidMount() {
    fetch('https://api.quotable.io/random').then(content => {
      content.json().then(quote => {
        this.setState({
          quote: quote.content,
          author: quote.author
        })
      })
    }).catch(error => console.log('Could not fetch'))
  }

  handleClick = () =>{
    const color = getRandomColor(colors);
    fetch('https://api.quotable.io/random').then(content => {
      content.json().then(quote => {
        this.setState({
          quote: quote.content,
          author: quote.author,
          color:{
            border: `1.5px solid ${color}`,
            color: color
          },
          background:{
            // 
            color: color
          },
          backgroundCor:{
            backgroundColor: color
          }
        })
      })
    }).catch(error => console.log('Could not fetch'))

  }

  render(){
    return (
      <div class="wrapper" style={this.state.backgroundCor}>

        <div className="container" id="quote-box">

          <div className="row-text" id="quote-text">
            
              <i class="fa fa-quote-left" id="dec" style={this.state.background}></i>
              <h1 id="text" style={this.state.background}>
                  {this.state.quote}
              </h1>

              <h3 id="author" style={this.state.background}>
                - {this.state.author}
              </h3>
              

          </div>

          <div className="row-btn">

            <span className="first-btn">
              <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + this.state.quote + '" ' + this.state.author)} target="_blank">
                <button class="btn-s" style={this.state.color}>
                  <i class="fa fa-twitter">

                 
                  </i>
                </button>
              </a>

              <a id="tumblr-quote" href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="+
      encodeURIComponent(this.state.quote) +
      '&content=' +
      encodeURIComponent(this.state.author) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'} target="_blank">
                <button class="btn-s" style={this.state.color}>
                  <i class="fa fa-tumblr"></i>
                </button>
              </a>

            </span>

            <span className="last-btn">
              <button id="new-quote" class="btn" style={this.state.color} onClick={this.handleClick}>
                Generate
              </button>
            </span>


          </div>
        
          


        </div>

        <h6>Made by unitoflazy</h6>

      </div>
    )
  }
}

export default App;
