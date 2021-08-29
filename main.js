$(function() {

  $('#bg-btn').click(giveBgSliders)
  $('#text-btn').click(giveTextSliders)

  function giveBgSliders(){
    $('.text-sliders').css('display', 'none')
    $('.bg-sliders').css('display', 'flex')

    $('#text-btn').removeClass('selected-btn')
    $('#bg-btn').addClass('selected-btn')
    
  }
  function giveTextSliders(){
    $('.bg-sliders').css('display', 'none')
    $('.text-sliders').css('display', 'flex')
    $('#bg-btn').removeClass('selected-btn')
    $('#text-btn').addClass('selected-btn')
    
  }



  function refreshBackground() {
    let r = $('#red-bg-slider').slider('value')
    let g = $('#green-bg-slider').slider('value')
    let b = $('#blue-bg-slider').slider('value')
    rgbValue = `rgb(${r},${g},${b})`
    $('.result-bg').css('background-color', rgbValue)
  }
  function refreshText() {
    let r = $('#red-text-slider').slider('value')
    let g = $('#green-text-slider').slider('value')
    let b = $('#blue-text-slider').slider('value')
    rgbValue = `rgb(${r},${g},${b})`
    $('.result-text').css('color', rgbValue)
  }

  $( '#red-bg-slider, #green-bg-slider, #blue-bg-slider' ).slider({
    min: 0,
    max: 255,
    slide: refreshBackground,
    change: refreshBackground
  })
  $( '#red-text-slider, #green-text-slider, #blue-text-slider' ).slider({
    min: 0,
    max: 255,
    slide: refreshText,
    change: refreshText
  })

  $( "#red-bg-slider" ).slider( "value", 200 );
  $( "#green-bg-slider" ).slider( "value", 222 );
  $( "#blue-bg-slider" ).slider( "value", 50 );

  $( "#red-text-slider" ).slider( "value", 10 );
  $( "#green-text-slider" ).slider( "value", 15 );
  $( "#blue-text-slider" ).slider( "value", 50 );


})