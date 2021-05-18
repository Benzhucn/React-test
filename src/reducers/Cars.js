const Cars = (state=[], action={}) =>{
    switch(action.type){
      case 'ADD_CARS':
        const newState = [...state];
        newState.push(action.payload);
        return newState;

      case 'GET_CARS':
        const intState = ['Cheery', 'BMW'];
        return intState;

      default:
        return state;
    }
  
  }

export default Cars