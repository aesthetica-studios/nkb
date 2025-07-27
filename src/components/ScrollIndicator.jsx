import React, { useEffect, useState } from 'react';
import './ScrollIndicator.css'; // Import its dedicated CSS file

const ScrollIndicator = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Hide the indicator if the user has scrolled down more than 50 pixels
            if (window.scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="scroll-indicator"
            // Inline style for opacity and pointerEvents to allow React to control visibility
            // The transition for opacity should be defined in your CSS file for .scroll-indicator
            style={{
                opacity: isVisible ? '1' : '0',
                pointerEvents: isVisible ? 'auto' : 'none',
            }}
        >
            {/* SVG for a simple down arrow */}
            <svg
                className="scroll-arrow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            
        </div>
    );
};

export default ScrollIndicator;
