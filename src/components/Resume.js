import React, {Component} from 'react'
import {PDFDownloadLink,PDFViewer,Image ,Document, Page, Text, View, StyleSheet,Font} from "@react-pdf/renderer";
import {throttle} from 'lodash';


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

class Resume extends Component {

    constructor(props) {
        super(props)
        this.state = {
            PDFWidth: null
        }
        this.myInput = React.createRef()
    }

    componentDidMount() {
        // setting width at initial
        this.setPDFWidth()

        // event listener when window is resized
        window.addEventListener('resize', this.throttledSetPDFWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.throttledSetPDFWidth)
    }

    setPDFWidth = () => {
        const width = this.myInput.current.offsetWidth
        this.setState({ PDFWidth: width })
    }

    render() {
        const { PDFWidth } = this.state
        return (
            <div >
                <div className="btn btn-primary">
                    <a href="/download-resume" download>Download</a>
                </div>
                <div ref={this.myInput}>


                    <Document file='test.pdf'>
                        <Page pageNumber={1} width={PDFWidth} >
                            <Text style={styles.header} fixed>
                                ~ Created with react-pdf ~
                            </Text>
                            <Text style={styles.title}>Don Quijote de la Mancha</Text>
                            <Text style={styles.author}>Miguel de Cervantes</Text>
                            <Image
                                style={styles.image}
                                src="/static/images/quijote1.jpg"
                            />
                            <Text style={styles.subtitle}>
                                Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
                                Quijote de la Mancha
                            </Text>



                            <Text style={styles.text}>
                                En resolución, él se enfrascó tanto en su lectura, que se le pasaban las
                                noches leyendo de claro en claro, y los días de turbio en turbio, y así,
                                del poco dormir y del mucho leer, se le secó el cerebro, de manera que
                                vino a perder el juicio. Llenósele la fantasía de todo aquello que leía
                                en los libros, así de encantamientos, como de pendencias, batallas,
                                desafíos, heridas, requiebros, amores, tormentas y disparates
                                imposibles, y asentósele de tal modo en la imaginación que era verdad
                                toda aquella máquina de aquellas soñadas invenciones que leía, que para
                                él no había otra historia más cierta en el mundo.
                            </Text>
                            <Text style={styles.subtitle} break>
                                Capítulo II: Que trata de la primera salida que de su tierra hizo el
                                ingenioso Don Quijote
                            </Text>
                            <Image
                                style={styles.image}
                                src="/static/images/quijote2.png"
                            />

                            <Text style={styles.text}>
                                Yendo, pues, caminando nuestro flamante aventurero, iba hablando consigo
                                mesmo, y diciendo: —¿Quién duda, sino que en los venideros tiempos,
                                cuando salga a luz la verdadera historia de mis famosos hechos, que el
                                sabio que los escribiere no ponga, cuando llegue a contar esta mi
                                primera salida tan de mañana, desta manera?: Apenas había el rubicundo
                                Apolo tendido por la faz de la ancha y espaciosa tierra las doradas
                                hebras de sus hermosos cabellos, y apenas los pequeños y pintados
                                pajarillos con sus arpadas lenguas habían saludado con dulce y meliflua
                                armonía la venida de la rosada Aurora, que, dejando la blanda cama del
                                celoso marido, por las puertas y balcones del manchego horizonte a los
                                mortales se mostraba, cuando el famoso caballero don Quijote de la
                                Mancha, dejando las ociosas plumas, subió sobre su famoso caballo
                                Rocinante y comenzó a caminar por el antiguo y conocido Campo de
                                Montiel.
                            </Text>
                            <Text style={styles.text}>
                                Y era la verdad que por él caminaba; y añadió diciendo: —Dichosa edad y
                                siglo dichoso aquel adonde saldrán a luz las famosas hazañas mías,
                                dignas de entallarse en bronces, esculpirse en mármoles y pintarse en
                                tablas, para memoria en lo futuro. ¡Oh tú, sabio encantador, quienquiera
                                que seas, a quien ha de tocar el ser coronista desta peregrina historia!
                                Ruégote que no te olvides de mi buen Rocinante, compañero eterno mío en
                                todos mis caminos y carreras.
                            </Text>

                            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                                `${pageNumber} / ${totalPages}`
                            )} fixed />
                        </Page>
                    </Document>
                </div>
            </div>

        )
    }

}
export  default Resume;
