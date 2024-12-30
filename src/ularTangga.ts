class papanUlarTangga{
    private papan:number[][]=[]
    private mid:number=0
    private results:number=1
    public findPapan(str:string):void{
        let val=1
        for(let i=0; i<parseInt(str); i++){
            let temp=[]
            for(let j=0; j<parseInt(str); j++){
                temp.push(val)
                val++
            }
            this.papan.push(temp)
        }
    }
    public getPapan():number[][]{
        return this.papan
    }
    public findMid(nums:number[][]):void{
        this.mid=nums[Math.floor(nums.length/2)][Math.floor(nums.length/2)]
    }
    public getMid():number{
        return this.mid
    }
    public findResults(nums:number[][]):void{
        for(let i=(Math.floor(nums.length/2))-1; i<=(Math.floor(nums.length/2))+1; i++){
            for(let j=(Math.floor(nums.length/2))-1; j<=(Math.floor(nums.length/2))+1; j++){
                if(nums[i][j]!==this.mid) this.results*=nums[i][j]
            }
        }
    }
    public getResults():number{
        return this.results
    }
    public clearResults():void{
        this.papan=[]
        this.mid=0
        this.results=1
    }
    // public generalResults(str:string):void{
    //     let strArr=str.split(" ")
    //     for(let i=0; i<strArr.length; i++){
    //         if(i!==0){
    //             this.findPapan(strArr[i])
    //             let findUlarTangga=this.getPapan()
    //             let findTengah=this.findMid(findUlarTangga)
    //             this.findResults(findUlarTangga)
    //             this.genResults.push(this.getResults())
    //             // this.papan=[]
    //         }
    //         this.results=[]
    //         this.mid=0
    //     }
    // }
    // public getGeneralResults():number[][]{
    //     return this.genResults
    // }
}

export default new papanUlarTangga()