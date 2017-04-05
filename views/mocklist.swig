{% extends '_layout/index.swig' %}

{% block title %} 历史记录 {% endblock %}

{% block content %}
<div class="row">
  <div class="col-md-12">
    <h3 class="page-header">Mock Data Template</h3>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>序号</th>
            <th>Remote地址 </th>
            <th>说明信息</th>
            <th>创建时间</th>
            <th>创建人</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
        {% for mod in list %}
          <tr>
            <td>{{ loop.index }} </td>
            <td>
              remote link::<a href="/mock/{{mod.id}}/" target="_blank">/mock/{{mod.id}}/</a>
            </td>
            <td>{{mod.mockdesc}}</td>
            <td>{{mod.createtime|date('Y-m-d H:i:s')}}</td>
            <td>{{mod.author}}</td>
            <td>
              <a class="btn btn-sm btn-primary" href="/mockedit/{{mod.id}}/">修改</a>
              <a class="btn btn-sm btn-danger delete" data-id="{{mod.id}}">删除</a>
            </td>
          </tr>
        {% endfor %}
        </tbody>
      </table>
    </div>
  </div>
</div>
{% endblock %}

{% block footer %}
<script src="/js/ajax.js"></script>
<script src="/js/mocklist.js"></script>
{% endblock %}