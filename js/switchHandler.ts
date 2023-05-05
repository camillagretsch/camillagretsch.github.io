class SwitchHandler {

    private switchStates = {
        "switch1": false,
        "switch2": false,
        "switch3": false,
        "switch4": false,
        "switch5": false,
        "switch6": false,
        "switch7": false
    }

    constructor() {

    }
    
    switchClicked(e) {
        if (e.target.src.includes("switch-on")) {
            e.target.src = "icons/switch-off.png";
        } else {
            e.target.src = "icons/switch-on.png";
        }

        switch (e.target.id) {
            case "switch1":
                this.switchStates.switch1 = !this.switchStates.switch1;
            case "switch2":
                this.switchStates.switch2 = !this.switchStates.switch2;
            case "switch3":
                this.switchStates.switch3 = !this.switchStates.switch3;
            case "switch4":
                this.switchStates.switch4 = !this.switchStates.switch4;
            case "switch5":
                this.switchStates.switch5 = !this.switchStates.switch5;
            case "switch6":
                this.switchStates.switch6 = !this.switchStates.switch6;
            case "switch7":
                this.switchStates.switch7 = !this.switchStates.switch7;
        }
    }   
}

let handler = new SwitchHandler()