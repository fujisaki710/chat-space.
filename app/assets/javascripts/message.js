$(function(){
  function buildHTML(message){
    var imageHTML = message.image ? '<asset_path src=${message.image} >' : "";
    var html =
        `<div class="message" data-message-id=${message.id}>
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
  }

  $('.js-form').on('submit', function(){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
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

    
    var reloadMessages = function() {
      var group_id = $(".left-header__title").data('group_id');

      var last_message_id = $('.message:last').data('messageId');
        $.ajax({
          url: '/groups/${group_id}/api/messages',
          type: 'get',
          dataType: 'json',
          data: {id: last_message_id}
        })
        .done(function(messages) {
          messages.forEach(function(message) {
            var insertHTML = buildHTML(message)
            $('.message').append(insertHTML)
            $('.message').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');    
        })

        .fail(function() {
          alert('自動更新に失敗しました');
        }) 
        setInterval(reloadMessages, 5000);
          
          })     
 }; 
});

