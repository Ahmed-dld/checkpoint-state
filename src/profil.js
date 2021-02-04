
import React, { Component } from 'react'

class Profil extends Component {
    state = {
        isvisible: false
    }

  

    
    todos =  [
   'FullName: Ahmed Daldoul',
   'Bio: Ingénieur civil développement web , région de Monastir',
   'Function: Ingénieur Civil',
   

]

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
            
        </div>
    )
}
}



export default Profil