import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
export default(props) => {

    const hideForm = function (event, id) {
        const form = document.getElementById(`${id}`); 
        if(form) {
            form.style.display = "none";
        }
    }

    function errorAlert() {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: `<p class="popup-text">Please provide a title for the card.</p>`
          })
    }

    function submitForm() {
        
        const text = document.getElementsByName(`${props.idList}`).value
        
        text === "" ? createCard(title) : errorAlert();
    }

    return (
        <>
            <textarea name={`{props.idList}`} cols="30" rows="2" placeholder={`Enter a title for this card...`} autoFocus></textarea>
            <div className="form--actions">
                <div className="card--btn" onClick={submitForm}>Add card</div>
                <img src="/icons/x.svg" className="close-img-btn" onClick={event => hideForm(event, props.idList)} />
            </div>
        </>
    )
}