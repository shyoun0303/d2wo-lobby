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
            message: "Press SPACE to play Games",
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
            message: "Press SPACE to play Games",
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
            message: "Press SPACE to play Games",
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
