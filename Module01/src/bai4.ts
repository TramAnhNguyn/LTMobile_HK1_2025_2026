class Rectangle {
    private width: number;
    private height: number;

    public constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    public getWidth(): number{
        return this.width;
    }

    public getHeight(): number{
        return this.height;
    }

    public getArea(): number{
        return this.width * this.height;
    }

    public getPerimeter(): number{
        return 2 *(this.width + this.height);
    }
}

var rect = new Rectangle(5, 10);
console.log('-----Rectangle-----')
console.log("Area:", rect.getArea());
console.log("Perimeter:", rect.getPerimeter());