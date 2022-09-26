import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from "axios"

export default(props) => {

    

    const hideForm = function (event, id) {
        const form = document.getElementById(`${id}`); 
        if(form) {
            form.style.display = "none";
        }
    }

    function successAlert(message) {
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
            icon: 'success',
            title: `<p class="popup-text">${message}</p>`
          })
    }

    function errorAlert(message) {
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
            title: `<p class="popup-text">${message}</p>`
          })
    }

    function submitForm() {
        
        const title = document.getElementById(`text-area-${props.idList}`).value

        const createCard = function(title) {
            const createCardURL = `https://api.trello.com/1/cards?idList=${props.idList}&key=be458debc48b5548caf09c1df8b2db24&token=6c2b1c972c3aa9be6bf15d9183a32aac0ef736156c5c17320cde6472095e30fb`;

                axios.post(createCardURL, {
                    name: title
                }).then(response => {
                    successAlert("Success. Refresh page to see changes.")
                    hideForm
                }).catch(error => {
                    errorAlert(error)
                } )
        }

        title ? createCard(title) : errorAlert("Please provide a title for the card.");

    }

    return (
        <>
            <textarea id={`text-area-${props.idList}`} cols="30" rows="2" placeholder={`Enter a title for this card...`} autoFocus></textarea>
            <div className="form--actions">
                <div className="card--btn" onClick={submitForm}>Add card</div>
                <img src="/icons/x.svg" className="close-img-btn" onClick={event => hideForm(event, props.idList)} />
            </div>
        </>
    )
}