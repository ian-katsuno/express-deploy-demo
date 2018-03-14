console.log('this file was loaded.');

$(function(){
    // whatever i write in this function
    //  will run when the document is ready
    console.log('our document ready function ran.');
    $('.bio-content p').animate(
        {
            "margin-top": "0px",
            "font-size": "1.0em"
        },
         10000);
});