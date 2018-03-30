import React from 'react';

export default ({ width = 35, height = 35, className }) => (
  <svg
    className={className}
    width={`${width}px`}
    height={`${height}px`}
    viewBox="0 0 200 200"
  >
    <path
      d="M0 100v100h200V0H0v100zm140.9-71.6c.7.9 1.1 4.2.9 8.8l-.3 7.3-27 .5c-23.2.5-27.5.8-30.6 2.3-6.4 3.1-8.3 6-8.7 13.1-.5 7.5 1.4 12.4 6.2 16.1 1.8 1.3 13.5 7 26.1 12.6 24.7 11 29.6 13.8 34.5 19.6 6.8 8.3 9.7 30.1 5.6 42.3-2.7 7.8-10.1 14.9-18.6 18-6.2 2.2-8.1 2.3-39.1 2.8-38 .5-35.9 1-35.9-9.2 0-3.9.5-6.8 1.3-7.4.8-.7 11.9-1.2 30.2-1.4 32.3-.4 35.3-.9 39.8-7.2 1.9-2.7 2.2-4.4 2.2-12.1-.1-15-2.7-17.8-24.9-27-33.6-14-41.2-18.8-46.1-29.1-4.5-9.4-4.4-24.5.2-34.2 2.3-4.8 8.3-10.7 13-12.8 7.8-3.5 15.3-4.2 42.9-4.3 22.2-.1 27.4.2 28.3 1.3z"
      fill="#A82022"
    />
  </svg>
);
