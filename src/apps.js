
$(function(){

    MenuIcon.init();
    ResultPopup.init();

    // $('input').focus((e) => {
    //     /**
    //      * 
    //      */
    //     MenuIcon.init(e.target);
    //     MenuIcon.show({
    //         top: '100px',
    //         left: '300px'
    //     })
    // })
    // $('textarea').focus((e) => {
    //     /**
    //      * 
    //      */
    //     MenuIcon.init(e.target);
    //     MenuIcon.show({
    //         top: '100px',
    //         left: '300px'
    //     })
    // })


    $(document).bind('mouseup', function(e){
        /**
         * 
         */
        MenuIcon.hide();

        var text_selected = getSelectedText();
        if (text_selected) {
            MenuIcon.init(null, text_selected);
            MenuIcon.show({
                top: `${e.pageY}px`,
                left: `${e.pageX}px`
            });
        }
        // $(document).unbind('mouseup');

        // closeMenu();
        // var text_selected;
        
        // if (window.getSelection) {
        //     text_selected = window.getSelection().toString();
        // } else if (document.selection) {
        //     text_selected = document.selection.createRange().toString();
        // }

        // if (text_selected && text_selected !== '') {
        //     console.log(`Text was selected at ${e.pageX}:${e.pageY}:`, text_selected);
        //     showMenu(text_selected, {top: e.clientY, left: e.clientX});
        // }
    });
});
