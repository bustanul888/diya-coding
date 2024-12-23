class duplicate2{
    public containesNearbyDuplicate(nums:number[],k:number):boolean{
        const numsMap = new Map()

        for(let i=0; i<nums.length; i++){
            if(!numsMap.has(nums[i])) numsMap.set(nums[i],i)
            else{
                if(Math.abs(numsMap.get(nums[i]) -i ) <= k) return true
                numsMap.set(nums[i],i)
            }
        }
        return false
    }
}

export default new duplicate2()