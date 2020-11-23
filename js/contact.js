var form = document.getElementById('contact-form');
form.onsubmit = function(event) {
    event.preventDefault();
    var req = new XMLHttpRequest();
    var name = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone-number").value;
    var message = document.getElementById("message").value;

    var payload = { "name": name, "email": email, "phone": phone, "message": message };
    req.open('POST', 'http://httpbin.org/post', true);
    req.setRequestHeader('Content-Type', 'application/json');
    // Async
    req.addEventListener('load', function() {
        if (req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.response);
            var response_data = JSON.parse(response.data);
            console.log(response);
            console.log(response_data);
            removeForm(form);
            addSuccessMessage(response_data);
        } else {
            console.log("Error in network request: " + req.statusText);
        }
    });
    req.send(JSON.stringify(payload));

};

function removeForm(el) {
    el.parentNode.removeChild(el);
};

function addSuccessMessage(data) {
    document.getElementById('contact-header').textContent = "Thanks for submitting! Heres what you sent over!";
    document.getElementById('success-name').textContent = "Name: " + data['name'];
    document.getElementById('success-email').textContent = "Email: " + data['email'];
    document.getElementById('success-phone').textContent = "Phone Number: " + data['phone'];
    document.getElementById('success-message').textContent = "Message: " + data['message'];
};