var promise = {
    ajax(o) {
        return new Promise((resolve, reject) => {
            o.isAsync = o.isAsync === undefined ? true : Boolean(o.isAsync);

            // 创建ajax
            let xhr = null;

            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else {
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            };

            // 监听ajax状态变化
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(this.responseText);
                };
            };

            // 建立服务器连接
            xhr.open(o.type.toUpperCase(), o.url, o.isAsync);

            // 发起请求
            xhr.send(null);
        });
    }
}