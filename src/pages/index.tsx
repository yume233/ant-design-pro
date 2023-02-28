import React, { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
export default () => {
	//=> LazyLoad
	const _page = new Object() // 暂存页面对象
	const pageModule = import.meta.glob('./**') //=> Vite 导入 PAGE 目录
	Object.keys(pageModule).forEach(key => {
		//=> 仅选择每个子目录下的 index.tsx
		const pageSplit = key.split('/')
		if (/index.tsx/gim.test(key) && pageSplit.length <= 3)
			_page[pageSplit[1]] = React.lazy(pageModule[key] as any)
	})

	//=> PAGE COMPONENT | '页面组件懒加载容器'
	const PAGE = (name: string) => {
		const PageComponent = _page[name] // 取出页面
		return (
			<Suspense fallback={<></>}>
				<PageComponent />
			</Suspense>
		)
	}
	//=> 更改默认路径为 /#/ | '仅 location key 为默认时'
	const navigate = useNavigate()
	const location = useLocation()
	useEffect(() => {
		const { key, pathname } = location
		if (key === 'default' && pathname === '/') navigate('/404')
	}, [location.key])
	return (
		<Routes>
			<Route
				path={`/ActivateManagement`}
				element={PAGE('ActivateManagement')}
			/>
			<Route path={`/AccountAdmin`} element={PAGE('AccountAdmin')} />
			<Route path={`/404`} element={PAGE('PAGE404')} />
			<Route path={`/`} element={PAGE('ActivateManagement')} />
			<Route path={`/`} element={PAGE('ActivateManagement')} />
		</Routes>
	)
}
