// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export const AddTask =()=>{
 const Items={
        id:uuid.v4(),
        value:this.input.current.value,
        Date: new Date().toUTCString()
    };

    if(localStorage.getItem('list')==null){
        const list=[]
        list.push(Items);
        localStorage.setItem("list",JSON.stringify(list))
    }
    else{
        const list=JSON.parse(localStorage.getItem('list'))
        list.push(Items)
        localStorage.setItem("list",JSON.stringify(list))
    }
    this.setState({
        list:JSON.parse(localStorage.getItem('list'))
    });
}
