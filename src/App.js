//compoents
import Landing from './components/Landing';

//libraries
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="flex justify-center items-center mt-10">
      <Landing />

      <div>
        <div className="fixed bottom-5 right-5">
          <ScrollToTop smooth className="flex justify-center items-center" />
        </div>
      </div>
    </div>
  );
}

export default App;
