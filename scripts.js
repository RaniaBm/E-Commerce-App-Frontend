

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

// Email verification JS Script

function EmailformValidation() {
    const code = document.forms["EmailVerificationForm"]["code"].value;
    counter = 1;
    if (code != "") {
        alert("nodemailer, code here if === verified. Uzman work on it plz")
        return counter === 1;
    }
    else {
        counter--;
        alert("Please Enter Verification Code That We Sent In Order To Activate Your Account.");
    }

}

function showVerification() {

    if (EmailformValidation()) {

        alert('Verified Successfully! You are registered.')
        window.location.href = 'home.html';
    }
    // admin = 0;
    // if (EmailformValidation()) {
    //     alert('Verified Successfully! You are registered.')
    //     if (admin)  // admin = 1 ( is admin )
    //         window.location.href = 'adminhome.html';
    //     else {   // admin = 0 ( is user )

    //     }
    // }
}

// Ended Email verification JS Script


// Login JS Script


function loginformValidation() {
    const userEmail = document.forms["loginForm"]["userEmail"].value;
    const myPassword = document.forms["loginForm"]["userPassword"].value;

    if (userEmail != "" && myPassword != "") {
        alert("check from the database tht the user or admin exist or not ! if isadmin goto adminhome.html else goto home.html  Uzman work on it plz")
        return 1;
    }
    alert("Please Enter all the fields");
    return 0
}

function showloginsuccess() {
    if (loginformValidation()) {
        const adminloggedin = 0 // 0 is user by default 
        
        if (adminloggedin) {    //  1 ( is admin )
            alert('Admin Logged In Successfully! Uzman check code ')
            window.location.href = 'adminhome.html';
        }
        else {   //  0 ( is user )
            alert('User Logged In Successfully!  Uzman check code ')
            window.location.href = 'home.html';
        }
    }
}

// Ended Login JS Script
