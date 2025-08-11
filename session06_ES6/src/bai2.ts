abstract class Job {
    protected type :string;
    constructor(type:string){
        this.type = type;
    }
    public displayType():void{
        console.log(this.type);
    }
    public abstract calulateSalary():number;
}

class FulltimeJob extends Job {
    constructor(){
        super('fulltime');
    }
    public calulateSalary():number{
        return 10000000;
    }
}

class ParttimeJob extends Job {
    private working:number;
    constructor (working:number){
        super('parttime');
        this.working=working;
    }
    public calulateSalary(): number {
        return this.working * 30000;
    }
}

const fulltime = new FulltimeJob();
const parttime = new ParttimeJob(120);
fulltime.displayType();
console.log(`Salary: ${fulltime.calulateSalary()} VND`);

parttime.displayType();
console.log(`Salary: ${parttime.calulateSalary()} VND`);