import React, { useEffect, useRef } from 'react';

function PdfViewerComponent(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKIT;

    (async function () {
      try {
        PSPDFKIT = await import('pspdfkit');
        const instance = await PSPDFKIT.load({
          container,
          document: props.document,
          baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        });

        return () => {
          // Unload the PSPDFKit instance when the component unmounts
          if (instance) {
            instance.unload();
          }
        };
      } catch (error) {
        console.error('Error loading PSPDFKit:', error);
      }
    })();
  }, [props.document]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100vh' }}>
    </div>
  );
}

export default PdfViewerComponent;
