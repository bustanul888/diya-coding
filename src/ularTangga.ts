class papanUlarTangga{

    public findPapan(str:string):number[][]{
        const papan:number[][]=[]
        let val=1
        for(let i=0; i<parseInt(str); i++){
            let temp=[]
            for(let j=0; j<parseInt(str); j++){
                temp.push(val)
                val++
            }
            papan.push(temp)
        }
        return papan
    }
    public findMid(nums:number[][]):number{
        let mid=nums[Math.floor(nums.length/2)][Math.floor(nums.length/2)]
        return mid
    }
    public findResults(nums:number[][]):number{
        let result=0
        for(let i=(Math.floor(nums.length/2))-1; i<=(Math.floor(nums.length/2))+1; i++){
            for(let j=(Math.floor(nums.length/2))-1; j<=(Math.floor(nums.length/2))+1; j++){
                if(nums[i][j]!==this.findMid(nums)) result+=nums[i][j]
            }
        }
        return result
    }
}

export default new papanUlarTangga()