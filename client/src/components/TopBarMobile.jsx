
import React, { useState } from 'react';
import image from "../assets/img/logo-dh.png";
import SideBarMobile from "./SideBarMobile"
import Contact from "./Contact"

function TopBarMobile(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const pStyle = {
        fontSize: '30px',
      };
    return (
        <>
        {/* ========== Start TopbarMObile ========== */}
       
            <div className="bg-teal-700 block block ">
                <button onClick={toggleMobileMenu} className="bg-white">
                    <figure className="h-20 flex items-center justify-start m-0 px-4">
                        <div className=" lg:block w-10 h-10 border-r-2 border-stone-300">
                        <img
                            src={image}
                            alt="Logo Digital House"
                            className="block w-full h-full object-cover "
                        />
                        </div>
                        <p style={pStyle}><i className="bg-white border-0 bg-none w-8 h-8 m-0 pt-1 bi bi-list "></i></p>
                    </figure>
            
                </button>
            </div>
            <div className={isMobileMenuOpen ? "block sm:hidden" : "hidden"} id="mobile-menu">
            <SideBarMobile />
            </div>
            <Contact isMobileMenuOpen={isMobileMenuOpen}/>
             
        </>
        )
        }
export default TopBarMobile
