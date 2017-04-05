$(function() {
  var textE = document.querySelector('.mockjson');
  var textER = document.querySelector('.mockrjson')
  var $mockDesc = document.querySelector('.mockdesc');
  var editor = CodeMirror.fromTextArea(textE, {
    mode: "application/json",
    lineNumbers: true,
    lineWrapping: true,
    theme: 'monokai',
    tabSize: 2,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
    lint: true
  });

  // 返回结果的json数据
  var editorJson = CodeMirror.fromTextArea(textER, {
    mode: "application/json",
    lineNumbers: true,
    lineWrapping: true,
    theme: 'monokai',
    tabSize: 2,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
    lint: true
  });


  // 点击format
  document.querySelector('#f1').onclick = function(){
    CodeMirror.commands["selectAll"](editor);
    editor.autoFormatRange(editor.getCursor(true), editor.getCursor(false));
  }
  document.querySelector('#f2').onclick = function(){
    CodeMirror.commands["selectAll"](editorJson);
    editorJson.autoFormatRange(editorJson.getCursor(true), editorJson.getCursor(false));
  }

  // 提交mock
  document.querySelector('#sendbtn').onclick = function() {
    let data = editor.getValue();
    let _m = `mokjson=${data}&mockdesc=${$mockDesc.value}`
    if (MOCK && MOCK.id) {
      _m += `&id=${MOCK.id}`
    }
    ajax('POST', '/mock/save', _m).then((res) => {
      MOCK = JSON.parse(res);
      document.querySelector('.mock-link').innerText = MOCK.url
      document.querySelector('.mock-link').href = MOCK.url;
    })
  }

  // 获取数据
  document.querySelector('#getbtn').onclick = function() {
    if(!MOCK.id) {
      alert('请先生成！');
      return;
    }
    ajax('GET', '/mock/'+MOCK.id).then((res) => {
      editorJson.setValue(res)
      CodeMirror.commands["selectAll"](editorJson);
      editorJson.autoFormatRange(editorJson.getCursor(true), editorJson.getCursor(false));
    })
  }
})