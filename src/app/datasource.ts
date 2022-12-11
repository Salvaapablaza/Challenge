interface dataKey {
name:String;
type:String;
label:String;
color:String;
settings:Object;
_hash:number;
hidden:boolean;
inLegend:boolean;
pattern:String;
tooltipValueFormatFunction:null
}



export interface datasource {
    type: String;
    name: String;
    entityAliasId: String;
    filterId: null;
    dataKeys: dataKey[];
    aliasName:String;
    entityFilter:Object;
    pageLink:Object;
    dataReceived:boolean;
    entity:Object;
    entityId:String;
    entityType:String;
    entityName:String;
    entityLabel:String;
    entityDescription:String;
    generated:boolean;
  
   
  }

  export interface datainput{
  datasource:datasource;
  dataKey:dataKey;
  lines:object;
  stack:boolean;
  points:object;
  highlightColor:String;
  xaxisIndex:number;
  xaxis:number;
  yaxisIndex:number;
  yaxis:number;
  data:Array<number[]>;
  }
