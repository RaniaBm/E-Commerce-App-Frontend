

// Registeration JS Script

function formValidation() {
    const namePattern = /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{11}$/;
    const passwordPattern = /^(?=.*\d).{6,}$/;

    const userName = document.forms["registrationForm"]["userName"].value;
    const userEmail = document.forms["registrationForm"]["userEmail"].value;
    const userPhone = document.forms["registrationForm"]["userPhone"].value;
    const userPassword = document.forms["registrationForm"]["userPassword"].value;

    let counter = 0;

    if (namePattern.test(userName)) {
        console.log('Valid name');
    } else {
        console.log('Invalid name');
        counter++;
        alert("Please enter a valid name (e.g., John Smith).");
    }

    if (emailPattern.test(userEmail)) {
        console.log('Valid email');
    } else {
        console.log('Invalid email');
        counter++;
        alert("Please enter a valid email (e.g., example@example.com).");
    }

    if (phonePattern.test(userPhone)) {
        console.log('Valid phone number');
    } else {
        console.log('Invalid phone number');
        counter++;
        alert("Please enter a valid phone number (e.g., 12345678901).");
    }

    if (passwordPattern.test(userPassword)) {
        console.log('Valid password');
    } else {
        console.log('Invalid password');
        counter++;
        alert("Please enter a valid password (e.g., password123).");
    }

    return counter === 0;
}

function showSuccess() {
    if (formValidation()) {
        alert('Registered Successfully! Let Us Verify Throungh Email.')
        window.location.href = 'EmailVerification.html';
    }
}

// Ended Registeration JS Script