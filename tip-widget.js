async function tipImage() {
    let tips = await fetch("./googleSheetUK.json");
    tips = await tips.json();
    let matchDate = new Date().toISOString().slice(5, 10);
    let tipDate;
    let dailyTip;
    let dailyTipSource;
    let tipAlt;
    let tipTitle;
    let tipSource;
    
    for (let i = 0; i < tips.length; i += 1) {
        if (tips[i].tipOfTheDayDate !== undefined) {
            tipDate = (JSON.stringify(tips[i].tipOfTheDayDate)).substring(6, 11);
        };
        if ( tipDate === matchDate) {
            dailyTip = tips[i].id
            dailyTipSource = `./tip-images/${dailyTip}.png`;
            tipAlt = tips[i].tip;
            tipTitle = tips[i].graphicsTitle;
            break;
        };
    }
    if (dailyTipSource) {
        tipSource = dailyTipSource;
    } else {
        tipSource = `./tip-images/generic_tip_image.jpg`;
        tipAlt = "Select a category from the below options to see a tip.";
        tipTitle = "Create your own Kindspace.";
    }
    document.getElementById('tip_image').src = tipSource;
    document.getElementById('tip_image').alt = tipAlt;
    document.getElementById('tip_image').title = tipTitle;
};
