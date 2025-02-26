import Landing from "./pages/Landing.jsx";
import FormProvider from "../hooks/context.jsx";

const App = () => {

  return (
   <div>
   <FormProvider>
    <Landing/>
    </FormProvider>
   </div>
  );
};

export default App;
