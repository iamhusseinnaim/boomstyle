$('.tab-nav').click(function (e) { 
    var target = $(this).attr('href')
    $(this).addClass('active-tab-nav');
    $(this).siblings().removeClass('active-tab-nav').removeClass('shadow');
    set_tab_content(target);
  });

  function get_active_tab(){
    var active_tab = location.hash.slice(1);
    if(active_tab){
      return '#'+active_tab
    }else{
      location.hash = $(".tab-nav").first().attr('href')
      return '#'+location.hash.slice(1)
    }
  }

  function set_tab_content(active){
    var tab = $(active)
    tab.siblings().removeClass('active-tab').removeClass("rounded")
    tab.addClass('active-tab').addClass('rounded')
  }
  set_tab_content(get_active_tab())
  $(get_active_tab().replace('#','.')).addClass('active-tab-nav').siblings().removeClass('active-tab-nav');
