export class showShiftDTO {
    id;
    shift_name;
    start_time;
    end_time;

    constructor({ id, shift_name, start_time, end_time }){
        this.id = id
        this.shift_name = shift_name
        this.start_time = start_time
        this.end_time = end_time
    }
}