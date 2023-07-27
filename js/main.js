let selected    = null;
let modalTarget = null;

function init () {
    if (!selected) {
        document.getElementById('splash').style.display='none';
        document.getElementById('container').style.display = 'block';
        document.getElementById('main').style.display = '';
        let header = document.getElementById('header');
        header.style.display = 'flex';
        document.getElementById('main').style.display = '';
        document.getElementById('footer').style.display = '';
        setSelection ('default');
    }
}
function setSelection (newSelected) {
    if (newSelected != selected) {
        if (selected != null) {
            document.getElementById(selected).style.display = 'none';
        }
        selected = newSelected
        var doc = document.getElementById(selected)
        document.getElementById(selected).style.display = '';
    }
}
function showModal (target) {
    if (modalTarget != null) {
        hideModal ();
    }
    document.getElementById(target).style.display = 'block';
    modalTarget  = target;
}
function hideModal () {
    if (modalTarget != null) {
        document.getElementById(modalTarget).style.display = 'none';
        modalTarget = null;   
    }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (modalTarget != null && event.target == document.getElementById(modalTarget)) {
        hideModal ();
    }
}