import React from 'react'
import styled from "styled-components";
import NavBar from "./NavBar";
import Analytic from "./Analytic";
import Faq from "./Faq";
import Earning from "./Earning";
import {Transfer} from "./Transfer";
import Profile from "./Profile";

export const DashBoard = () => {
	return (
			<Section>
				<NavBar/>
				<div className="grid">
					<div className="row__one">
						<Analytic/>
						<Faq/>
					</div>
					<div className="row__tow">
						<Earning/>
						<Transfer/>
						<Profile/>
					</div>
				</div>


			</Section>
	)
}


const Section = styled.section`
	margin-left:20vw;
	padding:2rem;
	height: 100%;
	
	
`
    
    
    
