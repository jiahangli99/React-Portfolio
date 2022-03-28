import React, {Component} from 'react';
import jsPDF from 'jspdf';
import ResumePdf from '../../logo/Resume.png'
import './resume.css'
class Resume extends Component {
    pdfGenerate=()=>{
        let doc=new jsPDF('landscape', 'px', 'b4', 'false');
        doc.addImage(ResumePdf, 'PNG', 100,10,500,550)
        doc.save('JiahangLiResume.pdf')
    }
    render() {
        return (
            <div>
                <div className='resume'>
                <h1>Click To Download</h1>
                </div>
                <div className='resumeDiv'>
                <button onClick={this.pdfGenerate}>
                <img className='resumeImg' src={ResumePdf} alt="" /></button>
                </div>
            </div>
        )
    }
}

export default Resume;