document.addEventListener('DOMContentLoaded', function(){


      const btn = document.getElementById('send');

        document.getElementById('contactForm')
        .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_bdksmub';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
            btn.value = 'Send Email';
            alert('Votre message a été envoyé. Merci !');
            }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
            });
        });
      


    window.onscroll = function () {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        var startLink = document.querySelector('.start');
        if (scrollTop > 200) {
            startLink.classList.remove('d-none');
        } else {
            startLink.classList.add('d-none');
        }
    };


    // document.querySelector('#toggleButton').addEventListener('click', function(){
    //     toggleDarkMode();
    // })
})

// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
// }