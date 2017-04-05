{% extends '_layout/index.swig' %}

{% block title %}首页{% endblock %}

{% block head %}
  {% parent %}
  <link rel="stylesheet" type="text/css" href="/lib/codemirror/css/codemirror.css">
  <link rel="stylesheet" type="text/css" href="/lib/codemirror/css/lint.css">
{% endblock %}

{% block content %}
<div class="row">
  <div class="col-md-12">
    <h3 class="page-header">Mock Data Template</h3>
    <div class="form-group">
      <label>mock 基本描述(eg：对接.xxx.接口)</label>
      <textarea class="form-control mockdesc" placeholder="mock说明">{{mockdesc}}</textarea>
    </div>
    <div class="form-group">
      <label>接口类型(tag)</label>
      <div class="checkbox">
        <label class="checkbox-inline">
          <input type="checkbox" value="public">公用
        </label>
        <label class="checkbox-inline">
          <input type="checkbox" value="private">私用
        </label>
      </div>
    </div>
    <div class="form-group">
      <label>模板结构 <a class="btn btn-info btn-xs" id="f1">format</a></label>
      <textarea class="form-control mockjson">{{mocktmpl}}</textarea>
    </div>
    <input id="sendbtn" type="button" class="btn btn-primary" value="生成+提交">
  </div>
</div>
<div class="mockApiUrl">
    mock remote 地址
  <a href="" class="mock-link" target="_blank"></a>
</div>
<div class="row">
   <div class="col-md-12">
    <h3 class="page-header">Mock Data Result</h3>
    <div class="form-group">
      <label>模板结果 <a class="btn btn-info btn-xs" id="f2">format</a></label>
      <textarea class="form-control mockrjson"></textarea>
    </div>
    <input id="getbtn" type="button" class="btn btn-success" value="测试获取">
  </div>
</div>
{% endblock %}

{% block footer %}
  <script src="/lib/codemirror/js/codemirror.js"></script>
  <script src="/lib/codemirror/js/foldcode.js"></script>
  <script src="/lib/codemirror/js/foldgutter.js"></script>
  <script src="/lib/codemirror/js/brace-fold.js"></script>
  <script src="/lib/codemirror/js/indent-fold.js"></script>
  <script src="/lib/codemirror/js/formatting.js"></script>
  <script src="/lib/codemirror/js/javascript.js"></script>
  <script src="/lib/codemirror/js/lint.js"></script>
  {# <script src="http://ajax.aspnetcdn.com/ajax/jshint/r07/jshint.js"></script>
  <script src="https://rawgithub.com/zaach/jsonlint/79b553fb65c192add9066da64043458981b3972b/lib/jsonlint.js"></script>
  <script src="/lib/codemirror/js/javascript-lint.js"></script> #}
  <script>
    window.MOCK = {
      id: '{{id}}'
    }
  </script>
  <script src="/js/ajax.js"></script>
  <script src="/js/home.js"></script>
{% endblock %}