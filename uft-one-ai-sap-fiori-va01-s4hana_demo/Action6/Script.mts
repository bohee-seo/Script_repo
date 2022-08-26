Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application


item=Parameter("item")
Material=Parameter("Material")
Order_quantity=Parameter("Order_quantity")
Unit=Parameter("Unit")

'Browser("Create Standard Order:").Page("Create Standard Order:").SAPFrame("Create Standard Order:").SAPTable("All Items").SetCellData 2, 2, item
'Browser("Create Standard Order:").Page("Create Standard Order:").SAPFrame("Create Standard Order:").SAPTable("All Items").SetCellData 2, 3, Material
'Browser("Create Standard Order:").Page("Create Standard Order:").SAPFrame("Create Standard Order:").SAPTable("All Items").SetCellData 2, 5, Order_quantity
'Browser("Create Standard Order:").Page("Create Standard Order:").SAPFrame("Create Standard Order:").SAPTable("All Items").SetCellData 2, 6, Unit

Browser("Create Standard Order:").Page("Create Standard Order:").SAPFrame("Create Standard Order:").SAPButton("Save").Click


