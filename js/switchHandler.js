class SwitchHandler {

    switchStates = {
        "switch1": false,
        "switch2": false,
        "switch3": false,
        "switch4": false,
        "switch5": false,
        "switch6": false,
        "switch7": false
    }
    bombeImage

    constructor() {
        this.bombeImage = document.getElementById("bombe");
        this.countdown( "countdown", 0, 5 );
    }    

    switchClicked(e) {
        if (e.target.src.includes("switch-off")) {
            e.target.src = "icons/switch-on.png"
        } else {
            e.target.src = "icons/switch-off.png"
        }

        switch (e.target.id) {
            case "switch1":
                this.switchStates.switch1 = !this.switchStates.switch1;
                break;
            case "switch2":
                this.switchStates.switch2 = !this.switchStates.switch2;
                break; 
            case "switch3":
                this.switchStates.switch3 = !this.switchStates.switch3;
                break; 
            case "switch4":
                this.switchStates.switch4 = !this.switchStates.switch4;
                break; 
            case "switch5":
                this.switchStates.switch5 = !this.switchStates.switch5;
                break; 
            case "switch6":
                this.switchStates.switch6 = !this.switchStates.switch6;
                break; 
            case "switch7":
                this.switchStates.switch7 = !this.switchStates.switch7;
                break; 
        }
        this.checkBombState()
    }
    
    checkBombState() {
        if (this.switchStates.switch1 == true &&
            this.switchStates.switch2 == false &&
            this.switchStates.switch3 == true &&
            this.switchStates.switch4 == false &&
            this.switchStates.switch5 == true &&
            this.switchStates.switch6 == false &&
            this.switchStates.switch7 == false) {
                this.bombeImage.src = "icons/bombe2.png"
        } else {
            this.bombeImage.src = "icons/bombe.png"
        }
    }

    countdown( elementName, minutes, seconds ) {
        var element, endTime, hours, mins, msLeft, time;
        
        function twoDigits( n ) {
            return (n <= 9 ? "0" + n : n);
        }
        
        function updateTimer() {
            msLeft = endTime - (+new Date);
            if ( msLeft < 1000 ) {
                // element.innerHTML = "Time is up!";
                document.getElementById("bombe").src = "icons/explode.png"
            } else {
                time = new Date( msLeft );
                hours = time.getUTCHours();
                mins = time.getUTCMinutes();
                element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
                setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
            }
        }

        element = document.getElementById( elementName );
        endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
        updateTimer();
    }
}

let handler = new SwitchHandler();