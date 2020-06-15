import * as auth from './auth'
import * as user from './user'
import * as article from './article'

/**
 * 获取站点信息
 * @param  {object} data 参数,默认为空
 * @return {promise}
 */
const getSiteInfo = function(data) {
	return API.get('/api/v1/setting', data);
}

module.exports = {
    getSiteInfo,
    auth,
    user,
    article
}