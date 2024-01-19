import React from 'react'
import  { 
    Card,
    Button,
} from "react-bootstrap";

function TweetCard(props) {
    const {tweet, key} = props 
    
    

return (
    <div className="tweet-card" key={key}>
        <Card.Body>
            <Card.Title>{tweet.author} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> {tweet.twitteruser} . {tweet.posttime}</Card.Subtitle>
            <Card.Text>
            {tweet.content}
            </Card.Text>
            <Button>{tweet.commentscount} comments </Button>
            <Button>{tweet.retweetscount} Retweets </Button>
            <Button>{tweet.likecount} Likes </Button>
            <Button variant="primary">Retweet</Button>

        </Card.Body>

    </div>
)

}

export default TweetCard;