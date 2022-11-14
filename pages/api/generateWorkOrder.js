import PDFDocument from "pdfkit"
import createPDF from "utils/pdf/createWorkOrders";
export default async function handler(req, res) {
    const {qty, base} = JSON.parse(req.body);
    
    createPDF(Number(qty), Number(base), res)
}