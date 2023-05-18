import {NavLink, useNavigate } from "react-router-dom"
import {About, ContactUs, Project }from "../Componant"
import logo from "../Resources/img/3.jpg"
const Home = () => {
   let Navigate=useNavigate()
   let AboutHandle=()=>{
      Navigate("/about")
   }
   return (
      <>
         <div className="main-cover">
            <div className="overllay">
               <div className="Cover-content">
                  <h1>Lorem ipsum dolor sit amet, consectetur adipiscing </h1>
                  <p>
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  </p>
                  <a onClick={AboutHandle}>about us</a>
               </div>
            </div>
         </div>
         <section id="about">
            <div className="about flex main-container">
               <div className="item">
                  <img src={logo} alt="" />
               </div>
               <div className="item pt-30">
                  <span className="green u-text-sup">ABOUT US</span>
                  <h2>
                     Lorem ipsum dolor sit amet</h2>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim .
                  </p>
                  <div>
                     <a onClick={AboutHandle} className="green-btn">Read More</a>
                  </div>
               </div>
            </div>
         </section>
         <Project />
        <ContactUs/>
      </>
   )
}

export default Home
