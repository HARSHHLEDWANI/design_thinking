'use client';

const CONTENT = 'Design Thinking ✦  Innovation ✦  Empathy ✦  Prototyping ✦  Research ✦  Mentorship ✦  Entrepreneurship ✦  ';

export default function Ticker() {
  return (
    <div className="ticker-wrap" aria-hidden>
      <div className="ticker-track">
        <span className="ticker-item">{CONTENT}</span>
        <span className="ticker-item">{CONTENT}</span>
        <span className="ticker-item">{CONTENT}</span>
      </div>
    </div>
  );
}
