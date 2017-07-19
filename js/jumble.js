$(document).ready(function() {
   $("#story").hover(
      function () {
        $('#story').text('дом');
      },
      function () {
        $('#story').text('Home');
      }
    );
    $("#clowns").hover(
      function () {
        $('#clowns').text('Знакомство с клоунами');
      },
      function () {
        $('#clowns').text('Meet the Clowns');
      }
    );
    $("#shows").hover(
      function () {
        $('#shows').text('Показывает/Видео');
      },
      function () {
        $('#shows').text('Shows/Videos');
      }
    );
    $("#hireUs").hover(
      function () {
        $('#hireUs').text('Наймите нас');
      },
      function () {
        $('#hireUs').text('Hire Us');
      }
      );
    $("#signUp").hover(
      function () {
       $('#signUp').text('Втягиваться');
      },
      function () {
       $('#signUp').text('Get Involved');
      }
      );
     $("#email").hover(
      function () {
      $('#email').text('бронирование');
      },
      function () {
      $('#email').text('Booking');
        }
      );
});
