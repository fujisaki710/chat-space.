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

    $(function(){
        setInterval(reloadMessages, 5000);
      });
       function reloadMessages () {
     };
    var last_message_id = $('.message:last').data('messageId');
    $.ajax({
      url: location.href,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      // console.log('success');
    })
    .fail(function() {
      // console.log('error');
    });
    // setInterval(reloadMessages, 5000);

    function buildHTML(message){
      var messageHTML =  message.content && message.image.url ? '<img src="' + message.image.url + '" class="lower-message__image" >' : "" ;
      var html =
            '<div class="message" data-id=' + message.id + '>' +
                  '<div class="upper-message">' +
                    '<div class="upper-message__user-name">' +
                      message.user_name +
                    '</div>' +
                    '<div class="upper-message__date">' +
                      message.created_at +
                    '</div>' +
                  '</div>' +
                  '<div class="lower-message">' +
                    '<p class="lower-message__content">' +
                      message.content +
                    '</p>' +
                    '<img src="' + message.image.url + '" class="lower-message__image" >' +
                  '</div>' +
                '</div>'
              return html;
    }
      function scroll(){
        $('.message').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      }
});  