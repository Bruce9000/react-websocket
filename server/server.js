import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

const names = ["Admiral Ackbar", "Cassian Andor", "Wedge Antilles", "Lando Calrissian", "Chewbacca", "Poe Dameron", "Biggs Darklighter",
    "The Mandolorian", "Count Dooku", "Jyn Erso", "Boba Fett", "Greedo", "Jabba the Hutt", "Qui-Gon Jinn", "Obi-Wan Keboni", "Darth Maul",
    "Leia Organa", "Emperor Palpatine", "Rey", "Darth Vader", "Luke Skywalker", "Kylo Ren", "Han Solo",
"Grand Admiral Thrawn", "Mace Windu", "Yoda"];

    const props = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike",
"november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu"];

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    setInterval(() => {
        ws.send(JSON.stringify(generatePayload()));
    }, 1000);
});

const generatePayload = () => {
    return names.map(n => ({ name: n, ...assignRandomValues() }));
};

// min and max included
const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const assignRandomValues = () => {
    const obj = {};
    props.forEach(p => obj[p] = randomIntFromInterval(1, 100));
    return obj;
};