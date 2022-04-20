function ratingcomponent(color)
{
   var ratingNode = document.createElement("Div");
    ratingNode.setAttribute("class", "rating");
    
   createStars(ratingNode, color);
   return ratingNode;
    
}

function createStars(ratingNode, color)
{
    for(let i = 0; i < 5; i++ )
    {
        var star =document.createElement("span");
        if(i < color.rating)
        {
            star.setAttribute("class", "fa fa-star checked");
            star.setAttribute("onclick",`changeRating(${color.id},${i})`);

        }
        else
        {
            star.setAttribute("class", "fa fa-star"); 
            star.setAttribute("onclick",`changeRating(${color.id},${i})`);
        }
        ratingNode.appendChild(star);
    }
}
function changeRating (id,index) {

  var newCOlour = colors.map((color)=>{
        if (color.id==id){
            color.rating = index+1
        }
        return color
    })
   
    
renderAllColors(newCOlour)
}
