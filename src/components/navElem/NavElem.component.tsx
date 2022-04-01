import React, { useState, RefObject } from "react";
import { Link } from "react-router-dom";
import "./NavElem.scss";
import logo from "../../images/logoHere.png";

interface NavElemProps {
    aboutRef: RefObject<HTMLDivElement>,
	howToRef: RefObject<HTMLDivElement>,
	roadMapRef: RefObject<HTMLDivElement>,
	buyMartianRef: RefObject<HTMLDivElement>,
	aboutDaoRef: RefObject<HTMLDivElement>
}
function NavElem({aboutRef, howToRef, roadMapRef, buyMartianRef, aboutDaoRef}: NavElemProps) {
	const [showMenu, setShowMenu] = useState<boolean>(false)
	const goToHowTo = () => {
		if (howToRef && howToRef.current) {
			setShowMenu(false)
			howToRef.current.scrollIntoView()
			
		}
	}
	const goToAbout = () => {
		if (aboutRef && aboutRef.current) {
			setShowMenu(false)
			aboutRef.current.scrollIntoView()
			
		}
	}
	const goToRoadMap = () => {
		if (roadMapRef && roadMapRef.current) {
			setShowMenu(false)
			roadMapRef.current.scrollIntoView()
			
		}
	}
	const goToBuyMartian = () => {
		if (buyMartianRef && buyMartianRef.current) {
			setShowMenu(false)
			buyMartianRef.current.scrollIntoView()
			
		}
	}
	const goToAboutDao = () => {
		if (aboutDaoRef && aboutDaoRef.current) {
			setShowMenu(false)
			aboutDaoRef.current.scrollIntoView()
			
		}
	}
  return (
	  <div className={`main-nav ${showMenu ? 'show' : ''}`}>
		<nav>
			<Link to="/">
				<img src={logo} className="logo" alt="" />
			</Link>
			<ul className={`${showMenu ? 'show' : ''}`}>
				<li>
					<button className="just-text" type="button" onClick={() => goToHowTo()}>How To</button>
				</li>
				<li>
					<button className="just-text" type="button" onClick={() => goToAbout()}>About</button>
				</li>
				<li>
					<button className="just-text" type="button" onClick={() => goToRoadMap()}>Road Map</button>
				</li>
				{/* <li>
					<button className="just-text" type="button" onClick={() => goToBuyMartian()}>Buy A Martian</button>
				</li> */}
				<li>
					<button className="just-text" type="button" onClick={() => goToAboutDao()}>About DAO</button>
				</li>
				{/* <li>
				<a href="https://snapshot.org/#/miamimartianclub.eth" target="_blank">
					<button className="btn teal" type="button" >Enter DAO</button>
				</a>
				</li> */}
				{/* <li>
					<button className="btn green" type="button">Connect Wallet</button>
				</li> */}
			</ul>
			<div className={`container ${showMenu ? 'change' : ''}`} onClick={()=>setShowMenu(!showMenu)}>
				<div className="bar1"></div>
				<div className="bar2"></div>
				<div className="bar3"></div>
			</div>
		</nav>
		
	  </div>
  );
}

export default NavElem;
