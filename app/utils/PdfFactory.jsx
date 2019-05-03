import jsPDF from 'jspdf';
import 'jspdf-autotable';
import brandLogo from "assets/img/logoReport.png";
const image2base64 = require('image-to-base64');

class PdfFactory {
    constructor(columns, rows, reportTitle = 'No Title') {
        this.columns = columns;
        this.rows = rows;
        this.reportTitle = reportTitle
    }

    GeneratePdf = () => {
        image2base64(brandLogo)
            .then(
                (logo) => {
                    var doc = new jsPDF('p', 'pt');
                    /*doc.setFillColor(0,0,0,0);
                    doc.rect(5, 5, 585, 832, "F");*/
                    doc.setTextColor('#1b4060');
                    doc.setFontSize(20);
                    //doc.setFont('monospace', 'bolditalic');
                    doc.addImage(logo,'png', 20, 20, 40, 40);
                    /*doc.text(['SNAP VDI'], 20, 50);
                    doc.setFontSize(6);
                    doc.text(['Enterprise'], 82, 56);&*/

                    //doc.setTextColor('#6c6c6c');
                    doc.setFontSize(7);
                    //doc.setFont('monospace', 'bold');
                    doc.text(['Your address here'], 573, 45, { align: "right" });
                    doc.text(['Your additional information here'], 573, 55, { align: "right" });

                    doc.setTextColor('#6c6c6c');
                    doc.setFontSize(18);
                    //doc.setFont('monospace', 'bold');
                    doc.text(this.reportTitle, 20, 100);
                    doc.setFillColor(35, 35, 35, 35);
                    doc.rect(20, 60, 555, 3.2, 'F');
                    doc.autoTable(this.columns, this.rows, {
                        pageBreak: 'avoid',
                        theme: 'plain',
                        margin: { top: 120, bottom: 60, left: 20, right: 20 },
                        headStyles: { fillColor: [215, 215, 215], textColor: [60, 60, 60], fontSize: 8, halign: 'center' },
                        bodyStyles: {
                            overflow: 'linebreak',
                            fontSize: 7,
                        },
                        willDrawCell: function (data) {
                            if (data.section === 'body') {
                                doc.setFillColor(15, 15, 15, 15);
                                doc.rect(data.cursor.x, data.cursor.y, data.cell.width, 0.6, 'F');
                            }
                            /*if (cell.raw === undefined)
                            return false;
                            if(cell.raw.indexOf("*") > -1) {
                                //doc.rect(cell.x, cell.y, cell.width, cell.height * times, 'FD');
                            }*/
                        }
                    });
                    //doc.save('table.pdf');
                    doc.output('dataurlnewwindow');
                });
    }
}

export default (PdfFactory);