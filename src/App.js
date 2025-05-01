import './styles/App.css';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="flex-center gap-sm ">
      <Button variant="easy" message="Easy"/>
      <Button variant="medium" message="Medium"/>
      <Button variant="hard" message="Hard"/>
    </div>
  );
}

export default App;
