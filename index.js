const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const CryptoJS = require('crypto-js');
const crypto = require('crypto');
const { stringify } = require('querystring');
const { encryptAES, decryptAES } = require('./aes');

// this code for testing encryption data

app.use(bodyParser.json())
app.post('/aes', async (req, res) => {
	try {
		const data = req.body
		const secretKey = 'yoursecretkey'
		// Encrypt
		const encrypted = encryptAES(data, secretKey)
		// Decrypt
		const decrypted = decryptAES(encrypted, secretKey)
		res.status(200).json({
			success: 'success',
			payload: {
				encrypted,
				decrypted
			},
			error: null
		})
	} catch (error) {
		res.status(400).json({
			success: 'fail',
			payload: null,
			error: 'bad request exception'
		})
	}
})

app.listen(3333, () => {
	console.log('====================================');
	console.log('listening port 3333');
	console.log('====================================');
})