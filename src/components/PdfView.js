import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import { Button } from "reactstrap";
import useWindowDimensions from "./GetView";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const PdfView = ({ pdf, setBackIcon }) => {
  const [numPages, setNumPages] = useState(null);
  const { height, width } = useWindowDimensions();
  const [pageWidth, setPageWidth] = useState(Number(width));
  const [pageHeight, setPageHeight] = useState(Number(height - 90));
  const book = useRef();

  useEffect(() => {
    setPageWidth(Number(width));
    setPageHeight(Number(height - 90));
  }, [height, width]);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const Page = React.forwardRef(({ pageNumber }, ref) => {
    return (
      <div ref={ref}>
        <ReactPdfPage
          pageNumber={Number(pageNumber)}
          width={pageWidth}
          height={pageHeight}
          onClick={(e) => {}}
        />
      </div>
    );
  });

  const btnWidth = Number(Number(pageWidth) / 4);

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

  useEffect(() => {
    setBackIcon(true);
  }, []);

  const prev = () => {
    book.current.pageFlip().flipPrev();
  };

  const next = () => {
    book.current.pageFlip().flipNext();
  };

  return (
    <React.Fragment>
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={200}
        defaultPositionY={100}
      >
        {({
          zoomIn,
          zoomOut,
          resetTransform,
          positionX,
          positionY,
          ...rest
        }) => (
          <React.Fragment>
            <TransformComponent>
              <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={loadingFlag}
                onLoadError={(error) =>
                  alert("Error while retrieving the outline! " + error.message)
                }
              >
                <HTMLFlipBook
                  clickEventForward={false}
                  useMouseEvents={false}
                  ref={book}
                  width={pageWidth}
                  height={pageHeight}
                  autoSize={false}
                  maxHeight={Number(pageHeight)}
                >
                  {arr?.map((pages) => {
                    return (
                      <Page
                        key={pages}
                        width={pageWidth}
                        height={pageHeight}
                        pageNumber={pages}
                      />
                    );
                  })}
                </HTMLFlipBook>
              </Document>
            </TransformComponent>
            <div>
              <Button
                color="light"
                style={{ width: `${btnWidth}px` }}
                onClick={(e) => {
                  resetTransform();
                  prev();
                }}
              >
                <i className="fa-solid fa-arrow-left"></i>
              </Button>
              <Button
                color="light"
                style={{ width: `${btnWidth}px` }}
                onClick={(e) => zoomIn()}
              >
                <i className="fa fa-thin fa-magnifying-glass-plus"></i>
              </Button>
              <Button
                color="light"
                style={{ width: `${btnWidth}px` }}
                onClick={(e) => zoomOut()}
              >
                <i className="fa fa-thin fa-magnifying-glass-minus"></i>
              </Button>
              <Button
                color="light"
                style={{ width: `${btnWidth}px` }}
                onClick={(e) => {
                  resetTransform();
                  next();
                }}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </Button>
            </div>
          </React.Fragment>
        )}
      </TransformWrapper>
    </React.Fragment>
  );
};

export default PdfView;
