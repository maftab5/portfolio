import React,{useRef,useState,useEffect} from "react";


const FadeInSection = (props) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            // In your case there's only one element to observe:
            if (entries[0].isIntersecting) {
                // Not possible to set it back to false like this:
                setVisible(true);

                // No need to keep observing:
                observer.unobserve(domRef.current);
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