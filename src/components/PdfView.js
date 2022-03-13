import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import PDF from "../assets/DreamsInIslam.pdf";
import useWindowDimensions from "./GetView";

const PdfView = (props) => {
  // condition for select pdf
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

  const arr = [];
  for (let i = 1; i <= 105; i++) {
    arr.push(i);
  }

  return (
    <React.Fragment>
      <Document file={PDF}>
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
