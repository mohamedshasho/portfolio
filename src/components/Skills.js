import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      
      // Use categorized skills if available, otherwise fall back to icons
      const categories = this.props.sharedSkills.categories;
      const icons = this.props.sharedSkills.icons;
      
      if (categories && categories.length > 0) {
        // Render categorized skills
        var skillsContent = categories.map((category, catIndex) => (
          <div key={catIndex} style={{ marginBottom: '3rem' }}>
            <h3 style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.8rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem'
            }}>
              <i className={category.icon} style={{ color: 'var(--accent-cyan)' }}></i>
              {category.name}
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              {category.skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="skills-tile"
                  style={{
                    position: 'relative',
                    cursor: 'default'
                  }}
                  title={`${skill.expertise} - ${skill.level}%`}
                >
                  <i className={skill.class} style={{ fontSize: "220%", color: 'white' }}>
                    <p
                      className="text-center"
                      style={{ fontSize: "30%", marginTop: "4px", color: 'rgba(255, 255, 255, 0.8)' }}
                    >
                      {skill.name}
                    </p>
                  </i>
                  {skill.expertise === 'Expert' && (
                    <span style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      background: 'linear-gradient(135deg, #00D9FF, #00f5a0)',
                      color: '#0f0c29',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      padding: '2px 6px',
                      borderRadius: '10px',
                    }}>
                      Expert
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ));
      } else {
        // Fall back to flat icon list
        var skillsContent = (
          <ul className="list-inline mx-auto skill-icon">
            {icons.map((skill, i) => (
              <li className="list-inline-item mx-3" key={i}>
                <span>
                  <div className="text-center skills-tile">
                    <i className={skill.class} style={{ fontSize: "220%" }}>
                      <p
                        className="text-center"
                        style={{ fontSize: "30%", marginTop: "4px" }}
                      >
                        {skill.name}
                      </p>
                    </i>
                  </div>
                </span>
              </li>
            ))}
          </ul>
        );
      }
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-10 mx-auto text-center">
            {skillsContent}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
