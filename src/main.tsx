import React from 'react'
import { createRoot } from 'react-dom/client'
//[ package ]

import { GlobalStyle } from './_/style'
import 'antd/dist/antd.css'
// import './_html/index.css'
//[ style ]

import App from 'App'
//[ APP ]

//=> Render | 渲染页面
//=> 绑定渲染组件↓
createRoot(document.getElementById('MAIN')).render(
	<>
		<GlobalStyle />
		<App />
	</>
)
