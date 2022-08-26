Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application

StatusBarText = Browser("Create Standard Order:").Page("Create Standard Order:").SAPFrame("Create Standard Order:").WebElement("sbar_msg-txt").GetROProperty("innertext")
print StatusBarText
StatusBarArray = Split(StatusBarText," ")
Parameter("Order_number") = StatusBarArray(2)
print Parameter("Order_number") 

'AIUtil("close").CheckExists True
