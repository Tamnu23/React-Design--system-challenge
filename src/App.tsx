import Button from './components/atoms/Button';

function App() {
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
      {/* Primary button */}
      <Button text="Primary" onClick={() => console.log('Primary clicked')} />

      {/* Secondary button */}
      <Button text="Secondary" variant="secondary" />

      {/* Danger button */}
      <Button text="Danger" variant="danger" />

      {/* Disabled button */}
      <Button text="Disabled" disabled />

      {/* Loading button */}
      <Button text="Loading" loading />
    </div>
  );
}

export default App;

