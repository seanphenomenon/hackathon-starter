import React from 'react';

class JokeButton extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className='container'>
                <div className='row'>
                <div class="col"></div>
                <button type='button' className="btn btn-primary btn-lg" onClick={this.props.handleNewJoke}> New Joke</button>
                <div class="col"></div>
                    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-hashtags="DadJokes" data-show-count="false">Tweet</a>
                </div>
            </div>

        );

    }

}

export default JokeButton;