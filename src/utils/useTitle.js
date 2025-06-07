import {useEffect} from "react";

export const useTitle = (title) => {
    useEffect(() => {
        document.title = `${document.title} - ${title}`
    }, []);
}