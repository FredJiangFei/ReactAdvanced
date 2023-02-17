import * as React from 'react';
import Globe from '../globe';
function MyGlobe() {
  const [showGlobe, setShowGlobe] = React.useState(false);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label style={{ marginBottom: '1rem' }}>
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={(e) => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <div style={{ width: 400, height: 400 }}>
        {showGlobe ? <Globe /> : null}
      </div>
    </div>
  );
}
export default MyGlobe;
