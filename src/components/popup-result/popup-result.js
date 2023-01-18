var ResultPopup = {
    template: `
    <div class='xth-popup-result'>
        <div class="xth-close"></div>
        <h2 class="xth-title">Result:</h2>
        <div class="xth-result"></div>
    </div>`,
    $el: null,
    _target: null,
    init: function () {
        if (this.$el) {
            return;
        }

        this.$el = $(this.template);
        $(document.body).append(this.$el);

        this.$el.find('.xth-close').click((e) => {
            this.hide();
        });
    },
    show: function (title, text) {
        this.$el.find('.xth-title').html(title);
        this.$el.find('.xth-result').html(text);
        this.$el.show();
    },
    hide: function () {
        this.$el.hide();
    }
}
