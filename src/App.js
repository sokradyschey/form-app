import './App.css';
// import Background from './background.png';

function App() {
  return (
    <div className='Container'>
      <div className='Callout'>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time.</p>
      </div>
      <div className='Trial'>
        <p>Try for free for 7 days</p>
      </div>
      <div className='Sign-up-form'>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
