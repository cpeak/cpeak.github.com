    
    var min = -140;
    var max = 130;
    var speed = 8;
    var current_amount = min;
    var isAccelerating = false;
    var odom = 198255.00;

    function setSpeedometer(value){
      if (value <= max && value >= min){ 
        current_amount = value;
        $('#needle').css({
      	  WebkitTransform: 'rotate(' + value + 'deg)',
      	  MozTransform: 'rotate(' + value + 'deg)'
          });
      };

      var x = value + 148; /* Reset base to 0 */
      var y = x * .315;    /* Multiply by 31% to match the speedo */
      
      if (y < 10) { z = "0"+parseInt(y); } /* If speed < 0, prepend an extra 0 */
      else { z = parseInt(y); } /* Otherwise just return the parseInt */
      
      if (z > 87) { 
	document.getElementById("flux").style.backgroundImage = "url(./images/flux-active.png)"; 
      }
      else { document.getElementById("flux").style.backgroundImage = "";  }     
      
      document.getElementById('output').innerHTML=z;
      document.getElementById('odo_readout').innerHTML=odom.toFixed(3);

    }

    function decelerate(){
      if (!isAccelerating){
        setSpeedometer(current_amount - speed);
	odom = (odom + (((z/60)/60)/10));
      }
    }

    $(function() {
      $("body").keydown(
        function(event){
        if (event.which == 32) {
          isAccelerating = true;
          setSpeedometer(current_amount + speed);
	  odom = (odom + (((z/60)/60)/10));
        }
      }); 
      
      $("body").keyup(
        function(event){
        if (event.which){
          isAccelerating = false;
        }
      }); 
      setInterval (decelerate, 100);
    });
              

