import React,{Component} from "react";
import {PDFDownloadLink} from "@react-pdf/renderer";
import Resume from "./Resume";

class DownloadResume extends Component{
    render() {
        return (
            <div>
                <PDFDownloadLink document={<Resume />} fileName="somename.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
            </div>
        )
    }
}
export default DownloadResume;