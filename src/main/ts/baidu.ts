import * as fs from 'fs'
import * as superagent from 'superagent'
class AI {
	public queryToken() {
		return superagent.post('https://aip.baidubce.com/oauth/2.0/token')
			.type('form')
			.send({
				grant_type: 'client_credentials',
				client_id: 'quGf7GwBkPDebYiyPb1pf3Ib',
				client_secret: '4jmKMEV7IMZCWWdESQXXpYUBm7RYuiRK'
			}).then(resp => {
				return resp.body.access_token
			})
	}
	public async queryUnit() {
		const token = await this.queryToken()
		const url = 'https://aip.baidubce.com/rpc/2.0/solution/v1/unit_utterance'
		return superagent.post(url).query({
			access_token: token,
		}).send({
			scene_id: 8695,
			query: "我想看电影",
			session_id: "",
		}).then((res) => {
			console.log(res.body.result)
		})
	}
}

const start = () => {
	new AI().queryUnit()
}
start()