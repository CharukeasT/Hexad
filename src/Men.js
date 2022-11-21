import React from 'react';
import './Sections.css';
import {Link} from "react-router-dom"
function Men() {
  return (
    <>
    <div className='form'>
        <br></br>
        <a><Link to="/Categories">
        <button className="img1">
        </button>
        </Link>
        </a>
        <h1 className="h11">MEN</h1>
        <br></br><br></br>
        <div className="div1"><a><Link to="/Topwear"><button className="b2">Topwear</button></Link></a></div>
        <br></br>
        <div className="div1">Bottomwear</div>
        <br></br>
        <div className="div1">Footwear</div>
        <br></br>
        <div className="div1">Sportswear</div>
        <br></br>
        <div className="div1">Watches</div>
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

export default Men