import React,{useRef,useState,useEffect} from "react";


const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {

        // // for animation
        // const observer = new IntersectionObserver(entries => {
        //     entries.forEach(entry => setVisible(entry.isIntersecting));
        // });
        // observer.observe(domRef.current);
        // return () => observer.unobserve(domRef.current);


        const observer = new IntersectionObserver(entries => {
            // In your case there's only one element to observe:
            if (entries[0].isIntersecting) {
                // Not possible to set it back to false like this:
                setVisible(true);

                // No need to keep observing:
                // observer.unobserve(domRef.current);
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