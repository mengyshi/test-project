<template>
<div>
{{resource+reourceList[0]}}
</div>
</template>
<script>
import resource from "./resource.js"
 export default{
 	data(){
 		return{
 			router:"",
 			reourceList:[],
 			resource:""


 		}
 		
 	},
 	methods:{

 		getRouter(item,url,flag){

 				
           
         if(this.reourceList.length>0){
 			
 					return
 				}
 			if(Array.isArray(item)){
 				
 			for(var v of item){

 				if(v.resourceUrl==url||v.resourceType==0){
 					
 						if(v.resourceType==1){
 							this.resource=v.resourceUrl;		
 						}	
 						
 						if(v.children&&v.resourceType!=0){
 							
 								this.getRouter(v.children,url,1)
 						}
 						else{
 							this.getRouter(v.children,url,0)
 						}		
 				}
 				else if(flag){
 					
 						this.getRouter(v,url,1)

 					

 				}
 					else{
 						
 						continue;

 					}

 			}
 				
 						}
 					
 			

 			else if(flag) {

 				
 				this.reourceList.push(item.resourceUrl);
 		   
 			}
		

 		}


 	},
 	created(){
 		this.getRouter(resource,'/outPatientService');
 		console.log(this.resource+this.reourceList[0])
 	}
 
 }
</script>