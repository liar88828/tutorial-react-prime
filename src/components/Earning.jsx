import React from 'react';
import {Area, AreaChart, Tooltip} from "recharts";
import styled from "styled-components";
import {cardStyles} from "./Reusable";


const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}; //padding: 2rem 0 0 0;
  padding: 2rem 0 0 0;

  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
    }

    h1 {
      font-size: 2rem;
    }

    .growth {
      background-color: gray;
      padding: 0.5rem;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;

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

  .chart {
    //background: white;
    height: 70%;

    .question-container {
      margin-top: 1rem;
      //margin-bottom: 1rem;
      width: 100%;
      height: 100%;
      //background: black;
    }

    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }


  }
`


function Earning() {
	return (
			<Section>
				<div className="top">
					<div className="info">
						<h4>This month earning</h4>
						<h1>$363.7</h1>
						<div className="growth">
							<span>+2.45%</span>
						</div>
					</div>
				</div>
				<div className="chart">
					<div className={'question-container	'}>

						<AreaChart
								// style={
								// 	{marginBottom: '2rem',}}
								width={500}
								height={400}
								data={data}
								margin={{
									top: 0,
									right: 0,
									bottom: 0,
									left: 0,
								}}
						>


							{/*<XAxis dataKey="day"/>*/}
							{/*<YAxis/>*/}


							<Tooltip cursor={false}/>


							<Area type="monotone"
							      dataKey="uv"
							      animationBegin={800}
							      animationDuration={2000}
							      stroke={'#ffc107'}
							      fill={'rgba(162,149,117,0.2)'}
							      strokeWidth={4}
							/>
						</AreaChart>
					</div>

					{/*<ResponsiveContainer width={700} height="80%">*/}
					{/*	<AreaChart data={data}*/}
					{/*	           margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>*/}

					{/*		<XAxis dataKey="name" />*/}
					{/*		<YAxis />*/}
					{/*		<CartesianGrid strokeDasharray="3 3" />*/}
					{/*		<Tooltip />*/}
					{/*		<ReferenceLine x="Page C" stroke="green" label="Min PAGE" />*/}
					{/*		<ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />*/}
					{/*		<Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />*/}
					{/*	</AreaChart>*/}
					{/*</ResponsiveContainer>*/}

					{/*<ResponsiveContainer*/}
					{/*		height={'100%'}*/}
					{/*		width={'100%'}>*/}

					{/*	<AreaChart*/}
					{/*			width={500}*/}
					{/*			height={400}*/}
					{/*			data={data}*/}
					{/*			margin={{top: 0, left: 0, right: 0, bottom: 0}}>*/}


					{/*		<defs>*/}
					{/*			<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">*/}
					{/*				<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>*/}
					{/*				<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>*/}
					{/*			</linearGradient>*/}
					{/*			<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">*/}
					{/*				<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>*/}
					{/*				<stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>*/}
					{/*			</linearGradient>*/}
					{/*		</defs>*/}
					{/*		<XAxis dataKey="name"/>*/}
					{/*		<YAxis/>*/}


					{/*		<CartesianGrid*/}
					{/*				strokeDasharray="3 3"/>*/}
					{/*		<Tooltip*/}
					{/*				cursor={false}/>*/}


					{/*		<Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>*/}
					{/*		<Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>*/}

					{/*		/!*<Area*!/*/}
					{/*		/!*		dataKey={'data'}*!/*/}
					{/*		/!*		animationBegin={800}*!/*/}
					{/*		/!*		animationDuration={2000}*!/*/}
					{/*		/!*		type={'monotone'}*!/*/}
					{/*		/!*		stroke={'#ffc107'}*!/*/}
					{/*		/!*		fill={'rgba(162,149,117,0.2)'}*!/*/}
					{/*		/!*		strokeWidth={4}*!/*/}
					{/*/>*/}
					{/*	</AreaChart>*/}
					{/*</ResponsiveContainer>*/}
				</div>
			</Section>
	)
			;
}

export default Earning;

const data = [
	{
		"name": "Page A",
		"uv": 4000,
		"pv": 2400,
		"amt": 2400
	},
	{
		"name": "Page B",
		"uv": 3000,
		"pv": 1398,
		"amt": 2210
	},
	{
		"name": "Page C",
		"uv": 2000,
		"pv": 9800,
		"amt": 2290
	},
	{
		"name": "Page D",
		"uv": 2780,
		"pv": 3908,
		"amt": 2000
	},
	{
		"name": "Page E",
		"uv": 1890,
		"pv": 4800,
		"amt": 2181
	},
	{
		"name": "Page F",
		"uv": 2390,
		"pv": 3800,
		"amt": 2500
	},
	{
		"name": "Page G",
		"uv": 3490,
		"pv": 4300,
		"amt": 2100
	}
]