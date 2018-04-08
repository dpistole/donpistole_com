import React from 'react';
import HeadShot from 'components/HeadShot';

function WelcomePanel() {
    return <div className="welcome-panel">
        <div className="message">
            <p>Welcome to my site.</p>
        </div>
        <div className="image">
            <HeadShot />
        </div>
    </div>;
}

export default WelcomePanel;