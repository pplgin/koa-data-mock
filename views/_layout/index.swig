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
  {% include './header.swig' %}
  <div class="container">
  {% block content %}{% endblock %}
  </div>
  {% include './footer.swig' %}
  {% block footer %}{% endblock %}
</body>
</html>