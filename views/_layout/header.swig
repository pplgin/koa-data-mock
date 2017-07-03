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
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="button" class="btn btn-default">搜索</button>
        </form>
        <ul class="nav navbar-nav navbar-right hidden-sm">
          <li><a href="/help/"><i class="glyphicon glyphicon-question-sign"></i> 使用说明</a></li>
          {% if session%}
            <li><a href="/account/center/"><i class="glyphicon glyphicon glyphicon-user"></i>{{session.uuid}}</a></li>
          {% else %}
            <li><a href="/account/login/"><i class="glyphicon glyphicon glyphicon-user"></i> 登录</a></li>
            <li><a href="/account/register/">注册</a></li>
          {% endif %}
        </ul>
      </div>
    </div>
  </nav>