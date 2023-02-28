/**
 * @Author: YUME
 * @createdTime: 2023-01-2023/1/11 14:36
 * @description:
 */
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { setOptSwitcher } from '../../../../store/data'

export default () => {
	const [touchWidth, setTouchWidth] = useState<Number>(0)
	const [touchLeft, setTouchLeft] = useState<Number>(0)
	const [touchId, setTouchId] = useState<Number>(0)
	const login = useRef<HTMLElement>(null) as any
	const handleTouch = (event: any, id) => {
		const { target } = event
		setTouchWidth(target.clientWidth)
		setTouchLeft(target.offsetLeft)
		setTouchId(id)
		setOptSwitcher()
	}
	useEffect(() => {
		const DOM = login.current
		setTouchWidth(DOM.clientWidth)
		setTouchLeft(DOM.offsetLeft)
	}, [])

	return (
		<>
			<Options>
				<div
					ref={login}
					onClick={e => handleTouch(e, 0)}
					style={{ fontWeight: touchId === 0 ? 'bold' : 'unset' }}
				>
					登录
				</div>
				<div
					onClick={e => handleTouch(e, 1)}
					style={{ fontWeight: touchId === 1 ? 'bold' : 'unset' }}
				>
					注册
				</div>
				<Line
					style={{
						width: `${touchWidth}px`,
						left: `${touchLeft}px`
					}}
				/>
			</Options>
		</>
	)
}

const Line = styled.div`
	border-bottom: #06f solid;
	position: absolute;
`

const Options = styled.div`
	display: flex;
	width: 150px;
	margin-bottom: 5px;
	> div {
		font-size: 16px;
		line-height: 40px;
		height: 40px;
		cursor: pointer;
		font-weight: bold;
	}
	div {
		width: 50%;
		text-align: center;
	}
`
