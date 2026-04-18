    "use client";
    import { useEffect } from "react";

    export default function ScrollToTop() {
    useEffect(() => {
        // Limpia el hash de la URL y hace scroll al top al recargar
        if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
        }
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return null;
    }