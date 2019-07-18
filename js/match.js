//通过天气匹配图标
//xue, lei, shachen, wu, bingbao, yun, yu, yin, qing
function logoMatch(wea) {
    let match;
    switch (wea) {
        case "xue":
            match = 'snow';
            break;
        case "shachen":
            match = 'dust';
            break;
        case "wu":
            match = 'fog';
            break;
        case "bingbao":
            match = 'hail';
            break;
        case "yun":
            match = 'cloud';
            break;
        case "yu":
            match = 'rain';
            break;
        case "yin":
            match = 'cloudy';
            break;
        default:
            match = 'sunny';
    }

    return match;
}

//空气质量等级颜色匹配
function airMatch(_level) {
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

//匹配空气质量富文本
// `{styleName|text content text content}` 标记样式名。
//通过index判断rich值
function airRichMatch(value) {
    let match;
    switch (value) {
        case '优':
            match = '{level_1|优}';
            break;
        case '良':
            match = '{level_2|良}';
            break;
        case '轻度':
            match = '{level_3|轻度}';
            break;
        case '中度':
            match = '{level_4|中度}';
            break;
        case '重度':
            match = '{level_5|重度}';
            break;
        case '严重':
            match = '{level_6|严重}';
            break;
        default:
            match = '{level_0|未知}';
    }

    return match;
}

//匹配天气图标富文本
function weaLogoRichMatch(value) {
    let match;
    switch (value) {
        case "xue":
            match = '{snow|}';
            break;
        case "shachen":
            match = '{dust|}';
            break;
        case "wu":
            match = '{fog|}';
            break;
        case "bingbao":
            match = '{hail|}';
            break;
        case "yun":
            match = '{cloud|}';
            break;
        case "yu":
            match = '{rain|}';
            break;
        case "yin":
            match = '{cloudy|}';
            break;
        default:
            match = '{sunny|}';
    }
    return match;
}
