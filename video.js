const controlsVideo = {
    buttonMute: document.querySelector(".js-sound"),
    muted: true,

    toggleIcon() {
        if(this.muted) {
            this.buttonMute.src = "./assets/mute.svg";
            
        } else {
            this.buttonMute.src = "./assets/hight.svg";
        }

        this.buttonMute.classList.toggle("is-high");

    },

    isMuted() {
        this.muted = !this.muted;
        this.toggleIcon();
        return this.muted;
    },
}