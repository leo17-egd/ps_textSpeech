var voiceOptions = document.getElementById('voiceOptions'), volumeSlider = document.getElementById('volumeSlider'), rateSlider = document.getElementById('rateSlider'), pitchSlider = document.getElementById('pitchSlider'), myText = document.getElementById('myText'), voiceMap = [], saveVoices = 0;

var view = {

    receivedEvent: function(){
        
        $(".button").on("click", function(){
            view.action.speak();
        });

    },

    action: action = {

        loadVoices: function (){
            
            if(saveVoices == 0){
                var voices = speechSynthesis.getVoices();
                for (var i = 0; i < voices.length; i++) {
                    var voice = voices[i];
                    var option = document.createElement('option');
                    option.value = voice.name;
                    option.innerHTML = voice.name;
                        voiceOptions.appendChild(option);
                    voiceMap[voice.name] = voice;
                }
                saveVoices = 1;
            }
        },

        speak: function (){
            var msg = new SpeechSynthesisUtterance();
            msg.volume = volumeSlider.value;
            msg.voice = voiceMap[voiceOptions.value];
            msg.rate = rateSlider.value;
            msg.pitch = pitchSlider.value;
            msg .text = myText.value;
            window.speechSynthesis.speak(msg);
        },

        checkCompatibilty: function(){
            if (('speechSynthsis' in windows)) {
                alert('Your browser is not supported. If Google Chrome, place upgrade!!');
            }
        }

    }

};

$.getScript("js/app/all.js", function(){
    app.initialize();
});