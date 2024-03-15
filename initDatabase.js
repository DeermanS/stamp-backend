var dbConnection = require('./database');

// create table for stamps
async function initStampsTable (){
    await dbConnection.db.any(
        `CREATE TABLE IF NOT EXISTS stamps (
            id SERIAL PRIMARY KEY, 
            PCName VARCHAR(255) NOT NULL, 
            PCInfo VARCHAR(255) NOT NULL,
            Image VARCHAR(255) NOT NULL,
            PCAddress VARCHAR(255) NOT NULL,
            PCTag VARCHAR(255) NOT NULL,
            PCSize VARCHAR(255) NOT NULL
        );`)
}
var data1 = `('CHERRY GROVE - CHERRY', 'cherry season, a city of cherry festival',
'https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/alberta/AB_Cherry_Grove_19755.jpg',
'Cherry Grove PO / Hwy 556 / Cherry Grove AB  T0A 0T0','Alberta, Cherry, Fruits, Fruit', '40mm x 40mm')`
var data2 = `('COBBLE HILL - GRAPES', 'a city of grapes and wines',
'https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/britishcolumbia/BC_COBBLE_HILL-19101.jpg',
'Cobble Hill PO / 3559 Garland Ave / Cobble Hill BC  V0R 1L0','British Columbia, Grapes, Fruits, Foods', '38mm x 38mm')`
var data3 = `('PEACHLAND - OGOPOGO', 
'Ogopogo is Kelowna city"s mascot',
'https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/britishcolumbia/BC_Peachland_21220_.jpg',
'Peachland PO / 19 - 5500 Clements Cres / Peachland BC  V0H 1X0',
'British Columbia, Dragon, Ogopogo, Mascot',
'42mm x 42mm')`
var data4 = `('HARVEY STATION - VIOLIN', 'a historial city with beatutiful violin',
'https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/newbrunswick/NB_Harvey_Station_21186.jpg',
'Harvey Station / 1956 Route 3 / Harvey Station NB  E6K 1H0', 'New Brunswick, Violin, music, instrument', '40mm x 40mm')`
var data5 = `('CHRISTMAS ISLAND - CHRISTMAS', 'a place where santa claus lives',
'https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/novascotia/NS_Christmas_Island_19003_red.jpg',
'Christmas Island Stn Main / 8499 Grand Narrows Hwy / Christmas Island NS  B1T 1A0', 'Nova Scotia, Christmas, winter, red-ink','45mm x 45mm')`

// insert some user sample data into users table
async function insertStamps (){
    await dbConnection.db.any(
        `INSERT INTO stamps (PCName, PCInfo, Image, PCAddress, PCTag, PCSize)
        VALUES ${data1}, ${data2},${data3},${data4},${data5}
        ;`)
}

//init database
initStampsTable().then().then(insertStamps).then(()=>console.log("finished init."))
