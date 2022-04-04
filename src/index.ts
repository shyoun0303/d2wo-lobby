/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA)
    console.log('Player tags: ', WA.player.tags)
    
    
    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();

        const year = today.getFullYear(); // 년도
        const month = today.getMonth() + 1;  // 월
        const date = today.getDate();  // 날짜
        const day = today.getDay();  // 요일


        const daydate = year + '.' + month + '.' + date;
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", daydate + " " + time,[]);
    })

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)



        
    WA.room.onEnterLayer('game01Zone').subscribe(() => {
        console.log('game01Zone onEnterLayer');
        const triggerMessage = WA.ui.displayActionMessage({
            message: "Press or tap the spacebar to play the game.",
            callback: () => {
                WA.nav.openCoWebSite("https://gamesnacks.com/embed", true, "allowfullscreen");
            }
        });
        
        setTimeout(() => {
            // later
            triggerMessage.remove();
        }, 3000);
        
    })
    WA.room.onLeaveLayer('game01Zone').subscribe(() => {
        console.log('game01Zone onLeaveLayer');
        
    })
    


    WA.room.onEnterLayer('game02Zone').subscribe(() => {
        console.log('game02Zone onEnterLayer');

        const triggerMessage = WA.ui.displayActionMessage({
            message: "Press or tap the spacebar to play the game.",
            callback: () => {
                WA.nav.openCoWebSite("https://gamesnacks.com/embed", true, "allowfullscreen");
            }
        });
        
        setTimeout(() => {
            // later
            triggerMessage.remove();
        }, 3000);

    })
    WA.room.onLeaveLayer('game02Zone').subscribe(() => {
        console.log('game02Zone onLeaveLayer');
    })
    


    WA.room.onEnterLayer('game03Zone').subscribe(() => {
        console.log('game03Zone onEnterLayer');

        const triggerMessage = WA.ui.displayActionMessage({
            message: "Press or tap the spacebar to play the game.",
            callback: () => {
                WA.nav.openCoWebSite("https://buddyboardgames.com", true, "allowfullscreen");
            }
        });
        
        setTimeout(() => {
            // later
            triggerMessage.remove();
        }, 3000);
   
    })
    WA.room.onLeaveLayer('game03Zone').subscribe(() => {
        console.log('game03Zone onLeaveLayer');
    })

    


    //엑셀문서
    WA.room.onEnterLayer('doc01Zone').subscribe(() => {
        console.log('doc01Zone onEnterLayer');

        const triggerMessage = WA.ui.displayActionMessage({
            message: "Press or tap the spacebar to view the document",
            callback: () => {
                WA.nav.openCoWebSite("https://docs.google.com/spreadsheets/d/1tuUOTgNysVX5du17sYv70esSen7EC8RcuMxnVoWr0is/edit?usp=sharing", true, "allowfullscreen");
            }
        });
        
        setTimeout(() => {
            // later
            triggerMessage.remove();
        }, 3000);
   
    })
    WA.room.onLeaveLayer('doc01Zone').subscribe(() => {
        console.log('doc01Zone onLeaveLayer');
    })

    


    //ppt문서
    WA.room.onEnterLayer('doc02Zone').subscribe(() => {
        console.log('doc02Zone onEnterLayer');

        const triggerMessage = WA.ui.displayActionMessage({
            message: "Press or tap the spacebar to view the document",
            callback: () => {
                WA.nav.openCoWebSite("https://docs.google.com/presentation/d/1MFUsAmhGPr8FzK4qmD-LFSW9S8oA6xGffvmxU1av32s/edit?usp=sharing", true, "allowfullscreen");
            }
        });
        
        setTimeout(() => {
            // later
            triggerMessage.remove();
        }, 3000);
   
    })
    WA.room.onLeaveLayer('doc02Zone').subscribe(() => {
        console.log('doc02Zone onLeaveLayer');
    })

    


    //doc문서
    WA.room.onEnterLayer('doc03Zone').subscribe(() => {
        console.log('doc03Zone onEnterLayer');

        const triggerMessage = WA.ui.displayActionMessage({
            message: "Press or tap the spacebar to view the document",
            callback: () => {
                WA.nav.openCoWebSite("https://docs.google.com/document/d/1XBFf880XQiADWhP7HTxjuN6N7as6U76i0i94riQVJR8/edit?usp=sharing", true, "allowfullscreen");
            }
        });
        
        setTimeout(() => {
            // later
            triggerMessage.remove();
        }, 3000);
   
    })
    WA.room.onLeaveLayer('doc03Zone').subscribe(() => {
        console.log('doc03Zone onLeaveLayer');
    })


      


    //설문지 문서
    WA.room.onEnterLayer('doc04Zone').subscribe(() => {
        console.log('doc04Zone onEnterLayer');

        const triggerMessage = WA.ui.displayActionMessage({
            message: "Press or tap the spacebar to view the survey",
            callback: () => {
                WA.nav.openCoWebSite("https://docs.google.com/forms/d/e/1FAIpQLSdUMKWnXX_lLQgPhgpiOnIQXQxr3JhDFXvWhUmn9abE9sw1zg/viewform?usp=sf_link", true, "allowfullscreen");
            }
        });
        
        setTimeout(() => {
            // later
            triggerMessage.remove();
        }, 3000);
   
    })
    WA.room.onLeaveLayer('doc04Zone').subscribe(() => {
        console.log('doc04Zone onLeaveLayer');
    })



    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
