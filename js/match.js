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

//空气质量等级颜色匹配
function airMatch(_level,_node) {
    let match;
    switch (_level) {
        case "良":
            match = 'level_2';
            break;
        case "轻度污染":
            match = 'level_3';
            break;
        case "中度污染":
            match = 'level_4';
            break;
        case "重度污染":
            match = 'level_5';
            break;
        case "严重污染":
            match = 'level_6';
            break;
        default:
            match = 'level_1';
    }

    return match;
}
