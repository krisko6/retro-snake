(function () {
  ONE = [[1,0],[1,1],[1,2],[1,3],[1,4]];
  ZERO = [[0,0],[1,0],[2,0],[0,1],[2,1],[0,2],[2,2],[0,3],[2,3],[0,4],[1,4],[2,4]];
  TWO = [[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,3],[0,4],[1,4],[2,4]];
  THREE = [[0,0],[1,0],[2,0],[2,1],[2,2],[2,3],[2,4],[0,2],[1,2],[0,4],[1,4]];
  FOUR = [[0,0],[0,1],[0,2],[1,2],[2,2],[2,1],[2,0],[2,3],[2,4]];
  FIVE = [[0,0],[1,0],[2,0],[0,1],[0,2],[1,2],[2,2],[2,3],[2,4],[1,4],[0,4]];
  SIX = [[0,0],[1,0],[2,0],[0,1],[0,2],[1,2],[2,2],[0,3],[2,3],[0,4],[1,4],[2,4]];
  SEVEN = [[0,0],[1,0],[2,0],[2,1],[2,2],[2,3],[2,4]];
  EIGHT = [[0,0],[1,0],[2,0],[0,1],[2,1],[0,2],[1,2],[2,2],[0,3],[2,3],[0,4],[1,4],[2,4]];
  NINE = [[0,0],[1,0],[2,0],[0,1],[2,1],[0,2],[1,2],[2,2],[2,3],[2,4],[1,4],[0,4]];

  if (typeof Snake === "undefined") {
    window.Snake = {};
  }

  var View = Snake.View = function(board, $el){
    this.board = board;
    this.$el = $el;
    this.bindEvents();
    this.setup();
    this.myInterval = window.setInterval(this.step.bind(this), 200);
  };

  View.prototype.bindEvents = function(){
    var that = this;
    $(window).on("keydown", function(event) {

      switch(event.which){
        case 37:
          that.board.snake.turn("W");
          break;
        case 38:
          that.board.snake.turn("N");
          break;
        case 39:
          that.board.snake.turn("E");
          break;
        case 40:
          that.board.snake.turn("S");
          break;
        case 80:
          that.pause();
          break;
        case 32:
          that.restart();
          break;
      }
    });
  };

  View.prototype.step = function () {
    this.board.move();

    this.render();
  };

  View.prototype.pause = function(){
    clearInterval(this.myInterval);
  };

  View.prototype.restart = function(){
    clearInterval(this.myInterval);
    this.myInterval = window.setInterval(this.step.bind(this), 200);
  };

  View.prototype.render = function () {
    $(".segment").removeClass("snake");
    $(".segment").removeClass("head");
    $(".segment").removeClass("apple");
    $(".segment").removeClass("scoreboard");
    $(".score").empty().append(this.board.snake.score);
    
    this.renderScore();

    var segments = this.board.snake.segments;
    for(var i = 0; i < segments.length; i++){
      var x = segments[i][0];
      var y = segments[i][1];
        $("#" + x + "-" + y).addClass("snake");
    }

    var apple = this.board.apple;
      $("#" + apple[0] + "-" + apple[1]).removeClass("scoreboard").addClass("apple");


  };

  View.prototype.renderScore = function() {
    var score = this.board.snake.score;
    var digits = score.toString().split('');
    for(i = 0; i < digits.length; i++){
      this.renderDigit(digits[i],i);
    }


  };

  View.prototype.renderDigit = function(num,place){

    var arr = ZERO;
    switch(num) {
        case '0':
            arr = ZERO;
            break;
        case '1':
            arr = ONE;
            break;
        case '2':
            arr = TWO;
            break;
        case '3':
            arr = THREE;
            break;
        case '4':
            arr = FOUR;
            break;
        case '5':
            arr = FIVE;
            break;
        case '6':
            arr = SIX;
            break;
        case '7':
            arr = SEVEN;
            break;
        case '8':
            arr = EIGHT;
            break;
        case '9':
            arr = NINE;
            break;
        default:
            arr = ZERO;
    }

    for(var i = 0; i < arr.length; i++){
      var x = arr[i][0] + (place * 3);
      var y = arr[i][1];
        $("#" + x + "-" + y).addClass("scoreboard");


    }

  };

  View.prototype.setup = function(){
    for(var i =0; i < 40; i++ ){
      var newRow = $("<div>").addClass("row");
      this.$el.append(newRow);
      for(var j = 0; j < 100; j++){
        var newCell = $('<div>').addClass("segment").attr("id",j + "-" + i);
        newRow.append(newCell);
      }
    }
  };


})();
