import React from 'react';
import styled from "styled-components";
import {BiSearch} from "react-icons/bi";

function NavBar() {
	return (
			<Nav>
				<div className="title">
					<h4>Leslye Rodrecus</h4>
					<h1>Welcome To <span>My TAXI Dashboard</span>
					</h1>
				</div>
				<div className="search">
					<BiSearch/>
					<input type="text" placeholder={'Search'}/>
				</div>
			</Nav>);
}

export default NavBar;


const Nav = styled.nav`

  display: flex;
  justify-content: space-between;
  color: white;

  .title {
    h1 {
      span {
        margin-top: 0.5rem;
        color: #ffc107;
        letter-spacing: 0.2rem;
      }
    }
  }

  .search {
    background-color: #727272;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 6rem 1rem 6rem;
    border-radius: 1rem;

    svg {
      color: #ffc107;
    }

    input {
      background: transparent;
	    border: none;
	    color: #ffc107;
	    letter-spacing: 0.3rem;
	    &::placeholder{
		    color: #ffc107;
      }
	    &:focus{
		    outline: none;
	    }
	    }
    }
  }
`