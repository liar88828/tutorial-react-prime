import React, {useState} from "react";
import styled from "styled-components";
import {FaAddressCard, FaTaxi} from "react-icons/fa";
import {MdSpaceDashboard} from "react-icons/md";
import {RiDashboard2Fill} from "react-icons/ri";
import {GiTwirlCenter} from "react-icons/gi";
import {BsFillChatTextFill} from "react-icons/bs";
import {IoMdSettings} from "react-icons/io";
import {FiLogOut} from "react-icons/fi";

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;

  .top {

    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }

    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      svg {
        color: #ffc107;
        font-size: 2rem;
      }

      span {
        font-size: 2rem;
        color: #ffc107;
        //font-family: Permanent;
      }
    }

    .links {
      display: flex;
      justify-content: center;

      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;

          &:hover {
            background-color: #ffc107;

            a {
              color: black;
            }
          }

          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }

        .active {
          background-color: #ffc107;

          a {
            color: black;
          }
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;

    &:hover {
      background-color: #da0037;
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
`;

function Slidebar() {
	const [currentLink, setCurrentLink] = useState(1);
	const [navbarState, setNavbarState] = useState(false);
	const html = document.querySelector("html");
	html.addEventListener("click", () => setNavbarState(false));


	return (
			<Section>
				<div className="top">
					<div className="brand">
						<FaTaxi>
							<span>MY Taxi</span>
						</FaTaxi>
					</div>
					<div className="toggle">

					</div>
					<div className="links">
						<ul>
							<li      className={currentLink === 1 ? "active" : "none"}
               onClick={() => setCurrentLink(6)}
              >
								<a href="Phillip Harris#">
									<MdSpaceDashboard/>
									<span>DashBoard</span>
								</a>
							</li>
							<li      className={currentLink === 2 ? "active" : "none"}
               onClick={() => setCurrentLink(2)}
              >
								<a href="Claudia Rhodes#">
									<RiDashboard2Fill/>
									<span>Rider</span>
								</a>
							</li>
							<li      className={currentLink === 3 ? "active" : "none"}
               onClick={() => setCurrentLink(3)}
              >
								<a href="Allen Fernandez#">
									<FaAddressCard/>
									<span>Paymen Details</span>
								</a>
							</li>
							<li      className={currentLink === 4 ? "active" : "none"}
               onClick={() => setCurrentLink(4)}
              >
								<a href="Josie Gibbs#">
									<GiTwirlCenter/>
									<span>Learning Center</span>
								</a>
							</li>
							<li      className={currentLink === 5 ? "active" : "none"}
               onClick={() => setCurrentLink(5)}
              >
								<a href="Marie Patton#">
									<BsFillChatTextFill/>
									<span>FAQs</span>
								</a>
							</li>
							<li      className={currentLink === 6 ? "active" : "none"}
               onClick={() => setCurrentLink(6)}
              >
								<a href="Justin Miller#">
									<IoMdSettings/>
									<span>Settings</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="logout">
					<a href="logot">
						<FiLogOut/>
						<span className="logout">LogOut</span>
					</a>
				</div>
			</Section>
	);
}

export default Slidebar;
