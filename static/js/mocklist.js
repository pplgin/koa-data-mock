$(function(){

  // 删除数据
  $('.delete').on('click',function(e){
    e.preventDefault();
    var $dom = $(this).closest('tr');
    if(confirm('确认删除？')){
      $.ajax({
        type:'DELETE',
        url:'/mock/'+$(this).data('id')+'/',
      }).then(function(res){
        if(res.status==1){
          $dom.remove();
        }
      },function(err){
        console.log(err)
      })
    }
  })

})