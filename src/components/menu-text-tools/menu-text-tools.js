var TextToolsMenu = {
    template: `
        <div class="xth-menu-text-tools">
            <h2>Please choose a option</h2>
            <ul>
                <li class="xth-text-generate">Generate</li>
                <li class="xth-text-summary">Summary</li>
                <li class="xth-text-parapharase">Parapharase & Rewrite</li>
                <li class="xth-text-count-words">Count Words</li>
            </ul>
            <button class="xth-popup-close">CLOSE</button>
        </div>
        `,
    $el: null,
    _input: null,
    _text: null,
    _position: null,
    init: function (input, text) {
        this._input = input;
        this._text = text;
        if (this.$el) {
            return;
        }
        this.$el = $(this.template);
        $(document.body).append(this.$el);

        this.$el.find('.xth-popup-close').click(() => this.hide());

        this.$el.find('.xth-text-summary').click(() =>  this.summary_text());

        this.$el.find('.xth-text-generate').click(() => this.generate_text());
    },
    show: function (position) {
        this._position = position;
        this.$el.css({...position});
        this.$el.show();
    },
    hide: function () {
        this.$el.hide();
    },
    generate_text: function () {
        /**
         * Generate text and show on result popup
         */
        if (this._input) {
            var requirement = this._input.innerText;
            generateText(requirement).then((result) => {
                this.hide();
                ResultPopup.show(JSON.parse(result).text);
            });
        }
    },
    summary_text: function () {
        /**
         * Summary selected text and show on result popup
         */
        if (this._text) {
            summaryText(this._text).then((result) => {
                this.hide();
                ResultPopup.show(JSON.parse(result).summary_text);
            });
        }
    }
}
