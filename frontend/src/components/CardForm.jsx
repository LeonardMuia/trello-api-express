export default() => {
    return (
        <>
            <textarea name="" id="" cols="30" rows="3" placeholder={`Enter a title for this card...`} autoFocus></textarea>
            <div className="form--actions">
                <div className="card--btn">Add card</div>
                <img src="/icons/x.svg" className="close-img-btn" />
            </div>
        </>
    )
}