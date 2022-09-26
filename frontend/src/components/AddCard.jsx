export default(props) => {

    const hideForm = function (event, id) {
        const form = document.getElementById(`${id}`); 
        if(form) {
            form.style.display = "none";
        }
    }

    function submitForm() {
        const text = document.getElementsByName(`${props.idList}`)[0].value
        
        text ? createCard(title) : false;
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