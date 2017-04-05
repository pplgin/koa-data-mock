/**
 * 简单的ajax 请求
 * @param      {[type]} method                   [description]
 * @param      {[type]} _url                     [description]
 * @param      {[type]} _data                    [description]
 * @return     {[type]}                          [description]
 * @author  johnnyjiang
 * @email               johnnyjiang813@gmail.com
 * @createTime          2017-03-29T13:43:07+0800
 */
function ajax(method,_url,_data){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open(method,_url, true);
    xhr.onreadystatechange = function () {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          resolve(xhr.responseText)
      }
    };
    if(method==='POST'){
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }
    xhr.send(_data);
  });
}