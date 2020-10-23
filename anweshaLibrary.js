// function bouncing: can be used to bounce two objects. Pass the two objects that you want to bounce in the arguments
function bouncing (obj1 , obj2) {
    if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2 && 
      obj2.x - obj1.x<=obj1.width/2+obj2.width/2 &&
      obj1.y - obj2.y<=obj1.height/2+obj2.height/2 &&
      obj2.y-obj1.y<=obj1.height/2+obj2.height/2){
      
        obj1.velocityX = obj1.velocityX*(-1);
        obj2.velocityX = obj2.velocityX*(-1);
    }
    else{
     obj1.velocityX = obj1.velocityX;
     obj2.velocityX = obj2.velocityX;
  }
  }


// function tounching: can be used to detect colllision between two objects. Pass the two objects in the arguments.
  function touching (obj1 , obj2) {
    if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2 && 
      obj2.x - obj1.x<=obj1.width/2+obj2.width/2 &&
      obj1.y - obj2.y<=obj1.height/2+obj2.height/2 &&
      obj2.y-obj1.y<=obj1.height/2+obj2.height/2){
      
         return true;
    }
    else{
   return false;
    }  
  }


  // function increaseSize: can be used to increase the size of an object. Pass the object in the arguments.
  function increaseSize (obj1) {
    obj1.scale = 2;
    }
    
    
    // function decreaseSize: can be used to decrease the size of an object. Pass the object in the srguments.
    function decreaseSize (obj1){
      obj1.scale = 0.5;
    }