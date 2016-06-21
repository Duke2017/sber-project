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
		},
		
		popoverClick: function(oEvent){
			
			if(! this.oPopover){
				
				this.oPopover = sap.ui.xmlfragment('fragments.Popover');
				this.getView().addDependent(this.oPopover);
				
			}
			var oButton = oEvent.getSource();
			jQuery.sap.delayedCall(0,this,function(){
				this.oPopover.openBy(oButton);
			})
			
		}
			
		
    })
})