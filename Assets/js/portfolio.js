$(function(){
	$('#progress').progress();
});

$('#progress').progress({

  // height of the progress bar
  size: '2px',

  // or 'bottom'
  position: 'top',

  // background color
  wapperBg: '#eee',

  // inner color
  innerBg: '#50bcb6'
  
});

$('#progress').progress({

  duration: '.3s'

});

$('#progress').progress({

  effect: 'linear'

});