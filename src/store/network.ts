import { _isLoginShow, _isVerifyImg, _verifyid } from './data'
import axios from 'axios'
import md5 from 'crypto-js/md5'
//启动时请求token
export async function isStart() {
	await axios({
		method: 'get',
		url: `/api/login`,
		timeout: 3000
	})
}
export async function refreshVerifyCode() {
	await axios({
		method: 'get',
		url: `/api/refresh`,
		timeout: 3000
	}).then(res => {
		_isVerifyImg.set(res.data.data)
		_verifyid.set(res.data.id)
	})
}

export async function login(req) {
	const res = await axios({
		method: 'get',
		url: `/api/login`,
		params: {
			id: req.id,
			password: md5(req.password).toString(),
			verify: req.verify,
			verifyid: _verifyid.get()
		},
		headers: {
			'Content-Type': 'application/json'
		},
		timeout: 3000
	})
	try {
		console.log(res.data)
		if (res.data.code === 200) {
			_isLoginShow.set(false)
		} else {
			return res.data.error
		}
	} catch (e) {
		console.log(e)
	}
}

export async function register(req) {
	const data = await axios({
		method: 'post',
		url: `/api/register`,
		data: {
			nickname: req.nickname,
			password: md5(req.password).toString(),
			verify: req.verify,
			verifyid: _verifyid.get()
		},
		headers: {
			'Content-Type': 'application/json'
		},
		timeout: 3000
	})
	if (data.data.data && data.data.code === 200) {
		return data.data
	}
}
setInterval(() => {
	axios({
		method: 'get',
		url: `/api/update/token`,
		timeout: 3000
	}).then(res => {
		if (res.data.status != 'logged') {
			// _isLoginShow.set(true)
		}
	})
}, 4000)
//120000
