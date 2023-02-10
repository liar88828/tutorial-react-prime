import React from 'react';
import {AiFillCalendar} from "react-icons/ai"
import {IoIosArrowForward, IoMdCash} from 'react-icons/io'
import {MdTimelapse} from 'react-icons/md'
import styled from "styled-components";
import {cardStyles} from "./Reusable";


const Section = styled.section`
  ${cardStyles}
  .title {
    h2 {
      color: #ffc107;
      font-family: 'Permanent Maker', cursive;
      letter-spacing: 0.3rem;
    }
  }

  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      svg {
        font-size: 1.4rem;
      }

      &:nth-of-type(2) {
        border-top: 0.01rem solid #636e6e;
        border-bottom: 0.01rem solid #636e6e;
	      padding:0.8rem 0;
      }


    }
  }

`

function Faq() {


	return (<Section>
		<div className="title">
			<h2>Information</h2>
		</div>
		<div className="faqs">
			{faqs.map((faq) => (
					<div className={'faq'}>
						<div className="info">
							{faq.icon}
							<h4>{faq.text}</h4>
						</div>
						<IoIosArrowForward/>
					</div>
			))
			}
		</div>
	</Section>);
}

export default Faq;

const faqs = [
	{
		icon: <AiFillCalendar/>,
		text: 'Baghdad sandra unix fed . '
	},
	{
		icon: <MdTimelapse/>,
		text: 'Pocket felt ambassador tournament gadgets rational bulk, calendar commitments contain savage altered diego systematic.'
	},
	{
		icon: <IoMdCash/>, text: 'Trash tracy woods pix jungle listing. '
	},


]
