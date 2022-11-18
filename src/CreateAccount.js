// import React from 'react'
import './CreateAccount.css'
// function CreateAccount() {
//   return (
//     <div className='div1'><br></br><br></br>
//         <div className='div2'>
//         </div>
//         <h1 className='h11'>Create your account</h1>
//         <div className='div3'>
//             <div className='div4'>
//                 <div className='div5'>
//                 <div className='img2'></div></div>
//             <input className='i1' type="text" placeholder='Email'></input>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default CreateAccount
import "./App.css";

const CreateAccount = () => {
  return (
    <div className="mac-book-pro-16-8">
      <div className="app-16">
        <img className="akar-iconsarrow-left"/>
        <span className="create-your-account">Create your account</span>
        <div className="flex-container">
          <input className="rectangle-1" placeholder="Email" type="text" />
          <span className="or-continue-with">or continue with</span>
        </div>
        <div className="flex-container-1">
        <input className="rectangle-2" placeholder="Password" type="text" />
          {/* <div className="rectangle-2">
            <img className="teenyiconspassword-s"/>
            <span className="password">Password</span>
          </div> */}
          <img className="rectangle-4"/>
          <img className="rectangle-5"/>
          <img className="rectangle-6"/>
        </div>
        <div className="rectangle-3">
          <span className="sign-up"> Sign up</span>
        </div>
        <div className="flex-container-2">
          <span>Already have an account? </span>
          <span className="sign-in">Sign in</span>
        </div>
      </div>
    </div>
  );
};
export default CreateAccount;
