import React, {Component} from 'react'
import {PDFDownloadLink,PDFViewer,Image ,Document, Page, Text, View, StyleSheet,Font} from "@react-pdf/renderer";
import {throttle} from 'lodash';
import portfolio from '../portfolioimage.jpeg'


Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
    body: {
        minWidth:600,
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald'
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    image: {
        height: '400px',
        width: '400px',
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});

class PdfComponent extends Component {

    render() {
        return (
            <Document >
                <Page style={styles.body} pageNumber={1} >
                    <Text style={styles.header} fixed>
                        ~ Created with react-pdf ~
                    </Text>
                    <Text style={styles.title}>Don Quijote de la Mancha</Text>
                    <Text style={styles.author}>Miguel de Cervantes</Text>
                    <View>
                        <Text>This is image div</Text>
                        <Image src={portfolio} />
                    </View>
                    <Text style={styles.subtitle}>
                        Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
                        Quijote de la Mancha
                    </Text>


                    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )} fixed />
                </Page>
            </Document>

        )
    }

}

const Resume = () => (
    <>

        <PdfComponent/>
        <PDFDownloadLink document={<PdfComponent />} fileName="somename.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>

    </>
);

export  default Resume;
