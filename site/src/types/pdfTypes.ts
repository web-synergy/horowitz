export interface PdfSize {
  width: number;
  height: number;
}

export interface IPdfViewer {
  pdfSize: PdfSize;
  pageNumber: number[];
}

export interface IFileResponse {
  URL: string;
}
