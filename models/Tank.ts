export class Tank{
    id: string;
    name: string;
    dimensions: {
        length: number;
        width: number;
        height: number;
    };
    ioTId: string;
    percentFilled: number;
    constructor(id: string, name: string, dimensions: {
        length: number;
        width: number;
        height: number;
    }, ioTId: string, percentFilled: number){
        this.id = id;
        this.name = name;
        this.dimensions = dimensions;
        this.ioTId = ioTId;
        this.percentFilled = percentFilled;
    }
}