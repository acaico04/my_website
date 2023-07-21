/*Stylesheet by A.Caico, 2023*/
//click listener with anonymous handler function
$('table').on('click', function(){
    alert('Madison Rocks! Go Badgers!');
});

//add the event listener
$('table').on('click');

//remove the event listener
$('table').off('click');