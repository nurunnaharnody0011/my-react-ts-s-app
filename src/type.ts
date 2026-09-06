export interface Country {
  name: {
    common: string;
    official: string;
  },
  ccn3:{
    ccn3:string
  },
  population:{
    population:number},
  languages:{
    languages:{
      [key:string]:string
    }
  },
  flags:{
    flags:{
      png:string,
      alt:string
    }
  }

}
