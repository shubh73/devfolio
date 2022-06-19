import { useRef, useEffect } from 'react';

const ProgressIndicator = () => {
    const progress = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const totalScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = totalScroll / windowHeight;
            progress.current ? (progress.current.style.transform = `scaleX(${scrolled})`) : "";
        });
    }, [progress]);

    return (
        <div className="progress w-full fixed top-0 z-50">
            <div ref={progress} className="progress-bar"></div>
        </div>
    )
}

export default ProgressIndicator;