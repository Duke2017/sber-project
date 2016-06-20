<core:View  xmlns:core="sap.ui.core" 
            xmlns:mvc="sap.ui.core.mvc" 
            xmlns="sap.m"
		    controllerName="project.main">
	<SplitApp>
	    <masterPages>
	        <Page class="bg-black"
	        title="Список дел на сегодня,16 января">
    <content>
    <List items="{/}">
	   <CustomListItem class="border-black-top border-black-bottom">
                <content>
    <VBox class="sapUiTinyMargin sapUiTinyMarginTopBottom">
	       <HBox justifyContent="SpaceBetween">
	           <Text text="{}" class="redcolor"/>
	           <Text text="до 28.01" class="redcolor"/>
	       </HBox>
	                             
	       <HBox justifyContent="Inherit">
	           <Text text="Через 3 дня заканчивается срок постановки задач у " class="graycolor"/>
                <Link text="7 подчиненных"/>
	       </HBox>
	                             
	       <Button text="Напомнить всем о сроках" type="Emphasized" class="sapUiTinyMarginTop"/>
    </VBox>
	           </content>                  
	   </CustomListItem>    
	   <CustomListItem class="border-black-bottom">
	       <content>
	           <VBox class="sapUiTinyMargin sapUiTinyMarginTopBottom">
                    <HBox justifyContent="SpaceBetween">
	                   <Text text="Заполните свою форму целей" class="blackcolor"/>
	                   <Text text="до 28.01" class ="graycolor"/>
	               </HBox>
	                   <Text text="Стартовала компания по постановке целей за 2016 год" class="sapUiTinyMargin graycolor"/>
	               <HBox justifyContent="Inherit" alignContent="Center">
                        <Button text="Заполнить цели" type="Emphasized"
                        width="180px" class="sapUiTinyMarginRightLeft"/>
	                   <Button text="{link}" type="Transparent"
	                   iconFirst="false" icon="sap-icon://slim-arrow-down"
	                   class="sapUiSizeCompact"/>
	               </HBox>
	           </VBox>
	       </content>
	   </CustomListItem>
	                     
	   <CustomListItem class="border-black-bottom bg-yellow">
	       <content>
	           <VBox alignItems="Center" 
                     class="bg-yellow">
                    <HBox justifyContent="SpaceBetween">
                        <Text text="Вам каскадировал цель Кравченко Г.В."
	                          class="blackcolor sapUiTinyMargin" />
	                   <core:Icon src="sap-icon://decline"
	                   class="sapUiTinyMargin"/>
                    </HBox>
	           <Text text="Создание открытой платформы комплексного анализа и прогнозирования управленческих показателей." 
	           class="graycolor sapUiTinyMargin"/>
	           </VBox>
	       </content>
	   </CustomListItem>
    </List>
    <List>
       <headerToolbar>
           <Toolbar>
               <Text text="Поставьте цель 20 подчиненным" class="white-color"></Text>
           </Toolbar>
       </headerToolbar>
        <CustomListItem class="border-black-bottom bg-yellow">
	       <content>
	           <VBox alignItems="Center" 
                     class="bg-yellow">
                    <HBox justifyContent="SpaceBetween">
                        <Text text="Вам каскадировал цель Кравченко Г.В."
	                          class="blackcolor sapUiTinyMargin" />
	                   <core:Icon src="sap-icon://decline"
	                   class="sapUiTinyMargin"/>
                    </HBox>
	           <Text text="Создание открытой платформы комплексного анализа и прогнозирования управленческих показателей." 
	           class="graycolor sapUiTinyMargin"/>
	           </VBox>
	       </content>
	   </CustomListItem>
    </List>            
	   </content>
    </Page>
</masterPages>

<detailPages>
    <Page>
    <content>
    </content>
    </Page>
</detailPages>
	</SplitApp>
</core:View>