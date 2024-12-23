class Sort{
    private sort:number[]=[]
    public sortAscending(arr:number[]):void{
        const panjangArr=arr.length
        for(let i=0; i<panjangArr; i++){
            for(let j=0; j<panjangArr-1; j++){
                let temp=0
                if(arr[j]>arr[j+1]){
                    temp=arr[j]
                    arr[j]=arr[j+1]
                    arr[j+1]=temp
                }
            }
        }
        this.sort=arr
    }
    public sortDescending(arr:number[]):void{
        const panjangArr=arr.length

        for(let i=0; i<panjangArr; i++){
            for(let j=0; j<panjangArr-1; j++){
                let temp=0
                if(arr[j]<arr[j+1]){
                    temp=arr[j]
                    arr[j]=arr[j+1]
                    arr[j+1]=temp
                }
            }
            this.sort=arr
        }
    }
    public getSort():number[]{
        return this.sort
    }
}
export default new Sort()