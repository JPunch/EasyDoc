function toggleActive(card)
{
    contents = card.querySelector('.function-retract')

    if(contents)
    {
        contents.classList = "function-active"
    }
    else
    {
        contents = card.querySelector('.function-active')
        contents.classList = "function-retract"
    }
    console.log(contents.classList)
}