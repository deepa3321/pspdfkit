import React from 'react';
import PdfViewerComponent from './components/PdfViewerComponent';

function App() {
  // Use a W3Schools PDF document URL
  const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

  return (
    <div className="App">
      <div className="PDF-Viewer">
        <PdfViewerComponent document={pdfUrl} />
      </div>
    </div>
  );
}

export default App;
