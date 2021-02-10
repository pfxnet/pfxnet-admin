

/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * @author SuperManic
 * 
 */
//const api_origin = 'https://pfxnet-api.herokuapp.com/';
const api_origin = 'https://api.pfxnet.com/'; 
//api_origin = 'http://localhost:9000/'
console.log(api_origin)

class EasyHTTP{
    // Make an HTTP GET Request
    async get(url){
        console.log(token)
        try {
            const res = await fetch(`${api_origin}${url}`, {
               headers:{
                  'Authorization':`Bearer ${token}`,
                  'Accept':'application/json',
                  'Content-type':'application/json',
                  'Access-Control-Allow-Origin':'*'
               }
           })
         
           const resData = await res.json()
           return resData
        } catch (e) {
            throw new Error(e.message)
        }
    }
      // Make an HTTP POST Request
      async postLogin(url,data){
      
        try {
          const res = await fetch(`${api_origin}${url}`, {
                method:'POST',
                headers:{
                 'Accept':'application/json',
                 'Content-type':'application/json',
                 'Access-Control-Allow-Origin':'*'
                 
                },
                body:JSON.stringify(data) //convert to JSON string
            })
           const postedData = await res.json()
           return postedData

        } catch (e) {
           // res.status(400).send(e)
           throw new Error(e)
        }
       
   
 }
    // Make an HTTP POST Request
    async post(url,data){
       console.log(url)
      
           try {
             const res = await fetch(`${api_origin}${url}`, {
                   method:'POST',
                   headers:{
                    'Authorization': `Bearer ${token}` || null,
                    'Accept':'application/json',
                    'Content-type':'application/json',
                    'Access-Control-Allow-Origin':'*'
                    
                   },
                   body:JSON.stringify(data) //convert to JSON string
               })
              const postedData = await res.json()
              return postedData

           } catch (e) {
              // res.status(400).send(e)
              throw new Error(e)
           }
          
      
    }

       // Make an HTTP PUT/UPDATE Request
       async put(url,data){
   
             try {
             const res = await fetch(`${api_origin}${url}`, {
                   method:'PUT',
                   headers:{
                    'Authorization':`Bearer ${token}` || null,
                    'Accept':'application/json',
                    'Content-type':'application/json',
                    'Access-Control-Allow-Origin':'*'
                   },
                   body:JSON.stringify(data)
               })
               const editedData = await res.json()
               return editedData
             } catch (e) {
                throw new Error(e)
             }
           
        }
 

            // Make an HTTP DELETE Request
      async delete(url){
         try {
         const res = await fetch(`${api_origin}${url}`, {
               method:'DELETE',
               headers:{
                'Authorization':`Bearer ${token}` || null,
                'Accept':'application/json',
                'Content-type':'application/json',
                'Access-Control-Allow-Origin':'*'
               },
             
           })
          const deleteRes = await res.json()
          return deleteRes
         } catch (e) {
            throw new Error(e)
         }
       
            
        }
}