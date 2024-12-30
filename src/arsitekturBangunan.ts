class arsitektur{
    private kasus:number[][]=[]
    private colorStack:number[]=[]
    public findKasus(str:string):void{
        let strArr=str.split(" ")
        let nLoop=parseInt(strArr[0])
        strArr.shift()
        while(nLoop!==0){
            let temp=[]
            let currCase=strArr[0]
            strArr.shift()
            for(let i=0; i<parseInt(currCase); i++){
                temp.push(parseInt(strArr[i]))
            }
            strArr.splice(0,parseInt(currCase))
            let sortTemp=temp.sort((a,b)=> Math.abs(b)-Math.abs(a))
            this.kasus.push(sortTemp)
            nLoop--
        }
    }
    public getKasus():number[][]{
        return this.kasus
    }
    public findStack(nums:number[][]):void{
        for(let i=0; i<nums.length; i++){
            let temp=0
            for(let j=0; j<nums[i].length; j++){
                if((nums[i][j]>0||nums[i][j]<0) && j===0) temp++
                if((nums[i][j]<0 && nums[i][j-1]>0)||(nums[i][j]>0 && nums[i][j-1]<0)) temp++
            }
            this.colorStack.push(temp)
        }
    }
    public getColorStack():number[]{
        return this.colorStack
    }
}

export default new arsitektur()