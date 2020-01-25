import React, {useContext} from 'react';
import LanguageContext, {LanguageContextProvider} from "./contexts/LanguageContext"
import {SUPPORTED_LANGUAGES} from "./content"

import Component1 from "./components/Component1"
import Component2 from "./components/Component2"
import Header from "./components/Header.component"
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Header />
        <Component1 />
        <Component2 />
      </LanguageContextProvider>    
    </div>
  );
}

const Test = () => {
  const {languageText: {test}, changeLanguage} = useContext(LanguageContext)
console.log(test.headline)
  return (
    <div>
      <h1>{test.headline}</h1>
      <p>{test.paragraph}</p>
      <button onClick={() => changeLanguage(SUPPORTED_LANGUAGES.german.shortcode)}>{test.buttonText}</button>
    </div>
  )
}

export default App;
