export interface Users{
    id:string;
    name:string;
    username:string;
    email:string;
    address:{
        street:string ;
        suite: string;
        city: string;
        zipcode: string;
    };
    phone:string;
    website:string;
    company:{
        name: string;
      catchPhrase:string;
      bs: string;
    };

}

export interface album{
    id:string;
    userId:string;
    title:string;
}

export interface posts{
    id:string;
    userId:string;
    title:string;
    body:string;
}