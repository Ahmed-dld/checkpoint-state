import React, {Component} from 'react'
import image from './photoProfil.jpg';
import './App.css'

    class Profil extends Component {
        constructor(props) {
            console.log("constructor()");
            super(props);
            this.state = {
                intervall: null,
                timer: 0 ,
            };
        } 
        componentDidMount() {
            console.log("componentDidMount()");
            this.setState({
                intervall : setInterval(() => {
                    this.setState({ timer: this.state.timer + 1 });
                }, 3000),
                
            });
        }
        componentDidUpdate() {
            console.log("componentDidUpdate()");
        }
        
    state = {
        isvisible: false
    }

     componentWillUnmount() {
         console.log("componentWillUnmount()");
         clearInterval(this.state.intervall);
     }
    
    todos =  [
   'FullName: Ahmed Daldoul',
   'Bio: Ingénieur civil développement web , région de Monastir',
   'Function: Ingénieur Civil',
   

]
togglevisibility = () => {
    this.setState({
        isvisible : !this.state.isvisible
    })
}
render() {
    console.log("render");
    return (
        
        <div className="page">
            <button className="visiblity-btn" onClick={this.togglevisibility}>show profil</button>
            {this.state.isvisible ?
            (<ul className="Profil">
            {this.todos.map((todo, i) => (
             
               
           
                <li key={i}  >{todo}
                <img className="photo" src={image} alt=""/>
                </li>
            ))}
            </ul>) : (<h4 className="notice">Click on the button to show profil</h4>)
            

            
        }
          <h3>{this.state.timer}</h3>  
        </div>
    )
}
}



export default Profil