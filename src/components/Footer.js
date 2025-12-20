import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <a 
            key={network.name} 
            href={network.url} 
            target="_blank" 
            rel="noopener noreferrer"
            title={network.name}
          >
            <i className={network.class}></i>
          </a>
        );
      });
    }
    
    const currentYear = new Date().getFullYear();

    return (
      <footer>
        <div className="col-md-12">
          {/* Wave SVG */}
          <svg 
            viewBox="0 0 1440 120" 
            style={{ 
              position: 'absolute', 
              top: '-119px', 
              left: 0, 
              width: '100%',
              height: '120px'
            }}
          >
            <path 
              fill="url(#gradient)" 
              fillOpacity="1" 
              d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f0c29" />
                <stop offset="50%" stopColor="#302b63" />
                <stop offset="100%" stopColor="#24243e" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* CTA Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fff 0%, #a1a1aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Let's Work Together
            </h3>
            <p style={{ 
              fontSize: '1.4rem', 
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '1.5rem'
            }}>
              Have a project in mind? Let's discuss how I can help.
            </p>
            <a 
              href="mailto:mohamedshasho1@gmail.com"
              className="cta-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 36px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '30px',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.4rem',
                fontWeight: '500',
                boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <span className="iconify" data-icon="mdi:email" data-inline="false" style={{ fontSize: '20px' }}></span>
              Get In Touch
            </a>
          </div>
          
          {/* Social Links */}
          <div className="social-links">
            {networks}
          </div>

          {/* Copyright */}
          <div style={{ 
            padding: '2rem 0 1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '1rem'
          }}>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'rgba(255, 255, 255, 0.5)',
              margin: 0 
            }}>
              © {currentYear} Mohammad Shasho. All rights reserved.
            </p>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'rgba(255, 255, 255, 0.4)',
              marginTop: '0.5rem'
            }}>
              Made with <span role="img" aria-label="heart" style={{ color: '#f5576c' }}>❤️</span> using React
            </p>
          </div>
          
          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="back-to-top"
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              color: 'white',
              fontSize: '1.8rem',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000
            }}
          >
            <span className="iconify" data-icon="mdi:arrow-up" data-inline="false"></span>
          </button>
        </div>
        
        <style>{`
          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(102, 126, 234, 0.5);
          }
          .back-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(102, 126, 234, 0.5);
          }
        `}</style>
      </footer>
    );
  }
}

export default Footer;
