import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import bg from 'assets/img/bg.jpg'
// import point from 'assets/img/point.png'
import { HashRouter } from 'react-router-dom'
import Layout from './components/global/Layout'
import Login from './components/global/Login'
import { _isLoginShow } from './store/data'
import { useStore } from '@nanostores/react'
//[ package ]

//=> Main Component
export default () => {
	const isLoginShow = useStore(_isLoginShow)
	const [isLoading, setIsloading] = useState<boolean>(false)
	useEffect(() => {
		setIsloading(!isLoading)
		setTimeout(() => {
			setIsloading(!isLoading)
		}, 1300)
	}, [isLoginShow])
	const Router = () => {
		return (
			<HashRouter>
				<Layout />
			</HashRouter>
		)
	}
	const LoadingAnima = () => {
		return (
			<Ldsroller>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</Ldsroller>
		)
	}

	return <Main>{isLoginShow ? <Router /> : <Login></Login>}</Main>
}

//=> Style Component
const Main = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Ldsroller = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;

	div {
		animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		transform-origin: 40px 40px;
	}
	div:after {
		content: ' ';
		display: block;

		position: absolute;
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #079eda;
		margin: -4px 0 0 -4px;
	}
	div:nth-child(1) {
		animation-delay: -0.036s;
	}
	div:nth-child(1):after {
		top: 63px;
		left: 63px;
	}
	div:nth-child(2) {
		animation-delay: -0.072s;
	}
	div:nth-child(2):after {
		top: 68px;
		left: 56px;
	}
	div:nth-child(3) {
		animation-delay: -0.108s;
	}
	div:nth-child(3):after {
		top: 71px;
		left: 48px;
	}
	div:nth-child(4) {
		animation-delay: -0.144s;
	}
	div:nth-child(4):after {
		top: 72px;
		left: 40px;
	}
	div:nth-child(5) {
		animation-delay: -0.18s;
	}
	div:nth-child(5):after {
		top: 71px;
		left: 32px;
	}
	div:nth-child(6) {
		animation-delay: -0.216s;
	}
	div:nth-child(6):after {
		top: 68px;
		left: 24px;
	}
	div:nth-child(7) {
		animation-delay: -0.252s;
	}
	div:nth-child(7):after {
		top: 63px;
		left: 17px;
	}
	div:nth-child(8) {
		animation-delay: -0.288s;
	}
	div:nth-child(8):after {
		top: 56px;
		left: 12px;
	}
	@keyframes lds-roller {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
