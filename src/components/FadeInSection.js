import React,{useRef,useState,useEffect} from "react";


const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {

        const observer = new IntersectionObserver(entries => {

            if (entries[0].isIntersecting) {

                setVisible(true);

            }
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}
export default FadeInSection