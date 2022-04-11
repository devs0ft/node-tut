const os = require('os')

const user = os.userInfo();
console.log(user);

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name:os.type(),
    version:os.release(),
    TotalMem:os.totalmem(),
    FreeMem:os.freemem()
}
console.log(currentOs);