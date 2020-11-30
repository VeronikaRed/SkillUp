export function getDay(n) {
    console.log(n);
    let result = '';
    switch (n) {
        case 1:
            result = 'sunday';
            break;
        case 2:
            result = 'monday';
            break;
        case 3:
            result = 'tuesday';
            break;
        case 4:
            result = 'wednesday';
            break;
        case 5:
            result = 'thursday';
            break;
        case 6:
            result = 'friday';
            break;
        case 7:
            result = 'saturday';
            break;
    }
    console.log(result);
}
