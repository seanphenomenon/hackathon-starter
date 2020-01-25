import React from 'react';

class TwitterButton extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-hashtags="DadJokes" data-show-count="false">Tweet</a>
             </div>

        );
    }
}
export default TwitterButton;