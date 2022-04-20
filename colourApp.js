var colors = [
    {
        "id" : 1,
        "title" : "ocean at dusk",
        "color" : "#00c4e2",
        "rating" : 5
    },
    {
        "id" : 2,
        "title" : "lawn",
        "color" : "#26ac56",
        "rating" : 4
    },
    {
        "id" : 3,
        "title" : "bright red",
        "color" : "#ff0000",
        "rating" : 3
    },
    {
        "id" : 4,
        "title" : "bright red",
        "color" : "#ff0000",
        "rating" : 4
    }
]

//let section = document.getElementById("Section");


function renderAllColors(colors)
{
    var section = document.getElementById("Section");
    section.innerHTML = "";
    colors.forEach((element) => createColorComponent(element));
}
function Color(title,color)
{
    this.id = colors.length===0 ? 1: colors[colors.length - 1].id + 1;
    this.title = title;
    this.color = color;
}
 
function onAdd() {
    var section = document.getElementById("Section");
    let title = document.getElementById("enterColor");
    let color = document.getElementById("colorPick");
    let newColor;
    if(title.value.length === 0) {
        newColor = new color('black','#000000')
    }else {
        newColor = new Color(title.value,color.value)
    }
    colors.push(newColor);
    section.innerHTML = "";
    renderAllColors(colors);
}

