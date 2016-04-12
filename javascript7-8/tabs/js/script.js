$(function () {

    var tabContainers = $('div.container > div'); 
    tabContainers.hide().filter(':first').show(); 
   
    $('div.container ul.tabs a').click(function () {

        tabContainers.hide(); 
        tabContainers.filter(this.hash).show(); 

        $('div.conteiner ul.tabs a').removeClass('selected'); 
        $(this).addClass('selected');
        return false;
    })
    .filter(':first').click();
});
