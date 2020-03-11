let res = getDayOfWeer(prompt('Enter date'));
alert(res);

function getDayOfWeer(userStr){
    formatDate = formatDay(userStr);
    console.log(formatDate);
    let day = new Date(formatDate);
    let dayNumberOfWeek = day.getDay();
    if(dayNumberOfWeek === 0){
        dayNumberOfWeek = 7;
    }
    return `Это был ${weeksDays(dayNumberOfWeek)} или же ${dayNumberOfWeek} день недели`;
}

function formatDay(str){ // format date from month.day.year to day.month.year
    let pattern = /\d{2}(\.|\/)\d{2}(\.|\/)\d{4}/
    if(pattern.exec(str)){
        let a  = str.split(/(\.|\/)/);
        let day = a[0];
        a[0] = a[2];
        a[2] = day;
        return a.join('');
    }
    
}

function weeksDays(dayNumber){
    switch(dayNumber){
        case 1:
            return 'Понедельник';
        case 2:
            return 'Вторник';
        case 3:
            return 'Среда';
        case 4:
            return 'Четверг';
        case 5:
            return 'Пятница';
        case 6:
            return 'Суббота';
        case 7:
            return 'Воскресенье';
    }
}