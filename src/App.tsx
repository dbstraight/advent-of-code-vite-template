import Day from "./components/Day"

function App() {
  const dayNumbers = Array.from({ length: 30 }, (_, i) => i + 1);
  return (
    <div className="max-w-prose mx-auto py-2">
      {dayNumbers.map(day =>
        <Day key={day} day={day}/>
      )}
    </div>
  )
}

export default App
