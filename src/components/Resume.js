import React, {Component} from 'react'
import {
    PDFViewer,
    Image,
    Document,
    Page,
    Text,
    View,
    Link
} from "@react-pdf/renderer";
import styles from "./resume-config";

class Resume extends Component {
    render() {
        return (
            <>
                <PDFViewer style={styles.viewer}>

                    <Document>
                        <Page style={styles.body}>
                            <View style={styles.views} wrap={"true"}>
                                <View style={styles.imgdivs}>
                                    <Image
                                        style={styles.image}
                                        src="./portfolioimage.jpeg"
                                    />

                                </View>
                                <View style={styles.qualdivs} wrap={true}>

                                    <Text style={{fontSize: 25, color: 'steelblue'}}>Mohammad Aftab</Text>
                                    <Text style={styles.designation}>Full Stack Developer</Text>
                                    <Text style={styles.text}>3+ years work experience as Full stack web developer.
                                        Worked on different projects using different technologies</Text>
                                </View>


                                <View style={styles.contactdivs}>
                                    <Text style={styles.text}>
                                        <Link src="www.maftab.me"> www.maftab.me</Link>
                                    </Text>
                                    <Text style={styles.text}>
                                        <Link
                                            src="https://www.linkedin.com/in/mohammad-aftab-91240a115/"> https://www.linkedin.com/in/mohammad-aftab-91240a115/</Link>
                                    </Text>
                                    <Text style={styles.text}>
                                        <Link src="https://github.com/maftab5"> https://github.com/maftab5</Link>
                                    </Text>

                                </View>

                            </View>

                            {/*for EXPERIENCE*/}
                            <View style={styles.views}>
                                <View style={styles.experinceDiv}>
                                    <Text>
                                        EXPERIENCE
                                    </Text>
                                </View>
                            </View>

                            {/*first experience*/}
                            <View style={[styles.views, {marginVertical: 10}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {color: 'orange', fontSize: 12}]}>
                                        <Text>Tecchroadians Offshores Pvt Ltc</Text>
                                    </View>


                                </View>
                                <View style={styles.companyDesc}>
                                    <View style={[styles.views, {color: 'green', fontSize: 12}]}>
                                        <Text style={{textDecoration: 'underline', marginBottom: 5}}>Full Stack Web
                                            Developer</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>PHP , Laravel PHP , Laravel PHP , Laravel</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>PHP , Laravel PHP , Laravel PHP , Laravel </Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>PHP , Laravel PHP , Laravel PHP , Laravel</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>PHP , Laravel PHP , Laravel PHP , Laravel</Text>
                                    </View>

                                </View>

                                <View style={styles.durationDiv}>
                                    <View style={[styles.views, {color: 'grey', fontSize: 8}]}>
                                        <Text>May 2016 - Jul 2018</Text>
                                    </View>
                                </View>

                            </View>

                            {/*secod experience*/}
                            <View style={[styles.views, {marginVertical: 10}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {color: 'orange', fontSize: 12}]}>
                                        <Text>Maskey Consultancy Pvt Ltd</Text>
                                    </View>
                                    <View style={[styles.views, {color: 'grey', fontSize: 8}]}>
                                        <Text>May 2014 - Jul 2016</Text>
                                    </View>

                                </View>
                                <View style={styles.companyDesc}>
                                    <View style={[styles.views, {color: 'green', fontSize: 12}]}>
                                        <Text style={{textDecoration: 'underline', marginBottom: 5}}>Full Stack Web
                                            Developer</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>PHP , Laravel PHP , Laravel PHP , Laravel</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>PHP , Laravel PHP , Laravel PHP , Laravel </Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>PHP , Laravel PHP , Laravel PHP , Laravel</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>PHP , Laravel PHP , Laravel PHP , Laravel</Text>
                                    </View>

                                </View>

                            </View>

                            {/*for education*/}

                            <View style={styles.views}>
                                <View style={styles.experinceDiv}>
                                    <Text>
                                        EDUCATION
                                    </Text>
                                </View>
                            </View>

                            {/*education one*/}
                            <View style={[styles.views, {marginVertical: 10}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {color: 'orange', fontSize: 12}]}>
                                        <Text>Conestoga College</Text>
                                    </View>
                                    <View style={[styles.views, {color: 'grey', fontSize: 8}]}>
                                        <Text>Sep 2018 - Dec 2019</Text>
                                    </View>

                                </View>
                                <View style={styles.companyDesc}>
                                    <View style={[styles.views, {fontSize: 12}]}>
                                        <Text style={{marginBottom: 5}}>
                                            Web Design and Development
                                        </Text>
                                    </View>


                                </View>

                            </View>

                            {/*education two*/}
                            <View style={[styles.views, {marginVertical: 10}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {color: 'orange', fontSize: 12}]}>
                                        <Text>Oxford College of Engineering & Management</Text>
                                    </View>
                                    <View style={[styles.views, {color: 'grey', fontSize: 8}]}>
                                        <Text>Aug 2010 - Dec 2014</Text>
                                    </View>

                                </View>
                                <View style={styles.companyDesc}>
                                    <View style={[styles.views, {fontSize: 12}]}>
                                        <Text style={{marginBottom: 5}}>
                                            Bachelor of Computer Application
                                        </Text>
                                    </View>


                                </View>

                            </View>


                            {/*for skills*/}

                            <View style={styles.views}>
                                <View style={styles.experinceDiv}>
                                    <Text>
                                        SKILLS
                                    </Text>
                                </View>
                            </View>

                            {/*FRONT-END SKILLS*/}
                            <View style={[styles.views, {marginVertical: 10}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {color: 'orange', fontSize: 12}]}>
                                        <Text>FRONT-END</Text>
                                    </View>


                                </View>
                                <View style={styles.companyDesc}>

                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>HTML5, CSS3, BOOTSTRAP, REACT, ANGULAR, JAVASCRIP, JQUERY</Text>
                                    </View>


                                </View>

                            </View>

                            {/*BACK-END SKILLS*/}
                            <View style={[styles.views, {marginVertical: 10}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {color: 'orange', fontSize: 12}]}>
                                        <Text>BACK-END</Text>
                                    </View>


                                </View>
                                <View style={styles.companyDesc}>

                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>PHP, NODE</Text>
                                    </View>

                                </View>

                            </View>

                            {/*OTHERS SKILLS*/}
                            <View style={[styles.views, {marginVertical: 10}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {color: 'orange', fontSize: 12}]}>
                                        <Text>OTHERS</Text>
                                    </View>


                                </View>
                                <View style={styles.companyDesc}>

                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>AGILE, GITHUB, LINUX, PHOTOSHOP, WORDPRESS, AWS</Text>
                                    </View>

                                </View>

                            </View>


                            {/*for projects*/}

                            <View style={styles.views}>
                                <View style={styles.experinceDiv}>
                                    <Text>
                                        PROJECTS
                                    </Text>
                                </View>
                            </View>

                            {/*Company projects*/}
                            <View style={[styles.views, {marginVertical: 10,marginTop:5}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {color: 'orange', fontSize: 12}]}>
                                        <Text>COMPANY'S PROJECTS</Text>
                                    </View>

                                </View>
                                {/*first project*/}
                                <View style={styles.companyDesc}>
                                    <View style={[styles.views, {fontSize: 10,marginTop:10}]}>
                                        <Text>mWorkmap</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>A project management application for enterprises</Text>
                                    </View>

                                {/*second project*/}

                                    <View style={[styles.views, {fontSize: 10,marginTop:10}]}>
                                        <Text>Bhudeo</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>Order management application for the compnay and sales representative of Hulas Pvt Ltd</Text>
                                    </View>

                                    {/*third project*/}

                                    <View style={[styles.views, {fontSize: 10,marginTop:10}]}>
                                        <Text>Abiva Publishing House, Inc</Text>
                                    </View>
                                        <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>Online learning system for the students, teachers and parents</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Link src="http://www.abiva.com.ph/">http://www.abiva.com.ph/</Link>
                                    </View>


                                </View>


                            </View>


                            {/*School projects*/}
                            <View style={[styles.views, {marginVertical: 10,marginTop:5}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {color: 'orange', fontSize: 12}]}>
                                        <Text>SCHOOL'S PROJECTS</Text>
                                    </View>

                                </View>
                                {/*first project*/}
                                <View style={styles.companyDesc}>
                                    <View style={[styles.views, {fontSize: 10,marginTop:10}]}>
                                        <Text>RealEstate</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>A fully responsive static website for properties listing, using hmtl, css, bootstrap, javasxript</Text>
                                    </View>

                                    {/*second project*/}

                                    <View style={[styles.views, {fontSize: 10,marginTop:10}]}>
                                        <Text>Nepal Diary</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>Static website using using hmtl, css, bootstrap, javasxript</Text>
                                    </View>

                                    {/*third project*/}

                                    <View style={[styles.views, {fontSize: 10,marginTop:10}]}>
                                        <Text>Find the penguin</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>A game developed using javascript to find the penguins</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Link src="http://www.abiva.com.ph/">http://www.abiva.com.ph/</Link>
                                    </View>

                                    {/*third project*/}

                                    <View style={[styles.views, {fontSize: 10,marginTop:10}]}>
                                        <Text>Cafe</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>An online cafe website, developed using Angular, Node, Express, MongoDB and integrating Papal for payment</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Link src="http://www.abiva.com.ph/">http://www.abiva.com.ph/</Link>
                                    </View>


                                </View>


                            </View>


                            <Text style={styles.pageNumber} render={({pageNumber, totalPages}) => (
                                `${pageNumber} / ${totalPages}`
                            )} fixed/>
                        </Page>
                    </Document>
                </PDFViewer>
            </>
        )
    }

}

// const Resume = () => (
//     <>
//         <PdfComponent/>
//         <PDFDownloadLink document={<PdfComponent/>} fileName="somename.pdf">
//             {({blob, url, loading, error}) => (loading ? 'Loading document...' : 'Download now!')}
//         </PDFDownloadLink>
//     </>
// );

export default Resume;
