$(function(){
    setTimeout(function(){
      $('.doc ').addClass('show');
    }, 1800); 
  });
  $(function(){
    setTimeout(function(){
      $('.sec').addClass('show');
    }, 1800); 
  });
  $(function(){
    setTimeout(function(){
      $('.tra ').addClass('show');
    }, 1800); 
  });
  $(function(){
    setTimeout(function(){
      $('.ai ').addClass('show');
    }, 1800); 
  });

window.addEventListener('load',function(){

            var fieldOne = document.getElementsByClassName('field')[0];
            var fieldTwo = document.getElementsByClassName('field-two')[0];
            var button = document.getElementsByClassName('button')[0];
            var overlay = document.getElementById('form-sent');
            var drawing = document.getElementsByClassName('draw');

            var intervalID = window.setInterval(animateForm, 11250);
            var stopDrawing = window.setTimeout(removeDrawingClass, 4500);

            drawing = [].slice.call(drawing);

            function animateForm() {

                fieldOne.classList.remove('field');
                fieldTwo.classList.remove('field-two');
                button.classList.remove('button');
                overlay.classList.add('is-hidden');
                overlay.id = '';

                setTimeout(function(){
                    fieldOne.classList.add('field');
                    fieldTwo.classList.add('field-two');
                    button.classList.add('button');
                    overlay.id = 'form-sent';
                    overlay.classList.remove('is-hidden');
                }, 50);

            }

            function removeDrawingClass() {

                drawing.forEach(function(draw) {
                    draw.classList.remove('draw');
                });

            }

        });