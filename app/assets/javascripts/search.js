$(function() {
    $(".chat-group-form").on("keyup", function() {  
      var input = $(".chat-group-form").val();
       
      $.ajax({
        type: 'GET',
        url: '/users/index',
        data: { keyword: input },
        dataType: 'json'
      })
      
      .done(function(users) {
        $(".chat-group-form__field.clearfix").empty();
        if (users.length !== 0) {
          users.forEach(function(user){
            appendProduct(user);
          });
        }
        else {
          appendErrMsgToHTML("一致するユーザーはいません");
        }
      })      
    });
});