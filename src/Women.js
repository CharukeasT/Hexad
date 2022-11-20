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
        <div className="div1"><a><Link to="/Skirts"><button className="b2">Skirts</button></Link></a></div>
        <br></br>
        <div className="div1"><a><Link to="/Skirts"><button className="b2">Dresses & Jumpsuits</button></Link></a></div>
        <br></br>
        <div className="div1"><a><Link to="/Skirts"><button className="b2">Sweaters & Sweatshirts</button></Link></a></div>
        <br></br>
        <div className="div1"><a><Link to="/Skirts"><button className="b2">Shrugs</button></Link></a></div>
        <br></br>
        <div className="div1"><a><Link to="/Skirts"><button className="b2">Jeans & Jeggings</button></Link></a></div>
        <br></br><br></br><br></br>
        <div> 
            <img className="img2" src="https://cdn-icons-png.flaticon.com/128/61/61972.png"></img>
            <img className="img3" src="https://cdn-icons-png.flaticon.com/128/3502/3502685.png"></img>
            <img className="img4" src="https://cdn-icons-png.flaticon.com/128/8584/8584249.png"></img>
            <img className="img3" src="https://cdn-icons-png.flaticon.com/128/649/649931.png"></img>
            <img className="img3" src="https://cdn-icons-png.flaticon.com/128/60/60484.png"></img>
            <img className="img3" src="https://cdn-icons-png.flaticon.com/128/456/456212.png"></img>
            <br></br><br></br><br></br><br></br>
            <h1 className="h13">Home &nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;Categories&ensp;&ensp;
            &ensp;&ensp;Live Shop&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;Cart&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Wallet&ensp;&ensp;
            &ensp;&ensp;&nbsp;&ensp;&ensp;&ensp;Profile</h1>
        </div>
      </div>       
    </>    
  )
}

export default Women