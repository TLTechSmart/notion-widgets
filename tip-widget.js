async function tipImage() {
    let tips = await fetch("./googleSheetUK.json");
    tips = await tips.json();
    let matchDate = new Date().toISOString().slice(0, 10);
    let tipDate;
    let dailyTip;
    let dailyTipSource;
    let tipAlt;
    let tipTitle;
    let tipSource;
    
    for (let i = 0; i < tips.length; i += 1) {
        if (tips[i].tipOfTheDayDate !== undefined) {
            tipDate = (JSON.stringify(tips[i].tipOfTheDayDate)).substring(1, 11);
        };
        if ( tipDate === matchDate) {
            dailyTip = tips[i].id
            dailyTipSource = `./tip-images/${dailyTip}.png`;
            tipAlt = `${tips[i].tipText}.`;
            tipTitle = `${tips[i].graphicTitle}.`;
            break;
        };
    }
    if (dailyTipSource) {
        tipSource = dailyTipSource;
    } else {
        tipSource = `./tip-images/generic_tip_image.jpg`;;
    }
    document.getElementById('tip_image').src = tipSource;
    document.getElementById('tip_image').alt = tipAlt;
    document.getElementById('tip_image').title = tipTitle;
};
