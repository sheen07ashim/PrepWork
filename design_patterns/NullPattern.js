class Device {
    constructor(name, serial){
        this.name = name;
        this.serial = serial;
    }

    getSerial(){
        return this.serial;
    }
    getName(){
        return this.name;
    }
}

class Generic {
    constructor(){
        this.name = 'Generic';
        this.serial = 101;
    }

    getSerial(){
        return this.serial;
    }
    getName(){
        return this.name;
    }
}

const devices = [
    new Device('Iphone', 111),
    new Device('Android', 222)
]

function printDeviceName(serial){
    console.log(findDevice(serial).getName());
}

function findDevice(serial){
    for(let i =0; i< devices.length; i++){
        if(devices[i].getSerial() === serial) return devices[i];
        
    }
    return new Generic();
}

printDeviceName(2221);