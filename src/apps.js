
$(function(){

    MenuIcon.init();
    ResultPopup.init();

    $('input').focus((e) => {
        /**
         * 
         */
        console.log('forcus input');
        MenuIcon.init(e.target);
        var {x, y, width, height} = e.target.getClientRects()[0]
        MenuIcon.show({
            top: `${y + height}px`,
            left: `${x + width}px`
        })
    });

    $('textarea').focus((e) => {
        /**
         * 
         */
        console.log('forcus textarea');
        MenuIcon.init(e.target);
        var {x, y, width, height} = e.target.getClientRects()[0]
        MenuIcon.show({
            top: `${y + height}px`,
            left: `${x + width}px`
        })
    })


    $(document).bind('mouseup', function(e){
        /**
         * 
         */
        if (MenuIcon.isShow() && e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA' && e.target.className != 'xth-menu-icon'){
            MenuIcon.hide();
        }

        var text_selected = getSelectedText();
        if (text_selected) {
            MenuIcon.init(null, text_selected);
            MenuIcon.show({
                top: `${e.pageY}px`,
                left: `${e.pageX}px`
            });
        }
    });
});
