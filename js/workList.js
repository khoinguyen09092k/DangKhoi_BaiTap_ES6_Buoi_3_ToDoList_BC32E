export class WorkList {
    WorkList= []
    selectedType = ''
    addWork(work){
        this.WorkList = [...this.WorkList, work]
    }
   
    removeWork(congViec){
        this.WorkList = this.WorkList.filter((work)=>{
            if(work.congViec === congViec){
                return false
            }
            return true
        })
    }
    findWork(congViec) {
        return this.WorkList.find(work => work.congViec === congViec)
    }

    // updateWork(work) {
       
    //     this.WorkList = this.WorkList.map(value => {
    //         return value.congViec === work.congViec ? work : value
    //     })
    // }
    // filterWork(){
    //     return this.WorkList.sort((work) => {
    //         if (this.selectedType === work.congViec) {
    //             return true
    //         }
    //         return false
    //     })
    // }
}