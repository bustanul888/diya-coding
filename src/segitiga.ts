class Segitiga{
    private luas=0
    private keliling=0
    public hitungLuas(alas:number,tinggi:number):void{
        this.luas=(1/2*alas)*tinggi
    }
    public hitungKeliling(sisi1:number,sisi2:number,sisi3:number):void{
        this.keliling=sisi1+sisi2+sisi3
    }
    public getLuas():number{
        return this.luas
    }
    public getKeliling():number{
        return this.keliling
    }
}
export default new Segitiga()