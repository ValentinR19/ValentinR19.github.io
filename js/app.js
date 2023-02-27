const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_drubxj4';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                Swal.fire(
                    'Mensaje Enviado',
                    'Mensaje enviado con exito!',
                    'success'
                  )
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    });