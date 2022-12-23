var toggleModal = document.querySelectorAll(".pv-toggle-modal")

//Abrindo e fechando o modal de contato

for (i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener("click", function () {
        let overlay = document.querySelector(".pv-overlay")
        let modal = document.querySelector("#pv-modal-contato")
        let btnContact = document.querySelector("#btnContact")

        overlay.classList.toggle("pv-is-open")
        modal.classList.toggle("pv-is-open")
        modal.classList.toggle("pv-slide-top-in")
        btnContact.classList.toggle("pv-change-icon")
        btnContact.classList.toggle("pv-btn-hover")
    })
}

//animando elementos on scroll com waypoints

var myTopBar = document.querySelector(".pv-topbar");
var waypoint = new Waypoint({
    element: myTopBar,
    handler: function () {
        myTopBar.classList.toggle("pv-slide-top");
    },
    offset: '-25%'
})

