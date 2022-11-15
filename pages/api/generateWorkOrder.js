import createPDF from "utils/pdf/createWorkOrders";
export default async function handler(req, res) {
    // work on retrieving a base number from mongoDB
    const {qty, base} = JSON.parse(req.body);
    const img = await fetch('https://ucarecdn.com/1d09084a-478a-4610-ad5e-ac3deb91ecd8/logo.PNG');
    const imgBuffer = Buffer.from(await img.arrayBuffer())
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=workorder.pdf')

    // API response limit of 4mb. Can override though. 100 pages clocks at 3.72MB
    // Next JS API routes are meant for quick responses 
    res.send(await createPDF(imgBuffer, Number(qty), Number(base)))
}