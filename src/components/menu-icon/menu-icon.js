var MenuIcon = {
    template: `<div class='xth-menu-icon'></div>`,
    $el: null,
    _position: null,
    _input: null,
    _text: null,
    // _isShow: false,
    init: function (input, text) {
        this._input = input;
        this._text = text;
        if (this.$el) {
            return;
        }
        
        this.$el = $(this.template);
        this.$el.css({"background": `url('${chrome.runtime.getURL('img/xth-icon-32.png')}')`})
        this.$el.click(() => {
            TextToolsMenu.init(this._input, this._text);
            TextToolsMenu.show({...this._position});
            this.hide();
        });

        $(document.body).append(this.$el);
    },
    show: function (position) {
        this._position = position;
        this.$el.css({...position});
        // this._isShow = true;
        this.$el.show();
    },
    hide: function () {
        // this._isShow = false;
        this.$el.hide();
    },
    isShow: function() {
        return this.$el.is(":visible");
    }
}
