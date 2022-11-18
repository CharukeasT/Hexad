import React from 'react';
import './Categories.css';
import {Link} from "react-router-dom"
function Categories() {
  return (
    <>
    <div className='form'>
        <br></br>
        <a><Link to="/Logo">
        <button className="img1">
        </button>
        </Link>
        </a>
        <h1 className="h11">CATEGORIES</h1>
        <br></br><br></br>
        <div className="div2"><a><Link to="/Women"><button className='b1'> WOMEN </button></Link></a><div className='img5'></div><div className='p1'>Dresses,Tops&Tees,Kurtis,Jeggings,Jeans</div></div>
        <br></br>
        <div className="div2"><a><Link to="/Men"><button className='b1'> MEN </button></Link></a><div className='img6'></div><div className='p2'>T-shirt,Jeans,Suits</div></div><p className='p1'></p>
        <br></br>
        <div className="div2"><a><Link to="/Kids"><button className='b1'> KIDS </button></Link></a><div className='img7'></div><div className='p3'>Clothes,Footwear,Bags</div></div><p className='p1'></p>
        <br></br>
        <div className="div2"><a><Link to="/Beauty"><button className='b1'> BEAUTY </button></Link></a><div className='img8'></div><div className='p4'>Makeup</div></div><p className='p1'></p>
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

export default Categories