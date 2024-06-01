import React from 'react';

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">SD FITNESS CLUB</div>
          <ul>
            <li><a href="#home">Home</a></li>
            {/* <li><a href="#services">Services</a></li> */}
            <li><a href="#contact">Contact</a></li>
            <li>
              <a href="#loginin">LogIn</a>
              <select name="LogIn" required>
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="trainer">Trainer</option>
                <option value="customer">Customer</option>
              </select>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Gym</h1>
          <p style={{ fontStyle: 'italic' }}>"Fitness is Not a Destination, It’s a Way of Life."</p>
          <a href="#services" className="btn">Our Services</a>
        </div>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-items">
          <div className="service-item">
            <h3>Personal Training</h3>
            <p>Get personalized training programs tailored to your needs.</p>
          </div>
          <div className="service-item">
            <h3>Group Classes</h3>
            <p>Join our group classes and stay motivated with others.</p>
          </div>
          <div className="service-item">
            <h3>Nutrition Plans</h3>
            <p>Receive customized nutrition plans to complement your workout.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>What Our Clients Say....</h2>
        <div className="testimonial-items">
          <div className="testimonial-item">
            <p>"This Gym transformed my life. The trainers are amazing!"</p>
            <span>- Rahul Ananadkar</span>
          </div>
          <div className="testimonial-item">
            <p>"The group classes are so much fun and effective."</p>
            <span>- Prasad Patil</span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form action="#">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 SD FITNESS CLUB</p>
      </footer>
    </div>
  );
}
