const getIcons=(icon)=>{
    switch (icon) {
        case 'mainBg':
            return require('../assets/images/mainBg.png');
        case 'headerBg':
            return require('../assets/images/header2.png');
        case 'line':
            return require('../assets/images/line.png');
        case 'button':
            return require('../assets/images/button.png');
        case 'button2':
            return require('../assets/images/button2.png');
        case 'redButton':
            return require('../assets/images/redButton.png');
        case 'userAvatar':
            return require('../assets/images/avatar.png');
        case 'polygon':
            return require('../assets/images/polygon.png');
        case 'arrowUp':
            return require('../assets/images/arrowUp.png');
        case 'arrowDown':
            return require('../assets/images/arrowDown.png');
        case 'program1':
            return require('../assets/images/program1.png');
        case 'program2':
            return require('../assets/images/program2.png');
        case 'exercise':
            return require('../assets/images/exercise.png');
        case 'doubleArrow':
            return require('../assets/images/doubleArrow.png');
        case 'singleArrow':
            return require('../assets/images/singleArow.png');
        case 'forwardImg':
            return require('../assets/images/forwardImg.png');
        case 'protineBox':
            return require('../assets/images/protineBox.png');
        case 'nutritionFacts':
            return require('../assets/images/nutritionFacts.png');
        case 'chart':
            return require('../assets/images/chart.png');
        case 'food':
            return require('../assets/images/food.png');
        case 'modalHeader':
            return require('../assets/images/modalHeader.png');
        case 'close':
            return require('../assets/images/close.png');
        case 'dumbell':
            return require('../assets/images/dumbell.png');
        case 'nutritionTab':
            return require('../assets/images/nutritionTab.png');
        case 'settings':
            return require('../assets/images/settings.png');
        case 'notification':
            return require('../assets/images/notification.png');
        case 'stats':
            return require('../assets/images/stats.png');
        default:
            return require('../assets/images/logo.png')
    }
}

export default getIcons;