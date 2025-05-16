import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setStatus("submitting");
    
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    
    // Add form name for Netlify
    formData.append('form-name', 'contact');
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section className="contact-section bg-light py-5 border-bottom" id="contact">
      <div className="container">
        <div className="row g-4 justify-content-center align-items-stretch">
          {/* Contact Form */}
          <div className="col-12 col-lg-6 d-flex flex-column">
            <h2 className="display-5 fw-bold mb-3 text-center">Contact Us</h2>
            <p className="text-center mb-4">
              Have a question or want to get started? Fill out the form below and we'll get back to you soon!
            </p>
            
            {status === "success" && (
              <div className="alert alert-success text-center" role="alert">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-danger text-center" role="alert">
                There was an error sending your message. Please try again later.
              </div>
            )}

            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="p-4 bg-white rounded shadow-sm" 
              noValidate
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control${errors.name ? " is-invalid" : ""}`}
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className={`form-control${errors.email ? " is-invalid" : ""}`}
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label fw-semibold">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  className={`form-control${errors.message ? " is-invalid" : ""}`}
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                />
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
              <div className="d-grid">
                <button 
                  type="submit" 
                  className="btn theme-bg-blue btn-lg text-light"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
          {/* Map Section */}
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center" id="location">
            <div
              className="map-container w-100 h-100"
              style={{ minHeight: 320, height: "320px", borderRadius: 8, overflow: "hidden" }}
            >
              <iframe
                title="Muteki Kyokushin Dojo Location"
                src="https://www.google.com/maps?q=Village+Gate+Square,+274+N+Goodman+St+Unit+D240,+Rochester,+NY+14607&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 8, height: "100%", width: "100%" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
