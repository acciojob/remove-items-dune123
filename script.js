//your JS code here. If required.


function selectColor(){
    const colorSelect=document.getElementById('colorSelect')

    const selectedOption=colorSelect.options[colorSelect.selectedIndex]

    const selectedColor=selectedOption.value;

    colorSelect.remove(colorSelect.selectedIndex);
}