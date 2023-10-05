type PageConfig = {
    width: number,
    offset: number
}

export type Page = {
    id: number,
    name: string,
    pc: PageConfig,
    mobile: PageConfig
}

export function getPages() : Map<number, any> {
    const pages = new Map()

    pages.set(1, {
        id: 1,
        name: "Home",
        pc: {
          width: 4.1,
          offset: 0.4
        },
        mobile: {
          width: 3.1,
          offset: 0.4
        }
    })

    pages.set(2, {
        id: 2,
        name: "About",
        pc: {
          width: 4.2,
          offset: 5.3
        },
        mobile: {
          width: 3.4,
          offset: 4.3
        }
    })

    pages.set(3, {
        id: 3,
        name: "Projects",
        pc: {
          width: 6,
          offset: 10.5
        },
        mobile: {
          width: 4.6,
          offset: 8.4
        }
    })

    pages.set(4, {
        id: 4,
        name: "Contact",
        pc: {
          width: 5.6,
          offset: 17.2
        },
        mobile: {
          width: 4.2,
          offset: 13.7
        }
    })
    
    return pages
}

export function getPageWidth(width: number, pageId: number) : number {
    return width < 700 ? getPages().get(pageId).mobile.width : getPages().get(pageId).pc.width
}

export function getPageOffset(width: number, pageId: number) : number {
    return width < 700 ? getPages().get(pageId).mobile.offset : getPages().get(pageId).pc.offset
}