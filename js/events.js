function forwardClick() {
    $("#forward").click(function () {
        if ((angle.current < angle.maximum) && (angle.current >= angle.minimum)) {
            $("#frontBar, #sideBar").css("-webkit-transform", "rotateX(" + angle.current + "deg)")
            angle.current += interval;
        }
    })
}

function reverseClick() {
    $("#reverse").click(function () {
        if (angle.current >= angle.initialize) {
            angle.current -= interval;
            $("#frontBar, #sideBar").css("-webkit-transform", "rotateX(" + angle.current + "deg)")
        }
    })

}

function dragSpecs() {
    $("#specs").draggable();

}