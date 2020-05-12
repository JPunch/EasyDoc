var buttons = document.getElementsByClassName("placeholder");
var i;

for (i=0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", toggleActive);
}

function toggleActive()
{
    contents = childWithClass("function-retract")

    if(contents)
    {
        contents.classList.replace("function-retract", "function-active")
    }
    else 
    {
        contents.classList.replace("function-active", "function-retract")
    }
}

function childWithClass(className)
{
    var contents = null;
    for(var child in this.children) 
    {
        if(child.classList.contains("function-retract"))
        {
            return child
        }
    }
}