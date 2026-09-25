//will replace with Supabase data provider API link 
const API_URL ="https://api.fake-rest.refine.dev";

//establishing CRUD functionality for the data provider but data is not being called yet 
export const dataProvider = {
    
    getOne: async({resource, id, meta})=>{ //async takes one object and destructs it into three variables 
        //builds a URL of this template and requests it
        const repsonse = await fetch(`${API_URL}/${repsonse}/${id}`);
        //if the repsonse is unsuccessful then throws the repsonse as an error 
        if(response.status <200 || response.status>299 ) throw response;

        //reponse is passed from JSON to a real JavaScript object 
        const data = await response.json();
        return{data}; //returns an object with the a data property containing the parsed record
        
    },
    getMany: () => {
    throw new Error("Not implemented");
    },
    update: () => {
    throw new Error("Not implemented");
    },
    updateMany: () => {
    throw new Error("Not implemented");
    },
    getList: () => {
    throw new Error("Not implemented");
    },
    create: () => {
    throw new Error("Not implemented");
    },
    createMany: () => {
    throw new Error("Not implemented");
    },
    delete: () => {
    throw new Error("Not implemented");
    },
    deleteMany: () => {
    throw new Error("Not implemented");
    },
    getApiUrl: () => {
    throw new Error("Not implemented");
    },

}