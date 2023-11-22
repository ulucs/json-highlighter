import "./App.css";
import { JsonHighlighter } from "./components/JsonHighlighter";

const demoJson = `{
  "date": "2021-10-27T07:49:14.896Z",
  "hasError": false,
  "fields": [
      {
          "id": "4c212130",
          "prop": "iban",
          "value": "DE81200505501265402568",
          "hasError": false
} ]
}`;

const bigDemoJson = `{
  "nested": {
    "date": "2021-10-27T07:49:14.896Z",
    "hasError": false,
    "fields": [
        {
            "id": "4c212130",
            "prop": "iban",
            "value": "DE81200505501265402568",
            "hasError": false
        },
        {
            "id": "4c212130",
            "prop": "iban",
            "value": "DE81200505501265402568",
            "hasError": false
        },
        {
            "id": "4c212130",
            "prop": "iban",
            "value": "DE81200505501265402568",
            "hasError": false
        },
        {
            "id": "4c212130",
            "prop": "iban",
            "value": "DE81200505501265402568",
            "hasError": false
        },
        {
            "id": "4c212130",
            "prop": "iban",
            "value": "DE81200505501265402568",
            "hasError": false
        },
        {
            "id": "4c212130",
            "prop": "iban",
            "value": "DE81200505501265402568",
            "hasError": false
        },
        {
            "id": "4c212130",
            "prop": "iban",
            "value": "DE81200505501265402568",
            "hasError": false
        },
        {
            "id": "4c212130",
            "prop": "iban",
            "value": "DE81200505501265402568",
            "hasError": false
        }
    ]
  },
  "date": "2021-10-27T07:49:14.896Z",
  "hasError": false,
  "fields": [
      {
          "id": "4c212130",
          "prop": "iban",
          "value": "DE81200505501265402568",
          "hasError": false
      },
      {
          "id": "4c212130",
          "prop": "iban",
          "value": "DE81200505501265402568",
          "hasError": false
      },
      {
          "id": "4c212130",
          "prop": "iban",
          "value": "DE81200505501265402568",
          "hasError": false
      },
      {
          "id": "4c212130",
          "prop": "iban",
          "value": "DE81200505501265402568",
          "hasError": false
      },
      {
          "id": "4c212130",
          "prop": "iban",
          "value": "DE81200505501265402568",
          "hasError": false
      },
      {
          "id": "4c212130",
          "prop": "iban",
          "value": "DE81200505501265402568",
          "hasError": false
      },
      {
          "id": "4c212130",
          "prop": "iban",
          "value": "DE81200505501265402568",
          "hasError": false
      },
      {
          "id": "4c212130",
          "prop": "iban",
          "value": "DE81200505501265402568",
          "hasError": false
      }
  ]
}`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JsonHighlighter json={bigDemoJson} />
      </header>
    </div>
  );
}

export default App;
