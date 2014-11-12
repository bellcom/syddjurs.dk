(function ($) {
  $(document).ready(function(){
      var items = $('.view-os2web-contact-view-contact .views-field');
  var clone;
  items.each(function(index) {
    clone = $(this).clone();
    $(this).after(clone);
    $(this).addClass('tooltip_text_' + index);
    clone.attr('id', 'tooltip_text_' + index);
    clone.css({'display': 'none', 'font-size':'15px', 'border-radius':'2px 2px'});
    clone.find('h3').css('color', '#9b185c');

    $(this).tooltip({
      loader : 1,
      tooltipSourceID:'#tooltip_text_' + index,
      loaderHeight:16,
      loaderWidth:17,
      width:'283px',
      //height:'200px',
      tooltipSource:'inline',
      borderSize:'2',
      borderColor:'#9b185c',
      track: true,
      tooltipBGColor:'#f4eded'
    });

  });
    items = $('.footer-grid-left');
    items.each(function(index) {
      clone = $(this).clone();
      $(this).after(clone);
      $(this).addClass('tooltip_left_' + index);
      clone.attr('id', 'tooltip_left_' + index);
      clone.find('p').css({'font-size':'15px', 'color': '#131313'});
      clone.find('.footer-contact-inner span').not('.icon-gt-purple').css({'width':'130px'});
      clone.css({'display': 'none', 'font-size':'15px'});
      $(this).tooltip({
        loader : 1,
        tooltipSourceID:'#tooltip_left_' + index,
        loaderHeight:16,
        loaderWidth:17,
        width:'400px',
        tooltipSource:'inline',
        borderSize:'2',
        borderColor:'#9b185c',
        track: true,
        tooltipBGColor:'#fff'
      });

    });

    items = $('.footer-grid-right');
    items.each(function(index) {
      clone = $(this).clone();
      $(this).after(clone);
      $(this).addClass('tooltip_right_' + index);
      clone.attr('id', 'tooltip_right_' + index);
      clone.find('p').css({'font-size':'15px', 'color': '#131313'});
      clone.find('.footer-contact-inner span').css({'width':'130px'});
      clone.css({'display': 'none', 'font-size':'15px'});
      $(this).tooltip({
        loader : 1,
        tooltipSourceID:'#tooltip_right_' + index,
        loaderHeight:16,
        loaderWidth:17,
        width:'400px',
        tooltipSource:'inline',
        borderSize:'2',
        borderColor:'#9b185c',
        track: true,
        tooltipBGColor:'#fff'
      });

    });

  });
}(jQuery));
