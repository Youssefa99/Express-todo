$(document).ready(function(){
  $('form').on('submit', function(){
    var todo = $('form input').val();
    var item = {item: todo}; // make object of same type as the data

    $.ajax({
      type: 'post',
      url: '/todo',
      data: item,
      success: function(data){
        location.reload();
      }
    })
  })
  $('li').on('click', function(){
    var item = $(this).text().replace(/ /g, "-"); // replace spaces with hyphens for the url
    $.ajax({
      type: 'delete',
      url: '/todo/' + item,
      success: function(data){
        location.reload();
      }
    })
  })
})