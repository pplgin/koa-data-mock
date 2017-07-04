{% extends '../_layout/index.swig' %}

{% block title %} 用户相关 {% endblock %}

{% block head %}
  {% parent %}
{% endblock %}

{% block content %}
<div class="row">
  <div class="col-md-6">
   <form action="/account/login" method="POST" target="_self">
    <h3 class="page-header">登录</h3>
    {% if errMsg %}
    <div class="alert alert-danger" role="alert">{{errMsg}}</div>
    {% endif %}
    <input type="hidden" name="refUrl" value="{{refUrl}}">
    <div class="form-group">
      <label>用户名</label>
      <input type="text" name="nick" class="form-control">
    </div>
    <div class="form-group">
      <label>密码</label>
      <input type="password" name="pwd" class="form-control">
    </div>
    <input id="sendbtn" type="submit" class="btn btn-primary" value="登录">
    </form>
  </div>
</div>
{% endblock %}

{% block footer %}
  <script src="/js/ajax.js"></script>
{% endblock %}