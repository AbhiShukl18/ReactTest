export const ADD="ADD";
export const REMOVE="REMOVE";

export const add=(id, todo)=>{

    const task={

        id: id,
        task: todo
    }
    return{

        type: ADD,
        payload:task
    }
}

export const remove=(id)=>{

    return{

        type: REMOVE,
        payload:id
    }
}