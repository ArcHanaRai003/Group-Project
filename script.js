let attendeesCount = 0;

function submitRSVP() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendees = parseInt(document.getElementById('attendees').value);

    if (name && email && attendees) {
        attendeesCount += attendees;
        updateAttendeesCount();
        clearForm();
    } else {
        alert('Please fill in all fields.');
    }
}

function updateAttendeesCount() {
    const countElement = document.getElementById('count');
    countElement.innerText = attendeesCount;
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('attendees').value = '';
}
document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
            },
            size: {
                value: 5,
            },
            move: {
                direction: 'bottom',
                out_mode: 'out',
                speed: 2,
            },
            line_linked: {
                enable: false,
            },

        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse',
                },
            },
        },
    });
});

