import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./Resume.css";
// import resume from "../Documents/MIRAGE-KAMRAN.pdf";
import QAResume from "../Documents/MirageKamran_SDET.pdf";



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Resume(props) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            <>
                <a href={QAResume} download>
                    <br></br>
                    <button>
                        <span>
                            <i className="fa fa-download faa-vertical animated faa-slow"></i>{" "}
                            Download Resume
                        </span>
                    </button>
                </a>
                <Document file={QAResume} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                        />
                    ))}
                </Document>
            </>
        </>
    );
}
