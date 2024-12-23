class Perkalian4Angka{
    private nilaiTerbesar:number=0
    private numArray:number[][]=[]
    private horizontalNum:number=0
    private verticalNum:number=0
    private diagonalNum:number=0
    public strToArray(str:string):void{
        let arr=str.split(" ")
        for(let i=0; i<arr.length; i+=20){
            let tmp=[]
            for(let j=i; j<i+20; j++){
                tmp.push(Number(arr[j]))
            }
            this.numArray.push(tmp)
            tmp=[]
        }

    }
    public getArray():number[][]{
        return this.numArray
    }
    public hitungHorizontal(arr:number[][]):void{
        for(let h=0; h<arr.length; h++){
            for(let i=0; i<arr.length-3; i++){
                let tmp=1
                for(let j=i; j<i+4; j++){
                    tmp*=arr[h][j]
                }
                // this.horizontalArray.push(tmp)
                if (tmp>this.horizontalNum) this.horizontalNum=tmp
                tmp=1
            }
        }

    }
    public getHorizontal():number{
        return this.horizontalNum
    }
    public hitungVertical(arr:number[][]):void{
        for(let v=0; v<arr.length; v++){
            for(let i=0; i<arr.length-3; i++){
                let tmp=1
                for(let j=i; j<i+4; j++){
                    tmp*=arr[j][v]
                }
                if(tmp>this.verticalNum) this.verticalNum=tmp
                tmp=1
            }
        }
        
    }
    public getVertical():number{
        return this.verticalNum
    }
    public hitungDiagonal(arr:number[][]):void{
        let len = arr.length-1
        for(let i=0; i<=len-3; i++){
            for(let j=0; j<arr[i].length-3; j++){
                let rightDiagonal=1
                let leftDiagonal=1
                for(let k=0; k<4; k++){
                    rightDiagonal*=arr[i+k][j+k]
                    leftDiagonal*=arr[i+k][len-j-k]
                }
                if(rightDiagonal>this.diagonalNum) this.diagonalNum=rightDiagonal
                if(leftDiagonal>this.diagonalNum) this.diagonalNum=leftDiagonal
                rightDiagonal=1
                leftDiagonal=1
            }
        }
    }
    public getDiagonal():number{
        return this.diagonalNum
    }
    public hitungNilaiTerbesar(H:number,V:number,D:number):void{
        if(H>this.nilaiTerbesar) this.nilaiTerbesar=H
        if(V>this.nilaiTerbesar) this.nilaiTerbesar=V
        if(D>this.nilaiTerbesar) this.nilaiTerbesar=D
    }
    public getNilaiTerbesar():number{
        return this.nilaiTerbesar
    }
}

export default new Perkalian4Angka()