var app = {

    initialize: function() {
        window.speechSynthesis.onvoiceschanged = function (e) {
            view.action.loadVoices();
        };
        view.receivedEvent();
        this.receivedEvent();
    },

    receivedEvent: function(){
        
        $('body').show().css({'opacity': '1'});

    }

};