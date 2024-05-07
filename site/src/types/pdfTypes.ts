export interface PdfSize {
  width: number;
  height: number;
}

export interface IPdfViewer {
  pdfSize: PdfSize;
  pageNumber: number[];
  isOnePage: boolean;
}

export interface IFileResponse {
  URL: string;
}
