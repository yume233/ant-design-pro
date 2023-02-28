import { UserConfig, ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import _package from './package.json'
import { rmSync } from 'node:fs'

//=> Vite config
export default ({ command }: ConfigEnv): UserConfig => {
	return {
		//=> 插件
		plugins: [
			tsconfigPaths(),
			react({
				include: ['*.tsx', '*.ts']
			}),
			svgr()
		],
		build: {
			rollupOptions: {
				output: {
					chunkFileNames: 'static/js/[name]-[hash].js',
					entryFileNames: 'static/js/[name]-[hash].js',
					assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
				}
			}
		},
		server: {
			port: 1024, //=> Dev 监听端口 | '一般在 3000 绑定失败时设置'
			cors: true,
			open: true,
			proxy: {
				'/api': {
					//10.0.0.11
					target: 'http://127.0.0.1:8080/',
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, '')
				}
			}
		}
	}
}
