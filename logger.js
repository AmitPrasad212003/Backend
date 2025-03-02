import { createLogger,format, transports } from "winston";
const { combine, timestamp, json, colorize } = format;

//Custom format for console logging with colors
const consoleLogFromat = format.combine(
    format.colorize(),
    format.printf(({ level, message, timestamp}) => {
        return `${level}: ${message}`;
    })
);


//Create a Winston logger
const logger = createLogger({
    level: 'info',
    format: combine(
        colorize(),
        timestamp(),
        json()
    ),
    transports: [
        new transports.Console({
            format: consoleLogFromat
        }),
        new transports.File({ filename: 'app.log'})
    ],
});

export default logger;