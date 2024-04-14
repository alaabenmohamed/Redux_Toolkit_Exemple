import { Provider } from "react-redux";
import Header from "./Header";
import HeroPage from "./HeroPage";
import { persistor, store } from "./store/Store";
import { PersistGate } from "redux-persist/integration/react";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Header />
          <HeroPage />
        </div>
      </PersistGate>
    </Provider>
  );
}
