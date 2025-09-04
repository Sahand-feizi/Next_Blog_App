import { useEffect, useRef } from "react";

export default function useOutsideClick(handler) {
    const ref = useRef()

    useEffect(() => {
        function outSideClickHandler(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                handler()
            }
        }

        document.addEventListener('mousedown', outSideClickHandler)
    }, [])

    return ref
}