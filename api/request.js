import config from '../config'

export default function request(params) {
    return new Promise((resolve, reject) => {
        wx.showLoading()
        wx.request({
            method: params.method || 'GET',
            url: config.baseUrl + params.url || '',
            data: params.data || {},
            header: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${wx.getStorageSync('access_token')}`
            },
            success(res) {
                if (res.statusCode !== 200) {
                    wx.showToast({
                        icon: 'none',
                        title: '系统错误'
                    });
                    reject('系统错误');
                    return;
                }
                if (res.data.code === 0) {
                    resolve(res.data.data || {})
                } else {
                    reject(res.data.message)
                }
            },
            fail(err) {
                reject(err)
            },
            complete() {
                wx.hideLoading()
            }
        })
    })
}