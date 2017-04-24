{% extends '_layout/index.swig' %}

{% block title %} 使用说明 {% endblock %}

{% block head %}
  {% parent %}
{% endblock %}

{% block content %}
<div class="row">
  <h3>mock说明文档</h3>
  <p>
    <h3>mockconfig.json</h3>
    <pre>
      {
        "/webapi/sns/v1/card/" : "/mock/tjp52irjbsyehsmwc3csdcxr",
        ...
        "后端约定API":"按照文档apijson mock地址"
      }
    </pre>
  </p>
  <p>
    <h3>本地server(koa2)</h3>
    <pre>
      const request = require('co-request');
      const remoteConfig = require('./mockconfig.json');
      const proxyResponse = (ctx, response)=>{
        for (var key in response.headers) {
          ctx.response.set(key, response.headers[key]);
        }
        ctx.body = response.body;
        ctx.response.status = response.statusCode;
      }

      function remoteProxy(){
        let keys = Object.keys(remoteConfig);
        return (ctx, next)=>{
          let matchkeys = keys.filter((key)=>{
            let reg = new RegExp(key);
            return reg.test(ctx.path)
          });
          if(!matchkeys.length){
            return next();
          }
          try {
            return request({
              url:'http://http://45.78.21.205:3030'+ remoteConfig[matchkeys[0]],
              method: ctx.method.toUpperCase(),
            }).then((res)=>{
              proxyResponse(ctx, res);
            });
          } catch (err) {
            ctx.throw(500, err);
          }
        }
      }
      // 地址mock -E
      app.use(remoteProxy())
    </pre>
  </p>
</div>
{% endblock %}

{% block footer %}
{% endblock %}