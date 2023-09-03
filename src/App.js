import logo from './logo.svg';
import './App.css';
import SampleComponent from './sampleComponent';


const NestedComponent = ()=>{
  return(<h2>I am a nested component</h2>)
}

const MyButton = ()=>{
  return (
    <button>
      I am a button
    </button>
  )
}

const user = {
  name: "Bhaskar",
  city: "Pune",
  title:"Software Engineer",
  imgUrl:"https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg" ,
  imgSize:50
}

const UserDetails = ()=>{
  return(
    <div>
       <h3>My name is {user.name}</h3>
       <h3>I live in  {user.city}</h3>
       <h3>I work as {user.title}</h3>
    </div>
  )
}

function App() {
  return (
    
    <div>
      <SampleComponent/>
      <NestedComponent/>
      <MyButton/>
      <img src={user.imgUrl} style={{height: user.imgSize , width: user.imgSize}} alt='my image'/>
      <UserDetails/>
    </div>
  );
}

export default App;
