import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import PDF from "../assets/DreamsInIslam.pdf";
import PDF1 from "../assets/1.pdf";
import PDF2 from "../assets/2.pdf";
import PDF3 from "../assets/3.pdf";
import PDF4 from "../assets/4.pdf";
import PDF5 from "../assets/5.pdf";
import PDF6 from "../assets/6.pdf";
import PDF7 from "../assets/7.pdf";
import PDF8 from "../assets/8.pdf";
import useWindowDimensions from "./GetView";

const PdfView = ({pdf}) => {
  // condition for select pdf
  const [numPages, setNumPages] = useState(null);
  const { height, width } = useWindowDimensions();

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const Page = React.forwardRef(({ pageNumber }, ref) => {
    return (
      <div ref={ref}>
        <ReactPdfPage
          pageNumber={Number(pageNumber)}
          width={width}
          onClick={(e) => {}}
        />
      </div>
    );
  });

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const arr = [];
  for (let i = 1; i <= Number(numPages); i++) {
    arr.push(i);
  }

  const loadingFlag = () => {
    return <h3 className="text-center text-muted mt-5">Loading...</h3>;
  };

  return (
    <React.Fragment>
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={loadingFlag}
        onLoadError={(error) =>
          alert("Error while retrieving the outline! " + error.message)
        }
      >
        <HTMLFlipBook width={width} height={height}>
          {arr?.map((pages) => {
            return <Page key={pages} width={width} pageNumber={pages} />;
          })}
        </HTMLFlipBook>
      </Document>
    </React.Fragment>
  );
};

export default PdfView;
