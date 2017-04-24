{% extends '_layout/index.swig' %}

{% block title %} 用户相关 {% endblock %}

{% block head %}
  {% parent %}
  <link rel="stylesheet" type="text/css" href="/lib/codemirror/css/codemirror.css">
  <link rel="stylesheet" type="text/css" href="/lib/codemirror/css/lint.css">
{% endblock %}

{% block content %}
<div class="row">
  <div class="col-md-6">
    <h3 class="page-header">登录</h3>
    <div class="form-group">
      <label>用户名</label>
      <input type="text" name="username" class="form-control">
    </div>
    <div class="form-group">
      <label>密码</label>
      <input type="password" name="username" class="form-control">
    </div>
    <input id="sendbtn" type="button" class="btn btn-primary" value="登录">
  </div>
  <div class="col-md-6">
    <h3 class="page-header">注册</h3>
    <form method="POST" action="/api/reg">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" name="username" class="form-control">
      </div>
      <div class="form-group">
        <label>密码</label>
        <input type="password" name="pwd" class="form-control">
      </div>
      <div class="form-group">
        <label>密码</label>
        <input type="password" name="username" class="form-control">
      </div>
      <input id="sendbtn" type="button" class="btn btn-primary" value="注册">
    </form>
  </div>
</div>
{% endblock %}

{% block footer %}
  <script src="/js/ajax.js"></script>
{% endblock %}