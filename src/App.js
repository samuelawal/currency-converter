import DataWrapper from "./components/DataWrapper";
import AppContext from "./context";
import  Root  from "./components/Root";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <DataWrapper render={contextData => (
        <AppContext.Provider value={contextData}>
          <Root/>
        </AppContext.Provider>
       )}/>
      </header>
    </div>
  );
}

export default App;
