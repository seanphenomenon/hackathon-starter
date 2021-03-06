import React from 'react';
import axios from 'axios';
import JokeButton from './JokeButton';
import TwitterButton from './TwitterButton';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            dadJokes:[],
            setup:'',
            punchline:'',
            giphy:[],
            memeUrl: ''
        };

    this.handleNewJoke=this.handleNewJoke.bind(this);
    }


handleNewJoke(){

let dadJokes = [...this.state.dadJokes];
let memes = [...this.state.giphy];
    
var randomJoke = dadJokes[Math.floor(Math.random() * dadJokes.length - 1)];
var randomMeme = memes[Math.floor(Math.random() * memes.length - 1)];
 console.log('New joke button was clicked')
 console.log(randomJoke.setup)
     
 this.setState({
    setup: randomJoke.setup,
    punchline: randomJoke.punchline,
    memeUrl: randomMeme.embed_url
 })

 event.preventDefault();
}


componentDidMount(){
this.getJokes();
this.getGiphy()
}

getJokes(){
    axios.get('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general/20')
      .then(response => {
        const jokes = response.data;
        console.log(jokes);
        this.setState({dadJokes:jokes});
      })
    }

getGiphy() {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=8w0F2QHnCz93xSuixHXCjpXNnpRrA9TY&q=dad';
    axios
    .get(url)
    .then(response => response.data)
    .then((gifs) => {
        console.log(gifs)
      this.setState({
        giphy: gifs.data
      });
    });
  } 




render(){

    return (
        <div className='container'>
            <div className='jumbotron'>
                <h1 className='display-4'> Welcome to Dad Jokes!</h1>
                <p className='lead'>Here you'll find a hilarious selection of some of the best dad jokes garaunteed to make you laugh!</p>
                <hr className='my-2'/>  
            </div>
            {
                this.state.memeUrl &&
                <div className='card rounded'>
                    <div className='card-body shadow-lg p-3 mb-8 bg-light rounded'>
                        <div className='lead text-center' id='memes'>
                            <iframe src={this.state.memeUrl} alt='meme'/>
                        </div>
                    </div>
                </div>    
            }
            <div> 
    
                <div className='card rounded'>
                <div className='card-body shadow-lg p-3 mb-8 bg-light rounded'>
                <div className='lead text-center' id='jokes'>
                    {
                     (this.state.setup === '' && this.state.punchline === '') ? 
                        <p className='lead'>Click the button below to get started!</p> :
                        <div>
                            <p>{this.state.setup}</p>
                            <p>{this.state.punchline}</p>
                        </div>
                    }       
            </div>
            </div>
            </div>
            
            <br></br>
                <JokeButton
                    dadJokes={this.state.dadJokes}
                    handleNewJoke={this.handleNewJoke}/>
      
        </div>
        </div>
        );
    }
}

export default App;