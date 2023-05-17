
let monthDetector = {
    'декабрь': 'декабря',
    'январь' : 'января',
    'февраль' : 'февраля',
    'март': 'марта',
    'апрель': 'апреля',
    'май': 'мая',
    'июнь': 'июня',
    'июль': 'июля',
    'август': 'августа',
    'сентябрь': 'сентября',
    'октябрь': 'октября',
    'ноябрь': 'ноября'
}
export const getDayInfo=(dateInp)=> {
    const options = {
        weekday: 'long',
    }
    const option1 = {
        day: 'numeric',
    }
    let option3 = {
        month: 'long'
    }

    let weeks = new Intl.DateTimeFormat('ru-RU', option1).format(dateInp)
    let month = new Intl.DateTimeFormat('ru-RU', option3).format(dateInp)
    month = monthDetector[month]
    weeks = Math.ceil(+weeks / 6 ) + ' ' + 'неделя'
    return new Intl.DateTimeFormat('ru-RU', options).format(dateInp)+',' + ' ' + weeks + ' ' + month+ ' '+ dateInp.getFullYear() + " " + 'года'
}

