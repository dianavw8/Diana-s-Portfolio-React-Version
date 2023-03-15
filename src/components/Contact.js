function Contact() {
    return (
    <div id="portfolio">
      <div className="Contact" >
        <h2>Contact</h2>
        <div class="card">
            <form class="form contact-form">
        <div class="form-group">
            <label for="name">Name:</label>
            <textarea className="form-input form-control" id="name" rows="1"></textarea>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <textarea className="form-input form-control" id="email" rows="1"></textarea>
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea className="form-input form-control" id="message" rows="5"></textarea>
        </div>

        <div class="form-group">
            <button class="btn btn-primary" type="submit">Submit</button>
            {/* <a href="/login" id="login" class="right-choice">Login Instead</a> */}
        </div>
            </form>
        </div>
      </div>
    </div>
    );
  }
  
  export default Contact;