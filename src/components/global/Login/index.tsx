/**
 * @Author: YUME
 * @createdTime: 2023-01-2023/1/10 14:42
 * @description:
 */
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { isStart, refreshVerifyCode } from '../../../store/network'
import { useStore } from '@nanostores/react'
import { _isOptSwitcher, setOptSwitcher } from '../../../store/data'
import { ReactComponent as Antd } from '../../../assets/img/antd.svg'
import Options from './Options'
import TextsLogin from './Texts/login'
import TextsRegister from './Texts/register'
import loginBarImg from '/src/assets/img/login.jpg'

export default () => {
	useEffect(() => {
		isStart()
	}, [])
	const optSwitcher = useStore(_isOptSwitcher)
	const [isLoginShow, setIsLoginShow] = useState<boolean>(true)
	const [isLoginAnime, setIsLoginAnime] = useState<boolean>(true)
	const handlerLoginShow = () => {
		setOptSwitcher()
		setIsLoginShow(!isLoginShow)
		setIsLoginAnime(!isLoginAnime)
		setTimeout(() => {
			setIsLoginAnime(true)
		}, 400)
	}

	return (
		<Main>
			<Login>
				<Img
					hide={isLoginShow}
					style={{ left: isLoginShow ? '70px' : '570px' }}
				>
					<button onClick={handlerLoginShow}>
						{isLoginShow ? '注册' : '登录'}
					</button>
				</Img>
				<Inputs hide={isLoginShow} anima={isLoginAnime}>
					<Logo>
						<Antd />
						<h1>商悦</h1>
					</Logo>
					{optSwitcher ? <TextsLogin /> : <TextsRegister />}
				</Inputs>
			</Login>
		</Main>
	)
}

const Inputs = styled.div<{ hide: boolean; anima: boolean }>`
	z-index: 0;
	display: flex;
	justify-content: center;
	background-color: #ffffff;
	flex-direction: column;
	align-items: center;
	position: absolute;
	right: ${({ hide }) => (hide ? '100px' : '500px')};
	transition: all 0.6s cubic-bezier(0, 0, 0.2, 1);
	opacity: ${({ anima }) => (anima ? 1 : 0)};
	/* pointer-events: ${({ hide }) => (hide ? 'auto' : 'none')}; */
`

const Img = styled.div<{ hide: boolean }>`
	z-index: 9999;
	background-image: url(${loginBarImg});
	background-repeat: no-repeat;
	box-shadow: ${({ hide }) =>
		`rgb(100 100 111 / 20%) ${hide ? '20px' : '-20px'} 0px 29px 20px`};
	background-size: cover;
	background-position: center;
	width: 30%;
	height: 100%;
	/* border-radius: 8px; */
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 10px;
	transition: all 0.6s cubic-bezier(0, 0, 0.2, 1);
	button {
		width: 120px;
		height: 60px;
		font-size: 18px;
		text-align: center;
		line-height: 30px;
		font-weight: bold;
		color: white;
		border: 2px solid;
		border-radius: 10px;
		padding: 15px;
		animation: animated-border 1.5s infinite;
	}
	@keyframes animated-border {
		0% {
			box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
		}
		100% {
			box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
		}
	}
`
const Login = styled.div`
	width: 900px;
	height: calc(100dvh - 60dvh);
	background: #fff;
	border-radius: 8px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
`
const Main = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
	background-color: #e7e5e536;
	background-repeat: repeat;
	background-position: center 110px;
	background-size: 100%;
	position: relative;
`

const Logo = styled.div`
	display: flex;
	height: 40px;
	margin-bottom: 25px;

	h1 {
		color: #696363;
	}

	svg {
		height: 100%;
		width: 40px;
		margin-right: 15px;
	}
`
