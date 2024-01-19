import react, {useState} from 'react';
import './App.css';
import {container, bootstrap} from "react-bootstrap"
import Navigation from './Components/Navbar/Navigation';
import TweetList from './Components/Tweets/TweetList';
import Trending from './Components/Trending/Trending';

const mocktweets= [
  {
    username: 'user1',
    name: 'John Doe',
    followers: 5000,
    following: 300,
    tweets: 1200,
    bio: 'Passionate about technology and art. Coffee lover ☕️',
    verified: true
  },
  {
    username: 'user2',
    name: 'Jane Smith',
    followers: 10000,
    following: 700,
    tweets: 2500,
    bio: 'Travel enthusiast. Foodie. Book lover. Dreamer.',
    verified: false
  },

]


function App() {
  
  const users= [

  ];
  
  console.log("users:", users);

  return (
    <container className="container">
      
      <Navigation />
      <TweetList users={users}  />
      <Trending />
    </container>
  );
}

export default App;
