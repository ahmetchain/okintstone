import React from "react";
import OkintPDF from "../Assets/OKINT_CATALOG.pdf";
export default function Catalog() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <iframe src={OkintPDF} title="Catalog" className="w-full h-full" />
    </div>
  );
}
