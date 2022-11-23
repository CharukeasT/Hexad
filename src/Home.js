import React from 'react';
import './Home.css';
import {Link} from "react-router-dom"
function Home() {
  return (
    <>
    <div className='form'>
        <br></br>
        <a><Link to="/Logo">
        <button className="img1">
        </button>
        </Link>
        </a>
        <br></br><br></br>
        <input className="text1" type="text" placeholder='Search'></input>
        <h1 className='h14'>Special Offers</h1>
        <br></br><br></br><br></br><br></br>
        <div>
            <div className='div45'><div className='img10'></div></div>
            <div className='div46'><div className='img11'></div></div>
            <div className='div47'><div className='img12'></div></div>
        </div>
        <h2 className='h30'>
            Clothes
            &ensp;&ensp;&ensp;&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;
            Footwear
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            Jewellery
        </h2>
        <br></br><br></br><br></br><br></br>
        <div>
            <div className='div48'><div className='img13'></div></div>
            <div className='div49'><div className='img14'></div></div>
            <div className='div50'><div className='img15'></div></div>
        </div>
        <h2 className='h31'>
            Watch
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            Beauty
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            Bags
        </h2>
        <br></br><br></br><br></br>
        <div> 
            <a><Link to="/Home"><button className='img2'></button></Link></a>
            <a><Link to="/Categories"><button className='img3'></button></Link></a>
            <a><Link to="/LiveStreaming"><button className='img4'></button></Link></a>
            <a><Link to="/Cart"><button className='img17'></button></Link></a>
            <a><Link to="/Wallet"><button className='img18'></button></Link></a>
            <a><Link to="/Profile"><button className='img19'></button></Link></a>
            <br></br><br></br><br></br><br></br>
            <h1 className="h13">Home &nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;Categories&ensp;&ensp;
            &ensp;&ensp;Live Studio&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;Cart&ensp;&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Wallet&ensp;&ensp;
            &ensp;&ensp;&nbsp;&ensp;&ensp;&ensp;Profile</h1>
        </div>
        <a><Link to="/LiveStudio"><button className='img16'></button></Link></a>
        <div className='div51'>
        <h2 className='h32'> 30% Today's Special</h2>
        <p className='h33'>Get discount for every order</p>
        </div>
      </div>       
    </>    
  )
}

export default Home