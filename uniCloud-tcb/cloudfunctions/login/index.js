'use strict';
const uniID = require('uni-id')
exports.main = async (event, context) => {
  console.log(event, 'event')
	const res = await uniID.loginByWeixin({
	  code: event.code
	})
	return res
};
