import { useEffect } from 'react';

const ImportVendorJs = source => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = source;

    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
        }
  }, [source]);
};

export default ImportVendorJs;