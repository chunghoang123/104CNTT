"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    displayType() {
        console.log(this.type);
    }
}
class FulltimeJob extends Job {
    constructor() {
        super('fulltime');
    }
    calulateSalary() {
        return 10000000;
    }
}
class ParttimeJob extends Job {
    constructor(working) {
        super('parttime');
        this.working = working;
    }
    calulateSalary() {
        return this.working * 30000;
    }
}
const fulltime = new FulltimeJob();
const parttime = new ParttimeJob(120);
fulltime.displayType();
console.log(`Salary: ${fulltime.calulateSalary()} VND`);
parttime.displayType();
console.log(`Salary: ${parttime.calulateSalary()} VND`);
