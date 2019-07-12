//通过天气匹配图标
//xue, lei, shachen, wu, bingbao, yun, yu, yin, qing

function logoMatch(wea) {
    let match;
    switch (wea) {
        case "xue":
            match = 'wi-snow';
            break;
        case "shachen":
            match = 'wi-dust';
            break;
        case "wu":
            match = 'wi-fog';
            break;
        case "bingbao":
            match = 'wi-hail';
            break;
        case "yun":
            match = 'wi-cloud';
            break;
        case "yu":
            match = 'wi-raindrops';
            break;
        case "yin":
            match = 'wi-cloudy';
            break;
        case "qing":
            match = 'wi-day-sunny';
            break;
        default:
            match = 'wi-na';
    }

    return match;
}
