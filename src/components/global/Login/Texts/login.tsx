/**
 * @Author: YUME
 * @createdTime: 2023-01-2023/1/11 14:39
 * @description:
 */
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Button, Input, Space } from 'antd'
import { UserOutlined, DownSquareOutlined } from '@ant-design/icons'
import { refreshVerifyCode, login } from '../../../../store/network'
import { useStore } from '@nanostores/react'
import { _isVerifyImg } from '../../../../store/data'
import 'animate.css'
interface NetworkData {
	id?: string
	password?: string
	verify?: string
}
export default () => {
	const node = useRef<HTMLElement>(null) as any
	const [veriFyHeight, setVeriFyHeight] = useState<number>()
	const [req, setReq] = useState<NetworkData>()
	const [animated, setAnimated] = useState<string>('')
	const [buttonText, setButtonText] = useState('登录')
	const verifyImg = useStore(_isVerifyImg)
	const [loading, setLoading] = useState<boolean>(false)
	const handlerDateChange = (data: NetworkData) => {
		setReq({ ...req, ...data })
	}
	const errAnima = (text = '账号/密码/验证码错误') => {
		setAnimated('animate__animated animate__headShake')
		setButtonText(text)
		setTimeout(() => {
			setAnimated('')
			setLoading(false)
			setButtonText('登录')
		}, 900)
	}
	useEffect(() => {
		const DOM = node.current
		setVeriFyHeight(DOM.offsetHeight)
	}, [node])
	return (
		<Main direction='vertical'>
			<Input
				size='large'
				placeholder='账号'
				prefix={<UserOutlined />}
				onChange={e => {
					handlerDateChange({ id: e.target.value })
				}}
			/>
			<Input.Password
				size='large'
				placeholder='密码'
				onChange={e => {
					handlerDateChange({ password: e.target.value })
				}}
				prefix={<DownSquareOutlined />}
			/>
			<Verify ref={node}>
				<VerifyImg
					url={verifyImg}
					style={{
						height: veriFyHeight,
						lineHeight: `${veriFyHeight}px`
					}}
				></VerifyImg>
				<div>
					<Input.Group compact>
						<Input
							size={'large'}
							onChange={e => {
								handlerDateChange({ verify: e.target.value })
							}}
						/>
						<Button onClick={refreshVerifyCode} size={'large'} type='primary'>
							刷新
						</Button>
					</Input.Group>
				</div>
			</Verify>
			<Buttons>
				<Button
					style={{ width: '100%' }}
					size='large'
					type='primary'
					loading={loading}
					className={animated}
					danger={buttonText !== '登录'}
					onClick={e => {
						//判断req内三个数据是否存在
						if (req?.id && req?.password && req?.verify) {
							setLoading(!loading)
							login(req)
								.then(e => {
									if (e) {
										errAnima(e)
									}
									setTimeout('setLoading(false);', 1000)
								})
								.catch(errAnima)
						} else {
							errAnima()
						}
					}}
				>
					{buttonText}
				</Button>
				<a
					onClick={() => {
						alert('请联系客服')
					}}
				>
					忘记密码?
				</a>
			</Buttons>
		</Main>
	)
}
const Buttons = styled.div`
	margin-top: 10px;
	width: 100%;
	a {
		color: #bebebe;
	}
`

const Main = styled(Space)`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	* {
		transition: unset;
	}
	> div {
		width: 100%;
	}
`
const Verify = styled.div`
	display: flex;
	align-items: center;
	div:last-child {
		flex: 2;
		span {
			display: flex;
		}
	}
`
const VerifyImg = styled.div<{ url: string }>`
	background-color: #bebebe;
	flex: 1;
	text-align: center;
	margin-right: 10px;
	background-repeat: no-repeat;
	background-size: 100%;
	width: 0;
	background-image: ${({ url }) => (url ? `url(${url})` : 'unste')};
`
