import react from 'react';
import TweetCard from './TweetCard'
    

function TweetList (props) {
    console.log('users',props.tweet)
    

    return (
        <div>
            <p> TweetList</p>
            {props.users.map((tweet) => (
                <TweetCard key={tweet.id} tweet={tweet} />
            ))}
            
            
            
            
        </div>
    );
}

export default TweetList;

    

    
            
        
    
            


    

            

            
            
    

