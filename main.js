function actualizarHora() {
    const fecha = new Date();
    let horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();

    const pHoras = document.getElementById('horas'),
          pAMPM = document.getElementById('ampm'),
          pMinutos = document.getElementById('minutos'),
          pSegundos = document.getElementById('segundos'),
          pDiaSemana = document.getElementById('diaSemana'),
          pDia = document.getElementById('dia'),
          pMes = document.getElementById('mes'),
          pYear = document.getElementById('year');

    const semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    pDiaSemana.textContent = semana[diaSemana];
    pDia.textContent = dia;
    pMes.textContent = meses[mes];
    pYear.textContent = year;

    // Formato de AM/PM
    if (horas >= 12) {
        horas = horas - 12;
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }
    if (horas == 0) {
        horas = 12;
    }
    
    // Añadir ceros a los minutos y segundos
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    pHoras.textContent = horas;
    pAMPM.textContent = ampm;
    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;

    // Alarma
    revisarAlarma(fecha);
}

// Alarma
let alarmaHora = null;
const alarmaMensaje = document.getElementById('alarmaMensaje');

document.getElementById('activarAlarma').addEventListener('click', function(){
    const inputAlarma = document.getElementById('alarmaTiempo').value;
    if (inputAlarma) {
        alarmaHora = inputAlarma;
        alarmaMensaje.textContent = 'Alarma activada para las ' + alarmaHora;
    }
});

function revisarAlarma(fecha) {
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();

    // Convertir a formato 24h para comparar
    const horaActual = `${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos : minutos}`;

    if (alarmaHora === horaActual) {
        alarmaMensaje.textContent = '¡Alarma sonando!';
        alarmaHora = null; // Resetear alarma
    }
}

// Actualizar el reloj cada segundo
setInterval(actualizarHora, 1000);