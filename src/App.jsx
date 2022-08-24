import Nav from "../components/Nav";
import Journal from "../components/Journal";
import data from "../data";

function App() {
  const dataJSX = data.map((item) => <Journal key={item.id} item={item} />);
  console.log(dataJSX);
  return (
    <div className="app">
      <Nav />
      <div className="journal-container">{dataJSX}</div>
    </div>
  );
}

export default App;
