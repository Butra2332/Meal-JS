function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = "";
}

function openModal (modalSelector, modalTimer) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = "hidden";
    if (modalTimer) {
        clearInterval(modalTimer); 
    }
}


function modals(triggerSelector, modalSelector, modalTimer) {

    const open = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);


    open.forEach(btn => {
        btn.addEventListener('click', ()=> openModal(modalSelector, modalTimer));
    });

    


    modal.addEventListener ('click', (e)=> {
        if(e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener ('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    }); 


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimer);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll); 
}


export default modals;
export {closeModal};
export {openModal};