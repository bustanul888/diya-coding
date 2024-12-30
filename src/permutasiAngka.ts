class permutation{
    private permute:number[]=[]
    private maxNumberOfPerm=0
    public permutasi(str:string[]):string[][]{
        let result:string[][]=[]
        if(str.length===1){
            result.push(str)
        }

        for(let i=0; i<str.length; i++){
            let currNum=str[i]
            let sisa=str.slice(0,i).concat(str.slice(i+1))
            let perms=this.permutasi(sisa)
            for(let j=0; j<perms.length; j++){
                result.push([currNum+perms[j]])
            }
        }
        return result
    }
    public permuteNumber(str:string[]):void{
        let perms=this.permutasi(str)
        for(let i=0; i<perms.length; i++){
            this.permute.push(Number(perms[i]))
        }
    }
    public getPermuteNumber():number[]{
        return this.permute
    }
    public findMax(nums:number[]):void{
        for(let i=0; i<nums.length; i++){
            if(nums[i]>this.maxNumberOfPerm) this.maxNumberOfPerm=nums[i]
        }
    }
    public getMaxNumber():number{
        return this.maxNumberOfPerm
    }
    public clearVal():void{
        this.permute=[]
        this.maxNumberOfPerm=0
    }
}

export default new permutation()