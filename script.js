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


    particlesJS('start', {
        particles: {
          number: {
            value: 100,
          },
          size: {
            value: 3,
          },
          move: {
            speed: 1,
          },
          shape: {
            type: [ "star"], // Plusieurs formes aléatoires
          },
          opacity: {
            value: 0.5, // Opacité de base
            anim: {
              enable: true, // Active l'animation de l'opacité
              speed: 1, // Vitesse de l'animation
              opacity_min: 0.1, // Opacité minimale durant l'animation
              sync: false, // Si vous voulez que l'animation soit synchronisée entre toutes les particules
            },
        }
        }
      });


    // document.querySelector('#toggleButton').addEventListener('click', function(){
    //     toggleDarkMode();
    // })
})

// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
// }