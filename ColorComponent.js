function createColorComponent(color)
{
    var section = document.getElementById("Section");
    var heading = document.createElement("h1");
    heading.textContent = color.title;
    heading.setAttribute("class","HEAding");
    var Div = document.createElement("div");
    Div.setAttribute("class","DIV");
    Div.setAttribute("style","background-color:" + color.color);
    var rating = ratingcomponent(color);
    var button = document.createElement('button');
    button.setAttribute("class", "remove");
    button.textContent = "Remove"
    button.setAttribute("onclick",`onRemove(${color.id})`);
    section.append(heading,Div, rating, button);
    
    section.appendChild(Div);
}
    function onRemove(id)
    {
    
        let newColors = colors.filter((element) => element.id !== id)
        colors = newColors;
        
    
        renderAllColors(colors)
    
    }
    
    
