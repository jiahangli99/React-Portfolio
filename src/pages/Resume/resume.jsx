import React, {Component} from 'react';
import jsPDF from 'jspdf';
import ResumePdf from '../../logo/Resume.png'
class Resume extends Component {
    pdfGenerate=()=>{
        let doc=new jsPDF('landscape', 'px', 'b4', 'false');
        doc.addImage(ResumePdf, 'PNG', 100,10,500,550)
        doc.save('JiahangLiResume.pdf')
    }
    render() {
        return (
            <div>
                <button onClick={this.pdfGenerate}>Download Resume</button>
            </div>
        )
    }
}

export default Resume;