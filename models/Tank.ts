export class Tank{
    id: string;
    name: string;
    dimensions: {
        length: number;
        width: number;
        height: number;
    };
    ioTId: string;
    latestMeasure: number;
    constructor(id: string, name: string, dimensions: {
        length: number;
        width: number;
        height: number;
    }, ioTId: string, latestMeasure: number){
        this.id = id;
        this.name = name;
        this.dimensions = dimensions;
        this.ioTId = ioTId;
        this.latestMeasure = latestMeasure;
    }
}