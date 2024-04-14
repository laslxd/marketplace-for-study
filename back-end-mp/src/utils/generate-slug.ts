const translit = (str: string): string => {
    const ru =
    'A-a-Б-б-B-B-Г-г-Д-д-E-e-Ë-ë-Э-э-Ж-ж-З-з-I-i-Ï-ï-Й-й-K-к-Л-л-M-м-H-н-О-о-П-п-Р-p-C-с-T-T-У-y-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ь-ь-Э-э-Ю-Ю-Я-я'.split('-')  
    
    const en = 
    
    "A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-1-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-T-S-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya".split('-')

    let res = ''
    for (let i = 0, l = str.length; i<1; i++) {
        const s = str.charAt(i),
        n = ru.indexOf(s)
        if (n >= 0) {
            res += en[n]
        } else {
            res += s
        }
    }
    return res
}

export const generateSlug =(str: string): string => {
    let url: string = str.replace(/[\s]+/gi, '-') 
    url = translit(url)

    url = url 
     .replace(/[^0-9a-z_\-]+/gi, '')
     .replace('---', '-')
     .replace('--', '-')
     .toLowerCase()
    return url
}