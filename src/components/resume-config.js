import {PDFViewer, Image, Document, Page, Text, View, StyleSheet, Font, PDFDownloadLink, Link} from "@react-pdf/renderer";

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
    body: {
color: '#6a6a6a',
        //flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 65,
        paddingHorizontal:25,
    },
    viewer: {
        backgroundColor: 'white',
        minHeight: '100vh',
        width: '100vw'
    },
views : {
        flexDirection :'row'
},
    text: {
        // margin: 18,
        fontSize: 10,
        marginBottom:10,
        // fontFamily: 'arial'
    },
    designation : {
        fontSize: 12,
        marginBottom:5,
        marginTop:5
    },
    image: {
        maxHeight: '10vh',
        maxWidth: '10vh',
        // marginVertical: 15,
        // marginHorizontal: 100,
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 8,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    imgdivs: {
        flexGrow: 1,
        padding: 5,
        width:'20%'
    },
    qualdivs: {
        flexGrow: 1,
        padding: 5,
        width:'50%'
    },
    contactdivs: {
        flexGrow: 1,
        padding: 2,
        width:'30%',
        borderLeft:'1px solid lightgrey'
    },
    experinceDiv : {
        marginTop:'5%',
        width: '25%',
        fontSize: 20,
        color: 'steelblue',
        textAlign: 'right'
    },
    companyDiv : {
        maxWidth: '25%',
        flexGrow: 1,
        marginRight:'2%'

    },
    companyDesc : {
        maxWidth : '65%'
    },
    durationDiv : {
        maxWidth:'10%',
        textAlign: 'right'
    }





});

export default styles