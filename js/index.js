$(document).ready(() => {
    $('#generateLotery').click(() => {
        fetch('http://soluciones.cotrafasocial.com.co:3000/lottery/generateLottery')
            .then(response => response.json())
            .then(data => {
                // Aquí puedes manejar los datos de respuesta, si es necesario.
                alert(data.message);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    });
});
