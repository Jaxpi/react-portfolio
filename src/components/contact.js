const Contact = () => {
    return (
        <section class="contact-submission" id="contact">
            <h2>Contact Me</h2>
            <section id="form">
                <label for="Name">Name:</label>
                <input id="name" type="text" name="Name:" size="50" placeholder="Enter your name"></input><br></br>
                <label for="Email">Email:</label>
                <input id="email" type="email" name="Email:" size="50" placeholder="Enter your email"></input><br></br>
                <label for="Message">Message:</label>
                <input id="message" type="text" name="Message:" size="50" placeholder="Enter your message"></input>
                <br></br><button type="submit">SEND</button>
            </section>
        </section>
    );
};
  
  export default Contact;