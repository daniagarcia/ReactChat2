'use strict'
export class logicaLogin{
 
    //  constructor(props){
    //      super(props)
    //      this.state={}

    // }

    async login() {
        try{
            let response = await fetch(
               ' http://192.168.1.130:3333/login'
            );
            let responseJsonLogin = await response.json();
            return responseJsonLogin
        }catch(error){
            console.error(error)
        }
    }


}