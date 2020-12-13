$(function() {
  $('#btnNewStyle').click(function() {
      let target = $('td > div:even > #1');
      target.attr('id', 'idNEW');
      $(target.siblings()).each(function(i, elem) {
       $(this).replaceWith("<h6>" + $(this).text() + "</h6>");
      });
  });

  $('#btnChangeToImg').click(function() {
      let target = $('td:odd');
      target.hide(2000, function() {
          target.children().replaceWith('<img>' + '</img>');
          target.children().attr('src', '../img/img.png');
      });
      target.show(1000);
  });
});