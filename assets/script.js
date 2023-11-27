
var modal = document.getElementById('myModal');
var appointmentForm = document.getElementById('appointmentForm');


function openModal() {
    modal.style.display = 'block';
}


function closeModal() {
    modal.style.display = 'none';
    
    appointmentForm.reset();
}


function submitForm() {
    
    var fullName = appointmentForm.fullName.value;
    var email = appointmentForm.email.value;
    var phoneNumber = appointmentForm.phoneNumber.value;
    var appointmentDate = appointmentForm.appointmentDate.value;
    var appointmentTime = appointmentForm.appointmentTime.value;

    var confirmationMessage = `
    Nome: ${fullName}
    E-mail: ${email}
    Telefone: ${phoneNumber}
    Data do Agendamento: ${appointmentDate}
    Horário do Agendamento: ${appointmentTime}
    `;

    alert('Agendamento confirmado:\n' + confirmationMessage);
    closeModal();
}
