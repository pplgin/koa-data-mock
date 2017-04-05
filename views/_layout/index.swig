<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{% block title %}{% endblock %}</title>
  {% block head %}
  <link href="/lib/boostrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="/css/layout.css" rel="stylesheet">
  {% endblock %}
</head>
<body>
  <nav class="navbar navbar-inverse navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          Data Mock
        </a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li>
            <a href="/"><i class="glyphicon glyphicon-home"></i> 首页</a>
          </li>
          <li>
            <a href="/mocklist/"><i class="glyphicon glyphicon-th-list"></i> mock 列表</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
  {% block content %}{% endblock %}
  </div>
  <script src="/lib/jquery/jquery.min.js"></script>
  <script src="/lib/boostrap/js/bootstrap.min.js"></script>
  {% block footer %}{% endblock %}
</body>
</html>