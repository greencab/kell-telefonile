<script>
//Array of images which you want to show: Use path you want.
var images=new Array('img/k09d-v-u-e0-joanna-kosinska.jpg','img/c9t94jc4_l8-nathan-anderson.jpg','img/wzdda8hae7s-noah-silliman.jpg');
var nextimage=0;
doSlideshow();

function doSlideshow(){
   if(nextimage>=images.length){nextimage=0;}
   $('.body')
   .css('background-image','url("'+images[nextimage++]+'")')
   .fadeIn(500,function(){
       setTimeout(doSlideshow,1000);
   });
}
</script>
