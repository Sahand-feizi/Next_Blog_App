export default function toLocalDateShort(date, options = {}){
    return new Date(date).toLocaleDateString('fa-IR', options)
}