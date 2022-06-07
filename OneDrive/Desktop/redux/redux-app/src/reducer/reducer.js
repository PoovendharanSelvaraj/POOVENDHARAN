
let initialState={
    count:0,
    userValue:0,
    multiplyValue:0,
    divideValue:0
}

export const reducer = (state=initialState,action)=>{
    if(action.type === "add"){
        state.count++;
    }
    else if(action.type==="decre"){
        state.count--;
    }
    else if(action.type === "plus"){
        state.userValue++;
    }
    else if(action.type==="minus"){
        state.userValue--;
    }
    else if(action.type === "multiply"){
        state.multiplyValue=state.count*state.userValue;
    }
    else if(action.type === "divide"){
        state.divideValue=state.count/state.userValue;
    }
    // switch(action.type){
    //     case "add":
    //         return state.count++;
    //         break;
    //     case "decre":
    //         return state.count--;
    //         break;
    //     case "plus":
    //         return state.userValue++;
    //         break;
    //     case "minus":
    //         return state.userValue--; 
    //         break;   
    //     default:
    //         return state;
    // }
    console.log(state,action)
    return {...state};
}