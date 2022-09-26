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

                // RestURL https://api.trello.com/1/cards?idList=${idList}&key=${apiKey}&token=${token}

                /*
                * Try making a direct post request to the url, passing the name parameter
                * Test in case you're having issues with CORS
                * Pass your API variables directly and replace the fetch url with API's url
                */

                axios.post("/create-card", {
                    name: title
                }).then(function(response){
                    if(response.success) {
                        successAlert("Success. Refresh page to see changes.")
                        hideForm
                    }
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