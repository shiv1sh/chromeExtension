let myLeads=[]
// myLeads=JSON.parse(myLeads)
// myLeads.push("www.javascript.com")
// myLeads=JSON.stringify(myLeads)
// console.log(myLeads)
// console.log(typeof myLeads)
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("uli")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()
const tabBtn=document.getElementById("tab-btn")
tabBtn.addEventListener("click",function(){
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads) )
    renderLead(myLeads)
   })
})
const deleteBtn=document.getElementById("delete-btn")
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage!=null){
  myLeads=leadsFromLocalStorage
  renderLead(myLeads)
}
deleteBtn.addEventListener("dblclick",function(){
  console.log("double clicked")
  localStorage.clear()
  myLeads=[]
  renderLead(myLeads)
})
function renderLead(leads){
  let listItems=""
  for(let i=0;i<leads.length;i++){
    listItems+= `
                 <li>
                   <a href='${leads[i]}' target='_blank'>
                      ${leads[i]}
                   </a>
                 </li>
                 `
  }
  ulEl.innerHTML=listItems

}
//console.log(localStorage.getItem("myLeads"))
inputBtn.addEventListener("click",function(){
  myLeads.push(inputEl.value)
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLead(myLeads)
  //console.log(localStorage.getItem("myLeads"))
  clearInput()
})

function clearInput(){
  inputEl.value=""
}
//learn code with durgesh
