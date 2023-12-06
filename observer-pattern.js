// là  mô hình chủ thể, duy trì một danh sách các đối tượng phụ thuộc của nó, gọi là quan sát viên, để thông báo về bất kỳ thay đổi nào trong trạng thái của chủ thể

// quan sát
class Observer {
    constructor(name) {
        this.namePick = name
    }
    updateStatus(location) {
        this.gotoHelp(location)
    }

    gotoHelp(location) {
        console.log(`${this.namePick} need help in ${JSON.stringify(location)}`)
    }
}

// chủ thể
class Subject {
    constructor() {
        this.ObserverList = []
    }
    addObserver(observer) {
        this.ObserverList.push(observer)
    }
    notify(location) {
        this.ObserverList.forEach(observer => observer.updateStatus(location))
    }
}


const subject = new Subject()

const leesin = new Observer('Leesin') 
const masteryi = new Observer('Master Yi')

// add charater to team
subject.addObserver(leesin)
subject.addObserver(masteryi)

// push location to team
subject.notify({long: 123, lat:345})