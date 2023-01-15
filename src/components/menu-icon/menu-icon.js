var MenuIcon = {
    template: `<div class='xth-menu-icon'></div>`,
    $el: null,
    _position: null,
    _input: null,
    _text: null,
    init: function (input, text) {
        this._input = input;
        this._text = text;
        if (this.$el) {
            return;
        }
        
        this.$el = $(this.template);
        this.$el.css({"background": `url('${chrome.runtime.getURL('img/xth-icon-32.png')}')`})
        this.$el.click(() => {
            TextToolsMenu.init(this._input);
            TextToolsMenu.show({...this._position});
            this.hide();
        });

        $(document.body).append(this.$el);
    },
    show: function (position) {
        this._position = position;
        // var {top, left} = position;
        this.$el.css({...position});
        this.$el.show();
    },
    hide: function () {
        this.$el.hide();
    }
}
