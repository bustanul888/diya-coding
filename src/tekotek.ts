class tekotek{
    private stringTekotek:string[]=[]
    public laguTekotek(jumlahAyam:number):void{
        const batas=jumlahAyam
        for(let i=0; i<batas; i++){
            this.stringTekotek.push(`Anak Ayam Turunlah ${jumlahAyam}`)
            if(jumlahAyam-1===0){
                this.stringTekotek.push(`Mati Satu Tinggallah Induknya`)
            }else{
                this.stringTekotek.push(`Mati Satu Tinggallah ${jumlahAyam-1}`)
            }
            jumlahAyam--
        }
    }
    public getLaguTekotek():string[]{
        return this.stringTekotek
    }

}

export default new tekotek()