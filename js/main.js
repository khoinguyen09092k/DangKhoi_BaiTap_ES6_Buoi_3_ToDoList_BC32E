import { Work } from "./work.js";

import { WorkList } from "./workList.js";


const dom = (id) => {
    return document.getElementById(id)
}

const workService = new WorkList()

const renderWork = () => {
    const content = workService.WorkList.reduce((value, work) => {
        return value += `
        <li><i style="color:black; font-weight:bold ; font-size:22px" >${work.congViec}</i> <i class="fa-solid fa-trash-can" style="color:black ;font-size:22px" onclick="removeWork('${work.congViec}')"></i> <i style="color:black ;font-size:22px" class="fa-solid fa-circle-check" onclick="tickWork('${work.congViec}')"></i> </li>
        `
    }, '')
    dom('todo').innerHTML = content
}


// thêm task
dom('addItem').onclick = () => {
    const inputs = document.querySelectorAll('input');
    const work = new Work()
    inputs.forEach((input) => {
        // sử dụng destructuring
        const { name, value } = input
        work[name] = value

    })
    workService.addWork(work)
    //console.log(work);
    renderWork();
    dom('newTask').value = "";
    // console.log(work);
}
// xóa task
window.removeWork = (congViec) => {
    workService.removeWork(congViec);
    renderWork()
}
// tạo hàm xuất cách việc đã hoàn thành
const temp = []
window.tickWork = (congViec) => {
    const renderWorkComplete = () => {

        const work = workService.findWork(congViec)
        temp.push(work.congViec);
        console.log(temp);
        let html = "";
        for (const value of temp) {
            html += `
            <li><i style="color:chartreuse; font-weight:bolder; font-size:22px">${value}</i> <i class="fa-solid fa-trash-can" style="font-size:22px"></i> <i class="fa-solid fa-circle-check"  style="color:chartreuse ; font-size:22px"></i> </li>
            `
        }
        document.getElementById('completed').innerHTML = html;

    }
    renderWorkComplete()
    workService.removeWork(congViec);
    renderWork()
}

dom('two').onclick = () => {

   workService.WorkList.sort( (a, b) =>  ('' + a.congViec).localeCompare(b.congViec) );
   renderWork();
}

dom('three').onclick = () => {

    workService.WorkList.sort( (a, b) =>  ('' + b.congViec).localeCompare(a.congViec) );
    renderWork();
 }
 

