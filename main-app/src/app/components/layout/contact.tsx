import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section className="section full-height" id="contact">
      <div className="container full-height-container">
        <div className="columns">
          <div className="column is-6">
            <h2 className="title is-2">Contact Us</h2>
            <p className="subtitle is-5 mb-6">
              Get in touch with us for appointments, inquiries, or any questions you may have.
            </p>

            <div className="content">
              <div className="is-flex is-align-items-center mb-4">
                <MapPin className="contact-icon" />
                <span>123 Wellness Street, Health District, City</span>
              </div>
              <div className="is-flex is-align-items-center mb-4">
                <Phone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="is-flex is-align-items-center mb-4">
                <Mail className="contact-icon" />
                <span>contact@equilibrium.com</span>
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="box">
              <form>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Your name" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="email" placeholder="Your email" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="Your message"></textarea>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button className="button is-primary is-fullwidth">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}