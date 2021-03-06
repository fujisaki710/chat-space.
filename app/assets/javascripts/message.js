$ (function() {

  function buildHTML(message){
    var imageHTML = message.image.url ? `<img src="${message.image.url}" class="lower-message__image" >` : "";
    var html =
        `<div class="message" data-message_id=${message.id}>
            <div class="upper-message">
              <div class="upper-message__user-name">
                ${message.user_name}
              </div>
              <div class="upper-message__date">
                ${message.date}
              </div>
            </div>
            <div class="lower-message">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
            ${imageHTML} 
          </div>`
        return html;
  };

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){

        var html = buildHTML(data); 
        $('.messages').append(html); 
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');             
        $('form')[0].reset();
    })
      .fail(function(){
        alert('error');
    });
      return false;
    });

    
    function reloadMessages () {
      var group_id = $(".left-header__title").data('group_id');
      var message_id = $('.message:last').data('message_id');
        $.ajax({
          url: `/groups/${group_id}/api/messages`,
          type: 'get',
          dataType: 'json',
          data: {id: message_id}
        })
        .done(function(messages) {
          var insertHTML = '';        
          messages.forEach(function(message) { 
            var html = buildHTML(message) 
              $('.messages').append(html)
              $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');  
              
         });
        })　  
        .fail(function() {
          alert('自動更新に失敗しました');  
          
        })             
 };
  $(function(){
  if (location.pathname.match(/messages/)) {
    setInterval(reloadMessages,5000);  
  }  
  else {
    clearInterval(reloadMessages);
  };
  });        
});