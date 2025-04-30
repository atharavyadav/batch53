const fs = require('fs');
const path = require('path');

class Logger {
    constructor() {
        this.logsDir = path.join(__dirname, '../../logs'); // Base logs directory
        this.currentLogDir = null;
    }

    initialize() {
        // Ensure the base logs directory exists
        if (!fs.existsSync(this.logsDir)) {
            fs.mkdirSync(this.logsDir, { recursive: true });
        }

        // Get the current date in YYYY-MM-DD format
        const currentDate = new Date().toISOString().split('T')[0];
        this.currentLogDir = path.join(this.logsDir, currentDate);

        // Delete previous log directories except the current one
        this.cleanupOldLogs();

        // Create the current log directory
        if (!fs.existsSync(this.currentLogDir)) {
            fs.mkdirSync(this.currentLogDir);
        }
    }

    cleanupOldLogs() {
        const logDirs = fs.readdirSync(this.logsDir);
        logDirs.forEach((dir) => {
            const dirPath = path.join(this.logsDir, dir);
            if (dirPath !== this.currentLogDir && fs.lstatSync(dirPath).isDirectory()) {
                fs.rmSync(dirPath, { recursive: true, force: true });
            }
        });
    }

    log(message) {
        if (!this.currentLogDir) {
            throw new Error('Logger is not initialized. Call initialize() first.');
        }

        const logFile = path.join(this.currentLogDir, 'log.txt');
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}\n`;

        fs.appendFileSync(logFile, logMessage, 'utf8');
    }
}

module.exports = new Logger();