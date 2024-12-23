class sqrt{
    result=0
    public hitungSqrt(x:number):void{
        let low=0
        let high=x
        while(low<=high){
            let mid=Math.floor((low+high)/2)
            let val=mid*mid
            if(val<=x){
                low=mid+1
            }else{
                high=mid-1
            }
        }
        this.result=high
    }
    public getSqrt():number{
        return this.result
    }
}

export default new sqrt()