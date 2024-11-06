// BackgroundParticles.js
import React from 'react';
import Particles from 'react-tsparticles';

const BackgroundParticles = () => {
    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: {
                        value: "#000000", // Background color
                    },
                },
                particles: {
                    number: {
                        value: 50, // Start with a smaller number of particles
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: "#ffffff", // Particle color (white)
                    },
                    shape: {
                        type: "circle", // Shape of the particles
                    },
                    size: {
                        value: 3, // Smaller size for testing
                    },
                    move: {
                        enable: true,
                        speed: 1, // Slower speed for better visibility
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                    },
                },
            }}
        />
    );
};

export default BackgroundParticles;
