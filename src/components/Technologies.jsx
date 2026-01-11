import React, { useState, useEffect } from 'react';
import './Technologies.css';

const Technologies = () => {
  const [images, setImages] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      try {
        const bootstrapImage = await import('../assets/images/Bootstrap.png');
        const cssImage = await import('../assets/images/css.png');
        const javaImage = await import('../assets/images/java.png');
        const javascriptImage = await import('../assets/images/JavaSc.png');
        const laravelImage = await import('../assets/images/Laravel.png');
        const phpImage = await import('../assets/images/php.png');
        const sqlImage = await import('../assets/images/sql.png');
        const tailwindImage = await import('../assets/images/tailwind.png');

        setImages({
          bootstrap: bootstrapImage.default,
          css: cssImage.default,
          java: javaImage.default,
          javascript: javascriptImage.default,
          laravel: laravelImage.default,
          php: phpImage.default,
          sql: sqlImage.default,
          tailwind: tailwindImage.default
        });
      } catch (error) {
        console.error('Error loading images:', error);
        setErrors(prev => ({ ...prev, loading: error.message }));
      }
    };

    loadImages();
  }, []);

  const handleImageError = (name) => {
    console.error(`Error loading image: ${name}`);
    setErrors(prev => ({ ...prev, [name]: true }));
  };

  // Para debugging
  useEffect(() => {
    console.log('Images loaded:', images);
    console.log('Errors:', errors);
  }, [images, errors]);

  const technologies = [
    { name: 'Bootstrap', key: 'bootstrap' },
    { name: 'CSS', key: 'css' },
    { name: 'Java', key: 'java' },
    { name: 'JavaScript', key: 'javascript' },
    { name: 'Laravel', key: 'laravel' },
    { name: 'PHP', key: 'php' },
    { name: 'SQL', key: 'sql' },
    { name: 'Tailwind', key: 'tailwind' }
  ];

  return (
    <section className="technologies-section" id="technologies">
      <h2 className="section-title">Tecnologías</h2>
      {errors.loading && (
        <div style={{ color: 'red', marginBottom: '1rem' }}>
          Error cargando imágenes: {errors.loading}
        </div>
      )}
      <div className="technologies-container">
        {technologies.map((tech) => (
          <div key={tech.key} className="tech-item">
            {images[tech.key] ? (
              <img 
                src={images[tech.key]}
                alt={tech.name}
                className="tech-icon"
                onError={() => handleImageError(tech.key)}
              />
            ) : (
              <div className="tech-icon-placeholder">
                Cargando...
              </div>
            )}
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies; 