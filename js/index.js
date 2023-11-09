$(document).ready(() => {
    $('#generateLotery').click(() => {
        // Deshabilitar el botón
        $('#generateLotery').prop("disabled", true);

        fetch('https://soluciones.cotrafasocial.com.co/lottery/generateLottery')
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                setTimeout(() => {
                    window.location.href = 'https://www.cotrafasocial.com/';
                }, 5000);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    });
});
