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
            <a><Link to="/Home"><button className='img2'></button></Link></a>
            <a><Link to="/Categories"><button className='img3'></button></Link></a>
            <a><Link to="/LiveStudio"><button className='img4'></button></Link></a>
            <a><Link to="/Cart"><button className='img17'></button></Link></a>
            <a><Link to="/Wallet"><button className='img18'></button></Link></a>
            <a><Link to="/Profile"><button className='img19'></button></Link></a>
            <br></br><br></br><br></br><br></br>
            <h1 className="h13">Home &nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;Categories&ensp;&ensp;
            &ensp;&ensp;Live Studio&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;Cart&ensp;&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Wallet&ensp;&ensp;
            &ensp;&ensp;&nbsp;&ensp;&ensp;&ensp;Profile</h1>
        </div>
      </div>       
    </>    
  )
}

export default Kids