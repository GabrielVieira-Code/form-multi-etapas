import {Container  } from "../src/App.stiled";
import { Router } from "../src/Router";
import {  FormProvider} from "./contexts/formContext";
const  App =()=> {
  return (
  <FormProvider>

    <Router></Router>
  </FormProvider>
  );
}

export default App;
