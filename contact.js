const element = document.querySelector('form');
element.addEventListener('submit', event => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    var object = {};
    formData.forEach(function (value, key) {
        object[key] = value;
    });
    var json = JSON.stringify(object);
    // actual logic, e.g. validate the form
    fetch('https://missioncamp-contact.jmrtn.dev', {
        method: 'POST',
        body: json,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error();
            }
            let msg = document.createElement("p");
            msg.className = "text-center";
            msg.innerText = "Message successfully submitted.";
            let parent = event.target.parentElement;
            parent.innerHTML = "";
            parent.appendChild(msg);
        })
        .catch((reason) => {
            let msg = document.createElement("p");
            msg.className = "text-center text-danger";
            msg.innerText = "An error has occured.";
            let parent = event.target.parentElement;
            parent.innerHTML = "";
            parent.appendChild(msg);
        });
});