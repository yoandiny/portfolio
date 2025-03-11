document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById('contact');
    if (footer) {
        footer.innerHTML = `
            <h3 id="title">Contact</h3>
            <section id="contactBox">
                <div id="socialMedia">
                    <i id="footerIcon" class='bx bxl-facebook-circle'></i><a style="color: black;" href="https://www.facebook.com/yoan.diny.9" target="_blank">Yoan Diny</a><br>
                    <i id="footerIcon" class='bx bxl-linkedin-square'></i><a style="color: black;" href="www.linkedin.com/in/YoanDiny" target="_blank">Diny Fondàna Yoan</a><br>
                    <i id="footerIcon" class='bx bxl-github' ></i><a style="color: black;" href="https://github.com/yoandiny" target="_blank">Yoan Diny</a>
                </div>

                <div id="phone">
                    <i id="footerIcon" class='bx bxs-phone' ></i><a style="color: orange;" href="tel:+261327656948">+261 32 76 569 48</a><br>
                    <i id="footerIcon" class='bx bxs-phone' ></i><a style="color: green;" href="tel:+261344476969">+261 34 44 769 69</a><br>
                    <i id="footerIcon" class='bx bxs-envelope'></i><a style="color: black;" href="mailto:yoandiny14@gmail.com">yoandiny14@gmail.com</a>
                </div>
            </section>
            <div id="copy">
                <p><b><span>&copy;</span></b> 2024 - Diny Fondàna Yoan</p>
            </div>
        `;
    } else {
        console.error("L'élément #contact est introuvable.");
    }
});
