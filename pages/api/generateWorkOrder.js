import PDFDocument from "pdfkit"
import createPDF from "utils/pdf/createWorkOrders";
export default async function handler(req, res) {
    const {qty} = JSON.parse(req.body);
    createPDF(qty, res)
}