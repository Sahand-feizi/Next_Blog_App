import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, exeptedId = null) {
    const ref = useRef()

    useEffect(() => {
        function outSideClickHandler(e) {
            if (
                ref.current &&
                !ref.current.contains(e.target) &&
                !e.target.id.includes(exeptedId)
            ) {
                handler()
            }
        }

        document.addEventListener('mousedown', outSideClickHandler)
    }, [])

    return ref
}