document.getElementById('contact').innerHTML=`
     <h3 id="title">Contact</h3>
        <section id="contactBox">
            <div id="mail">
                <p>E-mail: yoandiny14@gmail.com</p>
                <p></p>
                <form id="mail" action="mailto:yoandiny14@gmail.com" method="post">
                    Name:  <br>
                    <input type="text" name="Name" id="Name" required><br><br>
                    E-mail:  <br>
                    <input type="email" name="mail" id="mail" required><br><br>
                    Message: <br>
                    <input type="text" name="message" id="message" size="30" required><br><br>
                    <input type="submit" value="Submit">
                    <input type="reset" value="Reset">
    
                    
                </form>
            </div>
            <div id="socialMedia">
                <i id="footerIcon" class='bx bxl-facebook-circle'></i><a style="color: black;" href="https://www.facebook.com/yoan.diny.9" target="_blank">Yoan Diny</a><br>
                <i id="footerIcon" class='bx bxl-linkedin-square'></i><a style="color: black;" href="www.linkedin.com/in/YoanDiny" target="_blank">Diny Fondàna Yoan</a><br>
                <i id="footerIcon" class='bx bxl-github' ></i><a style="color: black;" href="https://github.com/yoandiny" target="_blank">Yoan Diny</a>
            </div>

            <div id="Phone">
                <i id="footerIcon" class='bx bxs-phone' ></i><a style="color: orange;" href="tel:+261327656948">+261 32 76 569 48</a><br>
                <i id="footerIcon" class='bx bxs-phone' ></i><a style="color: green;" href="tel:+261344476969">+261 34 44 769 69</a>
            </div>
        </section>
       
        <div id="copy">
            <p><b><span>&copy;</span></b> 2024 - Diny Fondàna Yoan</p>
        </div>
`;