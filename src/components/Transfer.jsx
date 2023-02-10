import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi";
import styled from "styled-components";
import {cardStyles} from "./Reusable";


const Section = styled.section`
  ${cardStyles} ;
  display: flex;
  flex-direction: column;
  gap: 1;

  .title {
    h2 {
      color: #ffc107;
      font-family: "Permanent Maker", cursive;
      letter-spacing: 0.3rem;
    }
  }

  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    .transaction {
      display: flex;

      justify-content: space-between;
      align-items: center;

      .transactions__title {
        display: flex;
        gap: 1rem;

        .transactions__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }

      }

      .transactions__amount {
        background-color: rgba(215, 228, 17, 0.21);
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0ms .3s ease-in-out;

        &:hover {
          background: #ffc107;

          span {
            color: black;
          }
        }

        span {
          color: #ffc107;
        }
      }
    }

  }


  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #ffc107;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;

    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }

    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }


`

export const Transfer = () => {
	return (<Section>

				<div className={'title'}>
					<h2>Your Transfer</h2>
				</div>
				<div className="transactions">
					{transactional.map((item) => (
							<div className={'transaction'}>
								<div className="transactions__title">
									<div className="transactions__image">
										<img src={item.image} alt={item.name}/>
									</div>
									<div className="transactions__details">
										<h3> {item.name}</h3>
										<h5>{item.time}</h5>
									</div>
								</div>
								<div className="transactions__amount">
									<span> {item.amount}</span>
								</div>
							</div>))}
				</div>
				<a href="#"
				   className={'view'}>
					View All
					<HiArrowNarrowRight/>

				</a>
			</Section>


	)
}


const transactional = [{
	image: "https://picsum.photos/200/300?random=2", name: "Transfer", time: "Today ,18.04", amount: '+120'
}, {
	image: "https://picsum.photos/200/300?random=2", name: "Wisnu Pahlevi", time: "Today ,15.12.2009", amount: '+103'
}, {
	image: "https://picsum.photos/200/300?random=1232", name: "Heri Sanjaya", time: "Today ,16:36", amount: '+57'
}, {
	image: "https://picsum.photos/200/300?random=31231", name: "Endang Ilham", time: "Today ,11.02", amount: '+16'
},

]