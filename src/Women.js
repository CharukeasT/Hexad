import React from 'react';
import './Sections.css';
import {Link} from "react-router-dom"
function Women() {
  return (
    <>
    <div className='form'>
        <br></br>
        <a><Link to="/Categories">
        <button className="img1">
        </button>
        </Link>
        </a>
        <h1 className="h11">WOMEN</h1>
        <br></br><br></br>
        <div className="div1">Skirts</div>
        <br></br>
        <div className="div1">Dresses & Jumpsuits</div>
        <br></br>
        <div className="div1">Sweaters & Sweatshirts</div>
        <br></br>
        <div className="div1">Shrugs</div>
        <br></br>
        <div className="div1">Jeans & Jeggings</div>
        <br></br><br></br><br></br>
        <div> 
            <img className="img2" src="https://cdn-icons-png.flaticon.com/128/61/61972.png"></img>
            <img className="img3" src="https://cdn-icons-png.flaticon.com/128/3502/3502685.png"></img>
            <img className="img4" src="https://cdn-icons-png.flaticon.com/128/8584/8584249.png"></img>
            <img className="img3" src="https://cdn-icons-png.flaticon.com/128/649/649931.png"></img>
            <img className="img3" src="https://cdn-icons-png.flaticon.com/128/60/60484.png"></img>
            <img className="img3" src="https://cdn-icons-png.flaticon.com/128/456/456212.png"></img>
            <br></br><br></br><br></br><br></br>
            <h1 className="h21">Home &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;Categories&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;Live Shop&ensp;&ensp;&ensp;&nbsp;&nbsp;&ensp;&ensp;&ensp;&ensp;
            Cart&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Wallet&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Profile</h1>
        </div>
      </div>       
    </>    
  )
}

export default Women