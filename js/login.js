function submitform(event) {
    event.preventDefault()
 
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)

    return false;
}