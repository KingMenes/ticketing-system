import tickets from "./tickets.json" assert { type: 'json' };
import * as fs from 'fs';
import { cursorTo } from "readline";

function chargeCode() {
    var result = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charLength = chars.length;
    for (var i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;

}

function pickPriority() {
    switch (Math.floor(Math.random * 3) + 1) {
        case 1:
            return 'High';

        case 2:
            return 'Medium';

        case 3:
            return "Low";
        default:
            return 'Low';

    }


}

function pickStatus() {
    switch (Math.floor(Math.random * 2) + 1) {
        case 1:
            return 'Resolved';

        case 2:
            return 'Open';

        case 3:
            return "In Progress";
        default:
            return 'Open';

    }
}

function pickCat() {
    switch (Math.floor(Math.random * 4) + 1) {
        case 1:
            return 'Engineering';

        case 2:
            return 'Fixture';

        case 3:
            return "Misc";

        case 4:
            return "Prototype";

        default:
            return 'Misc';

    }
}
var dummyData = [];

for (var key in tickets) {
    dummyData.push(tickets[key]);
    dummyData[key].title = tickets[key].title
    dummyData[key].description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    dummyData[key].charge = chargeCode();
    dummyData[key].assigned = tickets[key].assigned;
    dummyData[key].priority = pickPriority();
    dummyData[key].status = pickStatus();
    dummyData[key].category = pickCat();
}

// fs.writeFile("tickets.json", JSON.stringify(dummyData), function (err) {
//     if (err) throw err;
//     console.log('Generated tickets.json');
// }
// );

const count = dummyData.reduce((acc, cur) => cur.priority === 'Low' ? ++acc : acc, 0)
console.log(count)