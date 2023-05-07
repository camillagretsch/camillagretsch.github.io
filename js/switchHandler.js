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
}

let handler = new SwitchHandler();