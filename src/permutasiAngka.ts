class permutation{
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
    public permuteNumber(str:string[]):number[]{
        let perms=this.permutasi(str)
        let permute:number[]=[]
        for(let i=0; i<perms.length; i++){
            permute.push(Number(perms[i]))
        }
        return permute
    }
    public findMax(nums:number[]):number{
        let maxNumberOfPerm=0
        for(let i=0; i<nums.length; i++){
            if(nums[i]>maxNumberOfPerm) maxNumberOfPerm=nums[i]
        }
        return maxNumberOfPerm
    }
}

export default new permutation()