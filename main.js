
// $(document).ready(function(){
//   $('span').on('click', function rate(){

//   })
// })

var rating = document.getElementsByTagName('span');
rating.addEventListener('click', rate);

var rate = function(event){
  document.getElementsByTagName("span").style.background = "#1E633C";
}
