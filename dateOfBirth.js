import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'

var dateofbirth = document.getElementById("dateOfBirthButton");

function initCalendar() {
    new AirDatepicker("dateofbirth", {
    isMobile: true,
    autoClose: true,
});;
}

dateofbirth.addEventListener("click", initCalendar, false)