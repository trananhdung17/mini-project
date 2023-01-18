var TextToolsMenu = {
    template: `
        <div class="xth-menu-text-tools">
            <h2>Please choose a option</h2>
            <ul>
                <li class="xth-text-generate">Generate Text</li>
                <li class="xth-text-summary">Summary Text</li>
                <li class="xth-text-correct">Correct Text</li>
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
        
        // Events handle
        this.$el.find('.xth-popup-close').click(() => this.hide());
        this.$el.find('.xth-text-summary').click(() =>  this.summary_text());
        this.$el.find('.xth-text-generate').click(() => this.generate_text());
        this.$el.find('.xth-text-count-words').click(() => this.count_words());
        this.$el.find('.xth-text-parapharase').click(() => this.parapharase_text());
        this.$el.find('.xth-text-correct').click(() => this.correct_text());
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
            var requirement = this._input.value;
            generateText(requirement).then((result) => {
                this.hide();
                ResultPopup.show('Generation:', JSON.parse(result).generated_text);
            });
        } else {
            window.alert('Please write a requirement on input field!');
            this.hide();
        }
    },

    summary_text: function () {
        /**
         * Summary selected text and show on result popup
         */
        if (this._text) {
            summaryText(this._text).then((result) => {
                this.hide();
                ResultPopup.show('Summary:', JSON.parse(result).summary_text);
            });
        } else {
            window.alert('Please select a text!');
            this.hide();
        }
    },

    count_words: function () {
        /**
         * Conting words on selected text and show on result popup
         */
        if (this._text) {
            this.hide();
            ResultPopup.show('Word count:', countWords(this._text).toString());
        } else {
            window.alert('Please select a text!');
        }
    },

    parapharase_text: function () {
        /**
         * 
         */
        if (this._text) {
            parapharaseText(this._text).then((result) => {
                this.hide();
                ResultPopup.show('Parapharasing:', JSON.parse(result).paraphrased_text);
            });
        } else {
            window.alert('Please select a text!');
            this.hide();
        }
    },

    correct_text: function () {
        /**
         * 
         */
        if (this._text) {
            correctText(this._text).then((result) => {
                this.hide();
                ResultPopup.show('Correction:', JSON.parse(result).correction);
            });
        } else {
            window.alert('Please select a text!');
            this.hide();
        }
    }
}
