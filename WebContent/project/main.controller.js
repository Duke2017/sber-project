sap.ui.define(['sap/ui/core/mvc/Controller'],function(Controller){
    
    return Controller.extend('project.main',{
       
        onInit : function(){
            var json = new sap.ui.model.json.JSONModel('./position.json');
			this.getView().setModel(json);
        },
		
		todoGroupFactory : function(oGroup){
			return new sap.m.GroupHeaderListItem({
				title: oGroup.key === '' ? '' : oGroup.key,
				upperCase : false
			})
		},
				
		clickIcon : function(){
			alert('something');
		} 	
			
		
    })
})