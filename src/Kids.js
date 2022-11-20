import React from 'react';
import './Sections.css';
import {Link} from "react-router-dom"
function Kids() {
  return (
    <>
    <div className='form'>
        <br></br>
        <a><Link to="/Categories">
        <button className="img1">
        </button>
        </Link>
        </a>
        <h1 className="h11">KIDS</h1>
        <br></br><br></br>
        <div className="div1"><a><Link to="/GirlsClothing"><button className="b2">Girls Clothing</button></Link></a></div>
        <br></br>
        <div className="div1">Boys Clothing</div>
        <br></br>
        <div className="div1">Hair Accessories</div>
        <br></br>
        <div className="div1">Boys Footwear</div>
        <br></br>
        <div className="div1">Boys Footwear</div>
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

export default Kids