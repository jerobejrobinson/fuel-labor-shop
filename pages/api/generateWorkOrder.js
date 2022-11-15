import createPDF from "utils/pdf/createWorkOrders";
export default async function handler(req, res) {
    const {qty, base} = JSON.parse(req.body);
    const img = await fetch('https://ucarecdn.com/1d09084a-478a-4610-ad5e-ac3deb91ecd8/logo.PNG');
    const imgBuffer = Buffer.from(await img.arrayBuffer())
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=workorder.pdf')
    res.send(await createPDF(imgBuffer, Number(qty), Number(base)))
}