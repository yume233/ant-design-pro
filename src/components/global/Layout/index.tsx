import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu, Avatar } from 'antd'
import Pages from '../../../pages'
const { Content, Sider, Header, Footer } = Layout
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import items, { router } from './MenuItems'

export default () => {
	const [collapsed, setCollapsed] = useState(false)
	const navigate = useNavigate()

	const onClick = e => {
		navigate(router[e.key] ? router[e.key] : '/')
	}
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={value => setCollapsed(value)}
			>
				<Logo>
					<div>{collapsed ? '悦' : '商悦'}</div>
				</Logo>
				<Menu
					theme='dark'
					defaultSelectedKeys={['1']}
					mode='inline'
					items={items}
					onClick={onClick}
				/>
			</Sider>
			<Layout className='site-layout'>
				<Header>
					<HeaderMenu
						theme='dark'
						defaultSelectedKeys={['1']}
						mode='horizontal'
						items={items}
						onClick={onClick}
					/>
				</Header>
				<Main style={{ margin: '0 16px' }}>
					<Pages />
				</Main>
				<Footer style={{ display: 'flex', justifyContent: 'center' }}>
					商悦 ©2018-2022 Umia@Aeterna Star Riant Observation
					Station/永恒星轨观测所
				</Footer>
			</Layout>
		</Layout>
	)
}
const Main = styled(Content)`
	display: flex;
	align-items: center;
	justify-content: center;
`
const Logo = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	div {
		height: 35px;
		width: 70%;
		//background-color: #7ec1ff;
		color: #7ec1ff;
		line-height: 35px;
		text-align: center;
		font-size: 30px;
	}
`
const HeaderMenu = styled(Menu)`
	display: flex;
	justify-content: flex-end;
`
