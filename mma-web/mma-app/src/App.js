import React from 'react';

function Header() {
  return (
    <header>
        <div id="red-box">
            <h1>MMA</h1>
            <nav>
                <ul>
                    <li><a href="index.html">About</a></li>
                    <li><a href="fighters.html">Fighters</a></li>
                    <li><a href="events.html">Events</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;
