import config from '../../config.js'

Page({
    /**
     * 页面的初始数据
     */
    data: {
        url: null,
        title: "",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('生命周期函数--监听页面onLoad' + JSON.stringify(options))
        if (options.url != null) {
            var url = decodeURIComponent(options.url);
            if (url.indexOf('*') != -1) {
                url = url.replace("*", "?");
            }
            this.setData({
                url: url
            });
        } else {
            this.setData({
                url: 'https://' + config.baseUrl
            });
        }
    },
    onShareAppMessage: function (options) {
        console.log('分享Url:' + JSON.stringify(options))
        var url = options.webViewUrl;
        if (url.indexOf("?") != -1) {
            url = url.replace("?", "*");
        }
        url = 'pages/web/web?url=' + url;
        return {
            title: '分享"' + config.appName + '"的文章' + this.data.title,
            path: url,
            success: function (res) {
                // 转发成功
                console.log(url);
            },
            fail: function (res) {
                // 转发失败
            }
        }
    }
})