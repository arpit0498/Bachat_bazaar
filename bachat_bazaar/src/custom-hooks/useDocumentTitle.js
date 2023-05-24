import { useEffect } from "react"

const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = `Bachat Bazaar | ${title}`
    }, [title])
}

export { useDocumentTitle };