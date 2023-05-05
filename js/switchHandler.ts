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
    constructor() {

    }
    
    switchClicked(e) {
        switch (e.target.id) {
            case "switch1":
                this.switchStates.switch1 = !this.switchStates.switch1;
            case "switch2":
                this.switchStates.switch2 = !this.switchStates.switch2;
        }
        console.log(this.switchStates)
        if (e.target.src.includes("switch-on")) {
            e.target.src = "icons/switch-off.png"
        } else {
            e.target.src = "icons/switch-on.png"
        }
    }   
}