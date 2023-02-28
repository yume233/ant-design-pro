/**
 * @Author: YUME
 * @createdTime: 2023-01-2023/1/11 14:39
 * @description:
 */
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Button, Input, Space, notification } from 'antd'
import { UserOutlined, DownSquareOutlined } from '@ant-design/icons'
import { refreshVerifyCode, register } from '../../../../store/network'
import { useStore } from '@nanostores/react'
import { _isVerifyImg } from '../../../../store/data'
import 'animate.css'
interface NetworkData {
	nickname?: string
	password?: string
	verify?: string
}
export default () => {
	const node = useRef<HTMLElement>(null) as any
	const [veriFyHeight, setVeriFyHeight] = useState<number>()
	const [req, setReq] = useState<NetworkData>()
	const [animated, setAnimated] = useState<string>('')
	const [buttonText, setButtonText] = useState('注册')
	const verifyImg = useStore(_isVerifyImg)
	const openNotification = (description: string) => {
		const args = {
			message: '账号信息',
			description: `账号注册成功，请妥善保管您的密码，登陆时请使用账号ID登录。您的账号ID是：${description}`,
			duration: 30
		}
		notification.open(args)
	}
	const handlerDateChange = (data: NetworkData) => {
		setReq({ ...req, ...data })
	}
	const errAnima = () => {
		setAnimated('animate__animated animate__headShake')
		setButtonText('验证码错误/账号密码未填写')
		setTimeout(() => {
			setAnimated('')
			setButtonText('注册')
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
					handlerDateChange({ nickname: e.target.value })
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
					className={animated}
					danger={buttonText !== '注册'}
					onClick={e => {
						//判断req内三个数据是否存在
						if (req?.nickname && req?.password && req?.verify) {
							register(req)
								.then(res => {
									openNotification(res['data'].id)
								})
								.catch(e => {
									console.log(e)
								})
						} else {
							errAnima()
						}
					}}
					block
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
	div {
		:first-child {
			background-color: #bebebe;
			flex: 1;
			text-align: center;
			margin-right: 10px;
			background-repeat: no-repeat;
			background-size: 100%;
			width: 0;
		}

		:last-child {
			flex: 2;
			span {
				display: flex;
			}
		}
	}
`

const VerifyImg = styled.div<{ url: string }>`
	background-image: ${({ url }) => (url ? `url(${url})` : 'unste')};
`
