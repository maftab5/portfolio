import React, {Component} from 'react'
import {PDFViewer, Image, Document, Page, Text, View, Link} from "@react-pdf/renderer";
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
                                        <Link style={{color: '#505050'}}
                                              src="https://maftab.herokuapp.com/"> https://maftab.herokuapp.com/e</Link>
                                    </Text>
                                    <Text style={styles.text}>
                                        <Link style={{color: '#505050'}}
                                              href="mailto:aftab1234011@gmail.com"> aftab1234011@gmail.com</Link>
                                    </Text>
                                    <Text style={styles.text}>
                                        <Link style={{color: '#505050'}}
                                              src="https://www.linkedin.com/in/mohammad-aftab-91240a115/"> https://www.linkedin.com/in/mohammad-aftab-91240a115/</Link>
                                    </Text>
                                    <Text style={styles.text}>
                                        <Link style={{color: '#505050'}}
                                              src="https://github.com/maftab5"> https://github.com/maftab5</Link>
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
                                    <View style={[styles.views, {
                                        fontSize: 10,
                                        backgroundColor: 'whitesmoke',
                                        padding: 5,
                                        color: 'darkgray',
                                        textAlign: 'right'
                                    }]}>
                                        <Text>Techroadians Offshore</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 7, color: 'grey', textAlign: 'right'}]}>
                                        <Text>Nov 2016 - Mar 2018</Text>
                                    </View>

                                </View>
                                <View style={styles.companyDesc}>
                                    <View style={[styles.views, {fontSize: 12}]}>
                                        <Text style={{marginBottom: 5, color: '#505050'}}>
                                            Full Stack Web Developer
                                        </Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>• Created and maintained web applications for small business to enterprise
                                            corporation </Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>• Redesign and optimize database schema </Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>• Enhanced the performance of the application through optimized
                                            algorithm </Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>• Designed the REST api endpoints</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>• Documenting features, technical specifications & infrastructure
                                            requirements.</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text> </Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text> Tools : Laravel, MongoDB ,PHP, MySql, JavaScript, Jquery, Html,
                                            Bootstrap, GitHub</Text>
                                    </View>

                                </View>
                            </View>

                            {/*secod experience*/}
                            <View style={[styles.views, {marginVertical: 10}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {
                                        fontSize: 10,
                                        backgroundColor: 'whitesmoke',
                                        padding: 5,
                                        color: 'darkgray',
                                        textAlign: 'right'
                                    }]}>
                                        <Text>Maskey Consultancy Pvt Ltd</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 7, color: 'grey', textAlign: 'right'}]}>
                                        <Text>May 2014 - Jul 2016</Text>
                                    </View>

                                </View>
                                <View style={styles.companyDesc}>
                                    <View style={[styles.views, {fontSize: 12}]}>
                                        <Text style={{marginBottom: 5, color: '#505050'}}>
                                            Full Stack Web Developer</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>• Created web applications, participating in the whole process of
                                            development</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>• Product design and estimation, code and UI/UX design, product lunch and
                                            maintenance </Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>• Worked on bug fixes, user interface updates, and performance
                                            enhancements</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>• Lead and mentored serveral developers</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text> </Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text> Tools : Yii, Yii2, ,PHP, MySql, JavaScript, Jquery, Html, Bootstrap,
                                            Linux</Text>
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
                                    <View style={[styles.views, {
                                        fontSize: 10,
                                        backgroundColor: 'whitesmoke',
                                        padding: 5,
                                        color: 'darkgray',
                                        textAlign: 'right'
                                    }]}>
                                        <Text>Conestoga College</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 7, color: 'grey', textAlign: 'right'}]}>
                                        <Text>Sep 2018 - Dec 2019</Text>
                                    </View>

                                </View>
                                <View style={styles.companyDesc}>
                                    <View style={[styles.views, {fontSize: 12, color: 'grey'}]}>
                                        <Text style={{marginBottom: 5}}>
                                            Web Design and Development
                                        </Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>Awarded with Dean's honour list</Text>
                                    </View>
                                </View>

                            </View>

                            {/*education two*/}
                            <View style={[styles.views, {marginVertical: 10}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {
                                        fontSize: 10,
                                        backgroundColor: 'whitesmoke',
                                        padding: 5,
                                        color: 'darkgray',
                                        textAlign: 'right'
                                    }]}>
                                        <Text>Oxford College of Engineering & Management</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 7, color: 'grey', textAlign: 'right'}]}>
                                        <Text>Aug 2010 - Dec 2014</Text>
                                    </View>

                                </View>
                                <View style={styles.companyDesc}>
                                    <View style={[styles.views, {fontSize: 12}]}>
                                        <Text style={{marginBottom: 5}}>
                                            Bachelor of Computer Application
                                        </Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>
                                            Courses in algorithms, data structures, programming languages,computer
                                            architecture, operating systems, databases, theory of computation etc.
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
                                    <View style={[styles.views, {
                                        fontSize: 10,
                                        backgroundColor: 'whitesmoke',
                                        padding: 5,
                                        color: 'darkgray',
                                        textAlign: 'right'
                                    }]}>
                                        <Text>FRONT-END</Text>
                                    </View>


                                </View>
                                <View style={styles.companyDesc}>

                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>HTML5, CSS3, BOOTSTRAP, REACT, ANGULAR, JAVASCRIP, JQUERY</Text>
                                    </View>


                                </View>

                            </View>

                            {/*BACK-END SKILLS*/}
                            <View style={[styles.views, {marginVertical: 10}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {
                                        fontSize: 10,
                                        backgroundColor: 'whitesmoke',
                                        padding: 5,
                                        color: 'darkgray',
                                        textAlign: 'right'
                                    }]}>
                                        <Text>BACK-END</Text>
                                    </View>


                                </View>
                                <View style={styles.companyDesc}>

                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>PHP, NODE</Text>
                                    </View>

                                </View>

                            </View>

                            {/*OTHERS SKILLS*/}
                            <View style={[styles.views, {marginVertical: 10}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {
                                        fontSize: 10,
                                        backgroundColor: 'whitesmoke',
                                        padding: 5,
                                        color: 'darkgray',
                                        textAlign: 'right'
                                    }]}>
                                        <Text>OTHERS</Text>
                                    </View>


                                </View>
                                <View style={styles.companyDesc}>

                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
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
                            <View style={[styles.views, {marginVertical: 10, marginBottom: 5}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {
                                        fontSize: 10,
                                        backgroundColor: 'whitesmoke',
                                        padding: 5,
                                        color: 'darkgray',
                                        textAlign: 'right'
                                    }]}>
                                        <Text>COMPANY'S PROJECTS</Text>
                                    </View>

                                </View>
                                {/*first project*/}
                                <View style={styles.companyDesc}>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>mWorkmap</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey', marginBottom: 10}]}>
                                        <Text>A project management application for enterprises</Text>
                                    </View>

                                    {/*second project*/}

                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>Bhudeo</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey', marginBottom: 10}]}>
                                        <Text>Order management application for the compnay and sales representative of
                                            Hulas Pvt Ltd</Text>
                                    </View>

                                    {/*third project*/}

                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>Abiva Publishing House, Inc</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, color: 'grey'}]}>
                                        <Text>Online learning system for the students, teachers and parents</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, marginBottom: 10}]}>
                                        <Link src="http://www.abiva.com.ph/" rel="noopener noreferrer"
                                              target="_blank">http://www.abiva.com.ph/</Link>
                                    </View>


                                </View>


                            </View>


                            {/*School projects*/}
                            <View style={[styles.views, {marginVertical: 10, marginBottom: 5}]}>
                                <View style={styles.companyDiv}>
                                    <View style={[styles.views, {
                                        fontSize: 10,
                                        backgroundColor: 'whitesmoke',
                                        padding: 5,
                                        color: 'darkgray',
                                        textAlign: 'right'
                                    }]}>
                                        <Text>SCHOOL'S PROJECTS</Text>
                                    </View>

                                </View>
                                {/*first project*/}
                                <View style={styles.companyDesc}>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>RealEstate</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, marginBottom: 10}]}>
                                        <Text>A fully responsive static website for properties listing, using hmtl, css,
                                            bootstrap, javasxript</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, marginBottom: 10}]}>
                                        <Link src="https://jsfinalproject.herokuapp.com/" rel="noopener noreferrer"
                                              target="_blank">RealEstate</Link>
                                    </View>

                                    {/*second project*/}

                                    {/*third project*/}

                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>Find the penguin</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>A game developed using javascript to find the penguins</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, marginBottom: 10}]}>
                                        <Link src="https://jsfinalproject.herokuapp.com/" rel="noopener noreferrer"
                                              target="_blank">RealEstate</Link>
                                    </View>

                                    {/*third project*/}

                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>Cafe</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10}]}>
                                        <Text>An online cafe website, developed using Angular, Node, Express, MongoDB
                                            and integrating Papal for payment</Text>
                                    </View>
                                    <View style={[styles.views, {fontSize: 10, marginBottom: 10}]}>
                                        <Link src="https://capestone-angular.herokuapp.com/" rel="noopener noreferrer"
                                              target="_blank">Online Cafe</Link>
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
